<template>
  <div>
    <h1>Test View</h1>
    <md-button @click="getCards()">Fetch</md-button>
    <div v-for="(entry, index) of cards" :key="index">
      <black-card-view :data="entry"> </black-card-view>
    </div>
  </div>
</template>

<script>
import { backendApi } from "../main";
import BlackCardDisplay from "../components/GameComponents/BlackCardDisplay";

export default {
  data: () => ({
    cards: null
  }),
  components: {
    "black-card-view": BlackCardDisplay
  },
  methods: {
    getCards() {
      let opts = {
        search: "", // String | A search term.
        page: 1 // Number | A page number within the paginated result set.
      };

      backendApi.apiBlackCardsList(opts, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          let cards = JSON.parse(response.text).results;
          this.cards = cards;
        }
      });
    }
  }
};
</script>

<style></style>
