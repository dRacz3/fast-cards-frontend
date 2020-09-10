<template>
  <div>
    <div v-if="selected_session == null">
      <md-button @click="getSessions">
        <md-icon>refresh</md-icon> Refresh</md-button
      >
      <div v-for="(entry, index) of sessions" :key="index">
        <session-display :data="entry" :join_session="joinSession">
        </session-display>
      </div>
    </div>
    <div v-else>
      <md-button @click="selected_session = null">Exit</md-button>
      <play-room :session_name="selected_session"></play-room>
    </div>
  </div>
</template>

<script>
import { gameApi } from "../main";
import SessionDisplay from "@/components/GameComponents/SessionDisplay.vue";
import PlayRoom from "@/components/GameComponents/PlayRoom.vue";

export default {
  name: "Home",
  data: () => ({
    sessions: null,
    selected_session: null
  }),
  components: {
    "session-display": SessionDisplay,
    "play-room": PlayRoom
  },
  methods: {
    getSessions() {
      let opts = {
        search: "", // String | A search term.
        page: 1 // Number | A page number within the paginated result set.
      };

      gameApi.gameEngineApiSessionsList(opts, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log(
            "apiBlackCardsList API called successfully. Returned data: "
          );
          let cards = JSON.parse(response.text).results;
          console.log();
          this.sessions = cards;
        }
      });
    },
    joinSession(session_name) {
      this.selected_session = session_name;
    }
  },
  mounted() {
    this.getSessions();
  }
};
</script>
