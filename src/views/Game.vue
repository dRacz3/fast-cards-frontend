<template>
  <div>
    <div v-if="!isUserLoginValid">
      <user-login-failure></user-login-failure>
    </div>
    <div v-else>
      <div v-if="!room_data">
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
              :available_decks="dummydecks"
              @newRoomCreated="newRoomCreated"
            ></game-preferences>

            <!-- <md-button class="md-raised" @click="joinRoom">Join</md-button> -->
            <!-- <md-button class="md-raised" @click="refreshRoomList"
            >Refresh rooms</md-button
          > -->
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
      <md-toolbar v-if="room_data">
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
      <!-- {{ room_data }} -->
      <!-- <md-button @click="refresh">Refresh</md-button> -->

      <div v-if="room_data">
        <!-- Before the game  starts -->
        <div v-if="room_data.state === 'STARTING'">
          <welcome-view
            @startGameClicked="startGame"
            :room_data="room_data"
          ></welcome-view>
        </div>

        <!-- When players are submitting cards -->
        <div v-else-if="room_data.state === 'PLAYERS_SUBMITTING_CARDS'">
          <players-submitting-view
            :room_data="room_data"
            :submitClicked="submit"
          ></players-submitting-view>
        </div>
        <div v-else-if="room_data.state === 'TZAR_CHOOSING_WINNER'">
          <tzar-chosing-winner-view
            :room_data="room_data"
            @onWinnerSelected="selectWinner"
          ></tzar-chosing-winner-view>
        </div>

        <div v-else-if="room_data.state === 'FINISHED'">
          <game-has-finished-view
            :room_data="room_data"
          ></game-has-finished-view>
        </div>
      </div>
      <div v-if="room_data">
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

import RoomSelection from "../components/GameComponents/RoomSelection";
import WelcomeView from "../components/GameComponents/WelcomeView";
import PlayersSubmittingView from "../components/GameComponents/PlayersSubmittingView";
import TzarChosingWinner from "../components/GameComponents/TzarChosingWinner";
import GameFinishedView from "../components/GameComponents/GameFinishedView";
import GamePreferencesForm from "../components/GameComponents/GamePreferencesForm";
import UserLoginFailureDisplay from "../components/UserLoginFailureDisplay";
import { WhiteCard, SelectWinningSubmission } from "../libs/src";
import WebsocketView from "./WebsocketView";

export default {
  name: "Game",
  data: () => ({
    room_name_input: null,
    room_name: null,
    room_data: null,
    submissions: [],
    // refresh_timer: null,
    available_rooms: [],
    show_advanced_room_options: true,
    dummydecks: [
      {
        id_name: "hungarian",
        description: "Hungarian card collection",
        official: false,
        name: "hungarian",
        icon: "hungarian",
      },
      {
        id_name: "2012 Holiday Pack",
        description: "2012 Holiday Pack",
        official: true,
        name: "2012 Holiday Pack",
        icon: "2012 Holiday Pack",
      },
    ],
  }),
  components: {
    "welcome-view": WelcomeView,
    "players-submitting-view": PlayersSubmittingView,
    "tzar-chosing-winner-view": TzarChosingWinner,
    "game-has-finished-view": GameFinishedView,
    "room-selection": RoomSelection,
    "websocket-view": WebsocketView,
    "game-preferences": GamePreferencesForm,
    "user-login-failure": UserLoginFailureDisplay,
  },
  mounted() {
    // this.refreshRoomList();
  },
  destroyed() {
    // clearInterval(this.refresh_timer);
  },
  unmounted() {
    // clearInterval(this.refresh_timer);
  },
  methods: {
    newRoomCreated(roomName) {
      this.refreshRoomList();
      this.directJoinRoom(roomName);
    },
    directJoinRoom(room_name) {
      // console.log(`joining room directly`);
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
            pushMessageToSnackbar("Joined room");
            // this.refresh_timer = setInterval(() => this.refresh(), 2000);
          }
        }
      );
    },

    leaveRoom() {
      this.refreshRoomList();
      cardsAgainstApi.leaveGameGameLeavePost(
        this.room_name,
        (error, data, response) => {
          this.room_data = null;
          this.room_name = null;
          pushMessageToSnackbar("Left room");
          if (error) {
            console.error(error);
            pushMessageToSnackbar(
              `Failed to leave room.${JSON.parse(response.text).detail}`
            );
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
              // pushMessageToSnackbar("Refresh success");
              this.room_data = JSON.parse(response.text);
            }
          }
        );
      }
    },
    submit(cards) {
      console.log(`Submit called: ${JSON.stringify(cards)}`);
      cards.map((v) => WhiteCard.constructFromObject(v));
      cardsAgainstApi.submitCardsGameSubmitPost(
        this.room_name,
        cards,
        (error, data, response) => {
          if (error) {
            console.error(error);
            pushMessageToSnackbar(
              `Failed to Submit cards :.${JSON.parse(response.text).detail}`
            );
          } else {
            this.room_data = JSON.parse(response.text);
            // pushMessageToSnackbar("Cards submitted.");
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
    //! Display only cards that are not submitted

    isCurrentPlayerTzar() {
      return this.player.current_role === "TZAR";
    },

    isUserLoginValid() {
      return this.$store.state.isLoginValid;
    },
  },
};
</script>
