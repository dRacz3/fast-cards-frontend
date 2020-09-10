<template>
  <div>
    <md-app class="md-accent" v-if="session_data">
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ session_data.session }}</span>
      </md-app-toolbar>

      <md-app-content>
        <player-display
          :player_data="session_data.tzar"
          is_tzar="true"
        ></player-display>
        <black-card-display
          :card_data="session_data.active_black_card"
        ></black-card-display>
        <!-- {{ profile_data }} -->
        <div v-if="profile_data">
          <ul>
            <div v-for="(entry, index) of profile_data" :key="index">
              <player-display :player_data="entry.user_profile" />
              <!-- <white-card-view :card_data="entry"> </white-card-view> -->
            </div>
          </ul>
        </div>
      </md-app-content>
    </md-app>
    <div v-else></div>

    <md-button @click="update_session_info()"> Click</md-button>
  </div>
</template>

<script>
import { gameApi } from "../../main";
import BlackCardDisplay from "./BlackCardDisplay";
import PlayerDisplay from "./PlayerDisplay";

export default {
  data: () => ({
    display: "",
    session_data: null,
    profile_data: null
  }),
  components: {
    "black-card-display": BlackCardDisplay,
    "player-display": PlayerDisplay
  },
  props: {
    session_name: {
      required: true
    }
  },
  mounted() {
    this.update_session_info();
  },
  methods: {
    update_session_info() {
      let sessionId = this.session_name;
      let opts = {};
      gameApi.gameEngineApiSessionRoundsList(
        sessionId,
        opts,
        // eslint-disable-next-line no-unused-vars
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            console.log("API called successfully. Returned data: " + response);
            this.session_data = JSON.parse(response.text).results[0];
            console.log(this.session_data);
            this.update_player_profiles_in_session();
          }
        }
      );
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
          }
        }
      );
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
</style>
