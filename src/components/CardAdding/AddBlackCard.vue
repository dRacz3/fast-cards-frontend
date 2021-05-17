<template>
  <div>
    <md-toolbar :md-elevation="1">
      <md-button class="md-raised" v-if="show" @click="show = false"
        >Hide</md-button
      >
      <md-button class="md-raised" v-else @click="show = true">Show</md-button>
      <h5>Adding black card</h5>
    </md-toolbar>
    <div v-if="show">
      <md-field>
        <label>Text of the card goes here</label>
        <md-tooltip>Should be at least 2 character long</md-tooltip>
        <md-input v-model="card_data.text" required></md-input>
      </md-field>
      <h6></h6>
      <md-field>
        <label>Pick count</label>
        <md-input v-model="card_data.pick" type="number" readonly></md-input>
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
        >
          <label>Deck name goes here</label>
          <add-deck @deck_list_changed="refreshAvailableDecks"></add-deck>
        </md-autocomplete>
      </md-field>
      Here's the preview of your card:
      <black-card
        :card_data="{ ...card_data, pick: calculatePickCount }"
      ></black-card>
      <md-button
        :disabled="!card_can_be_submitted"
        class="md-raised"
        @click="submit"
        >It's fine, submit it</md-button
      >
    </div>
    <div v-if="feedback.active">
      <div v-if="feedback.is_pending">
        <md-progress-bar md-mode="indeterminate"></md-progress-bar>
      </div>
    </div>
  </div>
</template>

<script>
import BlackCardDisplay from "@/components/GameComponents/BlackCardDisplay";
import AddDeckView from "./AddDeck";
import { cardsApi } from "@/main";
import { BlackCard } from "@/libs/src/index";
export default {
  data: () => ({
    card_data: {
      text: "",
      deck: "",
      pick: 1,
      icon: "default",
    },
    show: true,
    available_decks: [],
    feedback: {
      active: false,
      message: "",
      is_pending: false,
    },
  }),
  components: {
    "black-card": BlackCardDisplay,
    "add-deck": AddDeckView,
  },
  computed: {
    card_can_be_submitted() {
      return this.card_data.text.length > 2 && this.card_data.deck.length > 2;
    },
    calculatePickCount() {
      const pick_by_us = this.card_data.text.split("_").length - 1;
      return pick_by_us || 1;
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
      this.feedback.active = true;
      this.feedback.is_pending = true;
      this.$emit("submitted_start");

      let blackCard = new BlackCard();
      blackCard.text = this.card_data.text;
      blackCard.pick = this.calculatePickCount();
      blackCard.deck = this.card_data.deck;
      blackCard.icon = this.card_data.icon;

      cardsApi.createBlackCardCardsBlackPut(
        blackCard,
        (error, data, response) => {
          this.feedback.is_pending = false;
          if (error) {
            this.feedback.message = error;
          } else {
            this.card_data.text = "";
            this.feedback.message = " Added : " + response;
          }
        }
      );
    },
  },
};
</script>

<style>
</style>