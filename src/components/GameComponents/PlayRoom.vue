<template>
  <div>
    <md-app class="md-accent" v-if="session_data && session_data.has_started">
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{
          session_data.last_round.session.session_id
        }}</span>
      </md-app-toolbar>

      <md-app-content>
        <!-- {{ profile_data }} -->
        <div v-if="profile_data">
          <ul>
            <div v-for="(entry, index) of profile_data" :key="index">
              <player-display
                :player_data="entry.user_profile"
                :is_tzar="isTzar(entry.user_profile)"
              />
            </div>
          </ul>
        </div>

        <!-- Active black card along with the submitted cards -->
        <black-card-display
          :card_data="session_data.last_round.active_black_card"
        ></black-card-display>

        <!-- Cards submitted so far in the round -->
        <ul v-if="white_card_submissions_by_everyone.length > 0">
          <md-list
            v-for="(entry, index) of white_card_submissions_by_everyone"
            :key="index"
          >
            <md-list-item>
              <submission-display
                class="md-list-item-text"
                :submission_info="entry"
                :black_card_data="session_data.last_round.active_black_card"
              >
              </submission-display>
            </md-list-item>
          </md-list>
        </ul>

        <!-- Pending submissions for the current player  -->
        <div>
          <ul v-if="submissions.length > 0">
            <div v-for="(entry, index) of submissions" :key="index">
              <white-card-display
                :card_data="entry"
                :on_clicked_callback="remove_card_from_submission"
              >
              </white-card-display>
            </div>
          </ul>
        </div>

        <div
          v-if="
            session_data.last_round.active_black_card.pick != submissions.length
          "
        >
          You have to select more cards before you can submit it!
        </div>
        <md-button v-else class="md-raised" @click="submit_cards()"
          >Submit Selected</md-button
        >

        <!-- Cards in the user's hand -->
        <div>
          <ul>
            <div v-for="(entry, index) of cards_in_user_hand" :key="index">
              <white-card-display
                :card_data="entry"
                :on_clicked_callback="on_white_card_clicked"
              >
              </white-card-display>
            </div>
          </ul>
        </div>
      </md-app-content>
    </md-app>

    <div v-else>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Room [{{ session_name }}]</span>
      </md-app-toolbar>
      You are Game has not started yet.
      <md-button @click="start_game()">Start Game</md-button>
    </div>

    <md-button @click="update_session_info()"> Click</md-button>
    <md-button @click="connect_to_socket()">Websocket</md-button>
  </div>
</template>

<script>
import { gameApi, backendSocket } from "../../main";
import BlackCardDisplay from "./BlackCardDisplay";
import WhiteCardDisplay from "./WhiteCardDisplay";
import PlayerDisplay from "./PlayerDisplay";
import SubmissionDisplay from "./SubmissionDisplay";

export default {
  data: () => ({
    display: "",
    session_data: null,
    profile_data: null,
    submissions: [],
    cards_in_user_hand: [],
    submissions_by_everyone: []
  }),
  components: {
    "black-card-display": BlackCardDisplay,
    "white-card-display": WhiteCardDisplay,
    "player-display": PlayerDisplay,
    "submission-display": SubmissionDisplay
  },
  props: {
    session_name: {
      required: true
    }
  },
  mounted() {
    this.update_session_info();
    this.$store.commit("register_on_message_callback", this.on_new_message);
  },
  methods: {
    connect_to_socket() {
      backendSocket.$connect(
        "ws://" +
          "localhost:8000/ws/chat/" +
          "user/" +
          this.session_name +
          "/" +
          "?token=" +
          this.$store.state.api_token
      );
    },

    start_game() {
      console.log(backendSocket);
      backendSocket.$socket.send(
        JSON.stringify({
          message: "step"
        })
      );
    },
    on_new_message(message) {
      if (message === "UPDATE") {
        this.update_session_info();
      } else {
        console.log("Unhandled message: " + message);
        console.log(message);
      }
    },
    update_session_info() {
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
            this.update_submissions_by_other_players();
            this.update_player_profiles_in_session();
          }
        }
      );
    },
    on_white_card_clicked(card, isSelected) {
      if (isSelected) {
        // Cant select more than that
        if (
          this.submissions.length + 1 >
          this.session_data.last_round.active_black_card.pick
        ) {
          this.$store.commit(
            "push_message_to_snackbar",
            "You cannot submit more cards than the allowed pick count"
          );
          return false;
        } else {
          this.submissions.push(card);
        }
      } else {
        // eslint-disable-next-line no-unused-vars
        this.remove_card_from_submission(card);
      }
      return true;
    },
    remove_card_from_submission(card /*isSelected*/) {
      // eslint-disable-next-line no-unused-vars
      this.submissions = this.submissions.filter(function(value, index, arr) {
        return value.text != card.text;
      });
    },
    update_player_profiles_in_session() {
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
            console.log(this.session_data);
            this.connect_to_socket();
            gameApi.gameEngineApiSessionMycardsList(
              sessionId,
              (error, data, response) => {
                if (error) {
                  console.error(error);
                } else {
                  console.log(
                    "gameEngineApiSessionMycardsList called successfully. Returned data: " +
                      response
                  );
                  this.cards_in_user_hand = response.body;
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

    submit_cards() {
      let submit_text = "__submit__|";
      let selected_card_texts = this.submissions.map(e => e.text);

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
