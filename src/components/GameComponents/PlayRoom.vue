<template>
  <div>
    <md-app
      v-if="
        session_data !== null &&
          session_data.last_round.session.session_id !== null
      "
    >
      <md-app-toolbar class="md-primary flex-row-view">
        <span class="md-title">
          Room [{{ session_data.last_round.session.session_id }}], round : #{{
            session_data.last_round.roundNumber
          }}
          with {{ number_of_players }} player
        </span>

        <div>
          <md-button @click="session_data_update()" class="md-raised md-primary"
            >Refresh session data</md-button
          >
          <slot></slot>
          <!-- <md-button @click="connect_to_socket()" class="md-raised md-primary"
          >Reconnect</md-button
        > -->
        </div>
      </md-app-toolbar>

      <md-app-content>
        <div v-if="!session_data.has_started">
          <waiting-for-start-view
            :session_name="session_name"
            :players_in_session="players"
            :step_game="step_game"
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
            :profile_data_all_players="players"
            :current_player_data="current_player_data"
            :select_winner="select_winner"
          ></submission-round-view>
        </div>
      </md-app-content>
    </md-app>

    <md-dialog-alert
      :md-title="dialog.title"
      :md-active.sync="dialog.active"
      :md-content="dialog.content"
      md-confirm-text="Cool!"
    >
    </md-dialog-alert>
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
    has_player_submitted: false,
    dialog: {
      title: "",
      active: false,
      content: "lofasz"
    },
    reconnect_timer: null
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
    this.reconnect_timer = setInterval(() => {
      if (!this.$store.state.socket.isConnected) {
        this.$store.commit(
          "push_message_to_snackbar",
          "Connection lost attempting to reconnect to socket."
        );
        this.connect_to_socket();
      }
    }, 3000);
  },
  methods: {
    connect_to_socket() {
      backendSocket.$connect(
        "ws://" +
          window.location.hostname +
          ":8000/ws/chat/" +
          "user/" +
          this.session_name +
          "/" +
          "?token=" +
          this.$store.state.api_token
      );
    },

    step_game() {
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
      } else if (message.startsWith("__DECLARE_WINNER__")) {
        console.log("Winner has been declared!");
        this.dialog.content =
          "Winner has been selected! IT is : " +
          message.split("__|")[1] +
          "<br>NEXT ROUND STARTS!";
        this.dialog.active = true;
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
            console.error(
              "session_data_update-gameEngineApiSessionViewList returned with error"
            );
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
                  console.error(
                    "update_player_data - gameEngineApiSessionMycardsList returned with error "
                  );
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
            console.error("gameEngineApiSessionSubmissionsList");
            console.error(error);
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

    select_winner(winning_submission_id) {
      let submit_text = "__selectwinner__|" + winning_submission_id;

      backendSocket.$socket.send(
        JSON.stringify({
          message: submit_text
        })
      );
      this.step_game();
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
    clearInterval(this.this.reconnect_timer);
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

.flex-row-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
