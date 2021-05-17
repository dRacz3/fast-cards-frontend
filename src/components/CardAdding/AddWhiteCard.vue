<template>
  <div>
    <md-toolbar :md-elevation="1">
      <md-button class="md-raised" v-if="show" @click="show = false"
        >Hide</md-button
      >
      <md-button class="md-raised" v-else @click="show = true">Show</md-button>
      <h5>Adding white card</h5>
    </md-toolbar>
    <div v-if="show">
      <md-field>
        <label>Text of the card goes here</label>
        <md-tooltip>Should be at least 2 character long</md-tooltip>
        <md-input v-model="card_data.text" required></md-input>
      </md-field>
      <h6>
        Note on deck name: deck name is not validated, but it is strongly
        recommended to select an already existing deck name, or just create a
        new one. Otherwise, your card wont show up in the game.
      </h6>
      <md-field>
        <md-autocomplete
          v-model="card_data.deck"
          :md-options="available_decks"
          md-layout="box"
          md-dense
          required
        >
          <label>Deck name goes here</label>
          <add-deck @deck_list_changed="refreshAvailableDecks"></add-deck>
        </md-autocomplete>
      </md-field>
      Here's the preview of your card:
      <white-card :card_data="card_data"></white-card>
      <md-button
        :disabled="!card_can_be_submitted"
        class="md-raised"
        @click="submit"
        >It's fine, submit it</md-button
      >
    </div>
  </div>
</template>

<script>
import WhiteCardDisplay from "@/components/GameComponents/WhiteCardDisplay";
import AddDeckView from "./AddDeck";
import { cardsApi } from "@/main";
import { WhiteCard } from "@/libs/src/index";
export default {
  data: () => ({
    card_data: {
      text: "",
      deck: "",
      icon: "default",
    },
    show: false,
    available_decks: [],
  }),
  components: {
    "white-card": WhiteCardDisplay,
    "add-deck": AddDeckView,
  },
  computed: {
    card_can_be_submitted() {
      return this.card_data.text.length > 2 && this.card_data.deck.length > 2;
    },
  },
  mounted() {
    this.refreshAvailableDecks();
  },
  methods: {
    refreshAvailableDecks() {
      cardsApi.getDeckListCardsDeckGet((error, data, response) => {
        if (error) {
          console.error(error);
          console.error(response);
        } else {
          this.available_decks = JSON.parse(response.text).map(
            (item) => item.id_name
          );
        }
      });
    },
    submit() {
      this.$emit("submitted_start");

      let whiteCard = new WhiteCard(); // WhiteCard |
      console.log("WhiteCard text:" + this.card_data.text);
      whiteCard.text = this.card_data.text;
      whiteCard.deck = this.card_data.deck;
      whiteCard.icon = this.card_data.icon;

      cardsApi.createWhiteCardCardsWhitePut(
        whiteCard,
        (error, data, response) => {
          if (error) {
            this.$emit("submission_failure", error);
            console.error(error);
          } else {
            this.card_data.text = "";
            this.$emit("submission_sucess", response);
            console.log(
              "API called successfully. Returned data: " + data + response
            );
          }
        }
      );
    },
  },
};
</script>

<style>
</style>