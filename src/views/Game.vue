<template>
  <div>
    <md-button @click="refresh">Refresh</md-button>
    <div>
      <h1>Welcome to room [{{ room_name }}]</h1>
      <md-field>
        <label>Room</label>
        <md-input v-model="room_name"></md-input>
      </md-field>
      <md-button @click="newRoom">New room</md-button>
      <md-button @click="joinRoom">Join</md-button>
      <md-button @click="leaveRoom">Leave</md-button>
    </div>

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
        {{ this.room_data }}
      </div>
    </div>

    <br />
  </div>
</template>

<script>
import { cardsAgainstApi, pushMessageToSnackbar } from "../main";
// import BlackCardDisplay from "../GameComponents/BlackCardDisplay";
// import PlayerDisplay from "../components/GameComponents/PlayerDisplay";
// import WhiteCardDisplay from "../components/GameComponents/WhiteCardDisplay";
import WelcomeView from "../components/GameComponents/WelcomeView";
import PlayersSubmittingView from "../components/GameComponents/PlayersSubmittingView";
import { WhiteCard } from "../libs/src";

export default {
  name: "Game",
  data: () => ({
    room_name: null,
    room_data: null,
    submissions: [],
  }),
  components: {
    // "black-card-display": BlackCardDisplay,
    // "player-display": PlayerDisplay,
    // "white-card-display": WhiteCardDisplay,
    "welcome-view": WelcomeView,
    "players-submitting-view": PlayersSubmittingView,
  },
  mounted() {
    // this.newRoom();
    // this.joinRoom();
    // this.refresh();
  },
  methods: {
    newRoom() {
      cardsAgainstApi.createNewGameGameNewPost(
        this.room_name,
        (error, data, response) => {
          if (error) {
            console.error(error);
            console.error(response);
            pushMessageToSnackbar(
              `Failed to create room.${JSON.parse(response.text).detail}`
            );
            // this.joinRoom();
          } else {
            this.room_data = JSON.parse(response.text);
            console.log("Room created");
            pushMessageToSnackbar("Room was created.");
            this.joinRoom();
          }
        }
      );
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
          }
        }
      );
    },

    leaveRoom() {
      cardsAgainstApi.leaveGameGameLeavePost(
        this.room_name,
        (error, data, response) => {
          if (error) {
            console.error(error);
            pushMessageToSnackbar(
              `Failed to leave room.${JSON.parse(response.text).detail}`
            );
          } else {
            this.room_data = null;
            pushMessageToSnackbar("Left room");
            this.room_name = null;
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
      cardsAgainstApi.refreshGameRefreshGet(
        this.room_name,
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            pushMessageToSnackbar("Refresh success");
            this.room_data = JSON.parse(response.text);
          }
        }
      );
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
          } else {
            this.room_data = JSON.parse(response.text);
            pushMessageToSnackbar("Cards submitted.");
          }
        }
      );
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
  },
};
</script>
