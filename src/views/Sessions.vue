<template>
  <div>
    <md-button @click="getSessions">
      <md-icon>refresh</md-icon> Refresh</md-button
    >
    <div v-for="(entry, index) of sessions" :key="index">
      <session-display :data="entry"> </session-display>
    </div>
  </div>
</template>

<script>
import { gameApi } from "../main";
import SessionDisplay from "@/components/GameComponents/SessionDisplay.vue";

export default {
  name: "Home",
  data: () => ({
    sessions: null
  }),
  components: {
    "session-display": SessionDisplay
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
    }
  },
  mounted() {
    this.getSessions();
  }
};
</script>
