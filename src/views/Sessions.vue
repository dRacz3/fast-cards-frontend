<template>
  <div>
    <md-button @click="getSessions">
      <md-icon>refresh</md-icon> Refresh</md-button
    >
    <div v-for="(entry, index) of cards" :key="index">
      <session-display :data="entry"> </session-display>
      <br />
    </div>
    <md-button @click="getCards">Click</md-button>
  </div>
</template>

<script>
import { backendApi, gameApi } from "../main";
import SessionDisplay from "@/components/GameComponents/SessionDisplay.vue";

export default {
  name: "Home",
  data: () => ({
    cards: null
  }),
  components: {
    "session-display": SessionDisplay
  },
  methods: {
    getCards() {
      console.log("CALLED!");
      let opts = {
        search: "", // String | A search term.
        page: 1 // Number | A page number within the paginated result set.
      };

      backendApi.apiBlackCardsList(opts, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          console.log(
            "apiBlackCardsList API called successfully. Returned data: "
          );
          let cards = JSON.parse(response.text).results;
          console.log();
          this.cards = cards;
        }
      });
    },
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
          this.cards = cards;
        }
      });
    }
  },
  mounted() {
    this.getSessions();
  }
};
</script>
