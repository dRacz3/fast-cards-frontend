<template>
  <div>
    <md-app
      v-if="
        session_data !== null &&
          session_data.last_round.session.session_id !== null
      "
    >
      <md-app-toolbar class="md-primary">
        <span class="md-title">
          Room [{{ session_data.last_round.session.session_id }}], round : #{{
            session_data.last_round.roundNumber
          }}
          with {{ number_of_players }} player
        </span>
      </md-app-toolbar>

      <md-app-content>
        <div v-if="!session_data.has_started">
          <waiting-for-start-view
            :session_name="session_name"
            :players_in_session="players"
            :start_game="start_game"
          >
          </waiting-for-start-view>
        </div>
        <div v-else-if="session_data.has_started && !has_player_submitted">
          <!-- {{ session_data.players.profiles }} -->
          <during-game-round-view
            :active_round="session_data.last_round"
            :profile_data="session_data.players.profiles"
            :update_player_data="update_player_data"
            :current_player_data="current_player_data"
            :submit_cards="submit_cards"
          ></during-game-round-view>
        </div>
        <div v-else-if="session_data.has_started && has_player_submitted">
          <submission-round-view
            :submissions="submissions_by_everyone"
            :session_data="session_data"
            :profile_data="players"
          ></submission-round-view>
        </div>
      </md-app-content>
    </md-app>

    <md-button @click="session_data_update()"> Click</md-button>
    <md-button @click="connect_to_socket()">Websocket</md-button>
  </div>
</template>

<script>
import { gameApi, backendSocket } from "../../main";
import WaitingForStart from "../GameStateViews/WaitingForStart";
import DuringGameRound from "../GameStateViews/DuringGameRound";
import PlaySubmissionView from "../GameStateViews/PlaySubmissionView";

export default {
  data: () => ({
    display: "",
    session_data: null,
    profile_data: null,
    current_player_data: null,
    submissions_by_everyone: [],
    has_player_submitted: false
  }),
  components: {
    "waiting-for-start-view": WaitingForStart,
    "during-game-round-view": DuringGameRound,
    "submission-round-view": PlaySubmissionView
  },
  props: {
    session_name: {
      required: true
    }
  },
  mounted() {
    this.session_data_update();
    this.$store.commit("register_on_message_callback", this.on_new_message);
    this.connect_to_socket();
  },
  methods: {
    connect_to_socket() {
      backendSocket.$connect(
        "ws://" +
          "10.36.60.241:8000/ws/chat/" +
          "user/" +
          this.session_name +
          "/" +
          "?token=" +
          this.$store.state.api_token
      );
    },

    start_game() {
      backendSocket.$socket.send(
        JSON.stringify({
          message: "step"
        })
      );
      this.session_data_update();
    },

    on_new_message(message) {
      if (message === "UPDATE") {
        this.session_data_update();
      } else if (message === "REQUEST_PLAYER_DATA") {
        this.update_player_data();
      } else {
        console.log("Unhandled message: " + message);
        console.log(message);
      }
    },

    session_data_update() {
      let sessionId = this.session_name;

      gameApi.gameEngineApiSessionViewList(
        sessionId,
        // eslint-disable-next-line no-unused-vars
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            console.log("API called successfully. Returned data: " + response);
            this.session_data = response.body;
            this.submissions = this.session_data.submissions;
            this.update_has_player_submitted();
            this.update_submissions_by_other_players();
          }
        }
      );
    },

    remove_card_from_submission(card /*isSelected*/) {
      // eslint-disable-next-line no-unused-vars
      this.submissions = this.submissions.filter(function(value, index, arr) {
        return value.text != card.text;
      });
    },
    update_player_data() {
      console.log("update_player_data() called");
      let sessionId = this.session_name;
      let opts = {};
      gameApi.gameEngineApiSessionProfilesList(
        sessionId,
        opts,
        // eslint-disable-next-line no-unused-vars
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            console.log("API called successfully. Returned data: " + response);
            this.profile_data = JSON.parse(response.text).results;
            gameApi.gameEngineApiSessionMycardsList(
              sessionId,
              (error, data, response) => {
                if (error) {
                  console.error(error);
                } else {
                  console.log(
                    "Fetching player data called successfully. Returned data: " +
                      response
                  );
                  this.current_player_data = response.body;
                }
              }
            );
          }
        }
      );
    },

    update_submissions_by_other_players() {
      let sessionId = this.session_name;
      let opts = {};
      gameApi.gameEngineApiSessionSubmissionsList(
        sessionId,
        opts,
        // eslint-disable-next-line no-unused-vars
        (error, data, response) => {
          console.log("Returned..");
          if (error) {
            console.error("gameEngineApiSessionSubmissionsList" + error);
          } else {
            console.log(
              "gameEngineApiSessionSubmissionsList successfully returned data: " +
                response
            );
            this.submissions_by_everyone = JSON.parse(response.text).results;
          }
        }
      );
    },

    update_has_player_submitted() {
      let sessionId = this.session_name;
      gameApi.gameEngineApiSessionHasPlayerSubmittedList(
        sessionId,
        (error, data, response) => {
          if (error) {
            console.error("Didn't receive info if player has submitted");
            this.has_player_submitted = false;
          } else {
            console.log(response);
            this.has_player_submitted = true;
          }
        }
      );
    },

    submit_cards(submissions) {
      let submit_text = "__submit__|";
      let selected_card_texts = submissions.map(e => e.text);

      backendSocket.$socket.send(
        JSON.stringify({
          message: submit_text + selected_card_texts.join("|")
        })
      );
    },
    isTzar(player) {
      if (player.user == this.session_data.last_round.tzar.user) {
        return true;
      }
      return false;
    }
  },

  destroyed() {
    console.log("PlayRoom destroyed");
    this.$store.commit("register_on_message_callback", null);
    backendSocket.$disconnect();
  },

  computed: {
    submit_command() {
      let submit_text = "__submit__|";
      let selected_card_texts = this.submissions.map(e => e.text);
      return submit_text + selected_card_texts.join("|");
    },

    white_card_submissions_by_everyone() {
      return this.submissions_by_everyone;
    },

    players() {
      if (this.session_data) {
        console.log("Returnign profiles!");
        console.warn(this.session_data.players.profiles);
        return this.session_data.players.profiles;
      }
      return null;
    },
    number_of_players() {
      return this.players.length;
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 10px;
  width: 100%;
}

.central-row-view {
  display: flex;
  flex-direction: row;
  padding: 10px;
  border: 5px chocolate;
}
</style>
