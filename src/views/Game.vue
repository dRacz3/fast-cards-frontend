<template>
  <div>
    <div>
      <md-dialog :md-active.sync="dialog.active">
        <md-dialog-title>Proceeding to the next stage</md-dialog-title>
        <md-dialog-content>{{ dialog.content }}</md-dialog-content>
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>
      </md-dialog>
    </div>
    <div v-if="!isUserLoginValid">
      <user-login-failure></user-login-failure>
    </div>

    <div v-else>
      <div v-if="!isUserInGameRoom">
        <div>
          <md-toolbar>
            <h1 class="md-title" style="flex: 1">Welcome to the lobby</h1>
            <div>Create room -></div>
            <md-button
              class="md-icon-button"
              @click="show_advanced_room_options = !show_advanced_room_options"
            >
              <md-icon v-if="!show_advanced_room_options"
                >keyboard_arrow_down</md-icon
              >
              <md-icon v-else>keyboard_arrow_up</md-icon>
            </md-button>
          </md-toolbar>
          <div v-if="show_advanced_room_options">
            <game-preferences
              @newRoomCreated="newRoomCreated"
            ></game-preferences>
          </div>
        </div>

        <div>
          <md-divider></md-divider>
          <room-selection
            @onRefreshClicked="refreshRoomList"
            @onJoinRoomClicked="directJoinRoom"
            :rooms="available_rooms"
          ></room-selection>
        </div>
      </div>
      <md-toolbar v-if="isUserInGameRoom">
        <h1 style="flex: 1" class="md-title">
          You are currently in room [{{ room_name }}]
        </h1>
        <md-button @click="refresh" class="md-raised"
          ><md-icon>refresh</md-icon> Force refresh</md-button
        >
        <md-button class="md-raised" @click="leaveRoom"
          >Leave <md-icon>exit_to_app</md-icon></md-button
        >
      </md-toolbar>
      <!-- Room header -->
      <div></div>

      <div v-if="isUserInGameRoom">
        <!-- Before the game  starts -->
        <div v-if="current_displayed_state === 'STARTING'">
          <transition name="fade">
            <welcome-view
              @startGameClicked="startGame"
              :room_data="room_data"
            ></welcome-view>
          </transition>
        </div>

        <!-- When players are submitting cards -->
        <div v-else-if="current_displayed_state === 'PLAYERS_SUBMITTING_CARDS'">
          <transition name="fade">
            <players-submitting-view
              :room_data="room_data"
              :submitClicked="submit"
            ></players-submitting-view>
          </transition>
        </div>
        <div v-else-if="current_displayed_state === 'TZAR_CHOOSING_WINNER'">
          <transition name="fade">
            <choosing-winner-view
              :room_data="room_data"
              @onWinnerSelected="selectWinner"
            ></choosing-winner-view>
          </transition>
        </div>

        <div v-else-if="current_displayed_state === 'FINISHED'">
          <game-has-finished-view
            :room_data="room_data"
          ></game-has-finished-view>
        </div>
      </div>
      <div v-if="isUserInGameRoom">
        <websocket-view
          v-show="false"
          :room_data="room_data"
          @broadcastReceivedFromServer="refresh"
        ></websocket-view>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { cardsAgainstApi, pushMessageToSnackbar } from "../main";
import { gameStateTextNicer } from "@/helpers/nicerTexts";

import RoomSelection from "@/components/RoomSelection/RoomSelection";
import WelcomeView from "@/components/GameViews/WelcomeView";
import PlayersSubmittingView from "@/components/GameViews/PlayersSubmittingView";
import ChoosingWinner from "@/components/GameComponents/ChoosingWinner";
import GameFinishedView from "@/components/GameViews/GameFinishedView";
import GamePreferencesForm from "@/components/RoomSelection/GamePreferencesForm";
import UserLoginFailureDisplay from "@/components/UserLoginFailureDisplay";
import { WhiteCard, SelectWinningSubmission } from "@/libs/src";
import WebsocketView from "./WebsocketView";

export default {
  name: "Game",
  data: () => ({
    room_name_input: null,
    room_name: null,
    room_data: null,
    current_displayed_state: null,
    submissions: [],
    refresh_timer: null,
    available_rooms: [],
    show_advanced_room_options: true,
    dialog: {
      active: false,
      content: "content unset",
    },
    advance_timeout: null,
  }),
  components: {
    "welcome-view": WelcomeView,
    "players-submitting-view": PlayersSubmittingView,
    "choosing-winner-view": ChoosingWinner,
    "game-has-finished-view": GameFinishedView,
    "room-selection": RoomSelection,
    "websocket-view": WebsocketView,
    "game-preferences": GamePreferencesForm,
    "user-login-failure": UserLoginFailureDisplay,
  },
  mounted() {
    this.refreshRoomList();
    this.refresh_timer = setInterval(() => {
      this.refreshRoomList();
    }, 1000);
  },
  destroyed() {},
  unmounted() {},
  beforeDestroy() {
    clearInterval(this.refresh_timer);
  },
  methods: {
    displayTemporaryDialog(message, time) {
      this.dialog.content = message;
      this.dialog.active = true;

      setTimeout(() => {
        this.dialog.active = false;
        this.dialog.content = "";
      }, time);
    },

    updateGameState(room_data) {
      const prevState = this.current_displayed_state;
      if (room_data.state) {
        if (prevState !== room_data.state) {
          if (this.isUserInGameRoom) {
            const stateText = gameStateTextNicer.get(room_data.state);
            this.displayTemporaryDialog(`${stateText} `, 1500);

            this.advance_timeout = setTimeout(() => {
              this.current_displayed_state = room_data.state;
            }, 1000);
          } else {
            this.room_data = null;
          }
        }
      }
    },

    newRoomCreated(roomName) {
      this.refreshRoomList();
      this.directJoinRoom(roomName);
    },

    directJoinRoom(room_name) {
      this.room_name = room_name;
      this.joinRoom();
    },

    joinRoom() {
      cardsAgainstApi.joinGameGameJoinPost(
        this.room_name,
        (error, data, response) => {
          if (error) {
            console.error(error);
            pushMessageToSnackbar(
              `Failed to join room.${JSON.parse(response.text).detail}`
            );
          } else {
            this.room_data = JSON.parse(response.text);
            this.updateGameState(this.room_data);
            pushMessageToSnackbar("Joined room");
          }
        }
      );
    },

    leaveRoom() {
      this.refreshRoomList();
      clearTimeout(this.advance_timeout);
      cardsAgainstApi.leaveGameGameLeavePost(
        this.room_name,
        (error, data, response) => {
          this.room_data = null;
          this.room_name = null;
          this.current_displayed_state = null;
          pushMessageToSnackbar("Left room");
          if (error) {
            console.error(error);
            let message = error;
            if (response.text) {
              try {
                message += ",  " + response.text;
              } catch (error) {
                message += ".";
              }
            }
            pushMessageToSnackbar(`Failed to leave room.${message}`);
          }
        }
      );
    },
    startGame() {
      cardsAgainstApi.startGameGameStartGamePost(
        this.room_name,
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            pushMessageToSnackbar("Game has started");
            this.room_data = JSON.parse(response.text);
            this.updateGameState(this.room_data);
          }
        }
      );
    },
    refresh() {
      if (this.room_name) {
        cardsAgainstApi.refreshGameRefreshGet(
          this.room_name,
          (error, data, response) => {
            if (error) {
              console.error(error);
            } else {
              this.room_data = JSON.parse(response.text);
              this.updateGameState(this.room_data);
            }
          }
        );
      }
    },
    submit(cards) {
      cards.map((v) => WhiteCard.constructFromObject(v));
      cardsAgainstApi.submitCardsGameSubmitPost(
        this.room_name,
        cards,
        (error, data, response) => {
          if (error) {
            console.error(error);
            pushMessageToSnackbar(`Failed to Submit cards :.${error}`);
          } else {
            this.room_data = JSON.parse(response.text);
            this.updateGameState(this.room_data);
          }
        }
      );
    },
    selectWinner(submission) {
      let selectWinningSubmission = SelectWinningSubmission.constructFromObject(
        { submission: submission }
      );
      cardsAgainstApi.selectWinnerGameSelectwinnerPost(
        this.room_name,
        selectWinningSubmission,
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            // pushMessageToSnackbar("Winner was selected!");
            this.room_data = JSON.parse(response.text);
            this.updateGameState(this.room_data);
          }
        }
      );
    },
    refreshRoomList() {
      cardsAgainstApi.listRoomsGameRoomsGet((error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          // pushMessageToSnackbar("Refreshing avialable rooms...");
          this.available_rooms = JSON.parse(response.text).rooms;
        }
      });
    },
  },

  computed: {
    player() {
      return this.room_data.player;
    },

    isCurrentPlayerTzar() {
      return this.player.current_role === "TZAR";
    },

    isUserLoginValid() {
      return this.$store.state.isLoginValid;
    },

    isUserInGameRoom() {
      return this.room_name && this.room_data;
    },
  },
};
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
