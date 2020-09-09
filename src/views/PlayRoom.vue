<template>
  <div>
    <md-app class="md-accent" v-if="session_data">
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ session_data.session }}</span>
      </md-app-toolbar>

      <md-app-content>
        <black-card-display
          :card_data="session_data.active_black_card"
        ></black-card-display>
      </md-app-content>
    </md-app>
    <div v-else></div>
    <md-button @click="update_session_info()"> Click</md-button>
  </div>
</template>

<script>
import { gameApi } from "../main";
import BlackCardDisplay from "../components/GameComponents/BlackCardDisplay";
export default {
  data: () => ({
    display: "",
    session_data: null
  }),
  components: {
    "black-card-display": BlackCardDisplay
  },
  props: {
    // session_name: {
    //   required: true
    // }
  },
  methods: {
    update_session_info() {
      let sessionId = "szoba1"; // String |
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
            console.log(this.session_data.active_black_card);
          }
        }
      );
    }
  }
};
</script>

<style></style>
