<template>
  <div>
    <h1>Test View</h1>
    <md-button @click="getCards()">Fetch</md-button>
    <ul>
      <div v-for="(entry, index) of cards" :key="index">
        <black-card-view :card_data="entry"> </black-card-view>
      </div>
    </ul>

    <md-button @click="getWhiteCards()">Fetch (WHITE)</md-button>
    <ul>
      <div v-for="(entry, index) of white_cards" :key="index">
        <white-card-view :card_data="entry"> </white-card-view>
      </div>
    </ul>
  </div>
</template>

<script>
import { backendApi } from "../main";
import BlackCardDisplay from "../components/GameComponents/BlackCardDisplay";
import WhiteCardDisplay from "../components/GameComponents/WhiteCardDisplay";

export default {
  data: () => ({
    cards: null,
    white_cards: null,
    chatSocket: null
  }),
  components: {
    "black-card-view": BlackCardDisplay,
    "white-card-view": WhiteCardDisplay
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
    },
    getWhiteCards() {
      let opts = {
        search: "", // String | A search term.
        page: 1 // Number | A page number within the paginated result set.
      };

      backendApi.apiWhiteCardsList(opts, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          let cards = JSON.parse(response.text).results;
          this.white_cards = cards;
        }
      });
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
