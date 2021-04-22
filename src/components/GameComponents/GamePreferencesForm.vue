<template>
  <div class="game_preference_form">
    <div>
      <div @click="displayDecks = !displayDecks">
        <md-toolbar>
          <h4 class="md-title" style="flex: 1">Available decks</h4>
          <h5>
            selected [{{ selected_decks.length }}/{{ available_decks.length }}]
          </h5>
          <md-button>
            <md-icon v-if="displayDecks">keyboard_arrow_up</md-icon>
            <md-icon v-else>keyboard_arrow_down</md-icon>
          </md-button>
        </md-toolbar>
      </div>

      <div v-if="displayDecks">
        <div v-for="(entry, index) of available_decks" :key="index">
          <deck-display
            :deck_data="entry"
            :isSelected="false"
            @deckUnSelected="deckUnSelect"
            @deckSelected="deckSelect"
          ></deck-display>
        </div>
      </div>
      <md-field>
        <label>You can create a new room, just pick a unique name.</label>
        <md-input v-model="room_name"></md-input>
        <md-button
          class="md-raised md-accent"
          @click="newRoom"
          :disabled="selected_decks.length == 0"
          >Create</md-button
        >
      </md-field>
    </div>
  </div>
</template>

<script>
import DeckDisplay from "./DeckDisplay";
import { cardsAgainstApi, pushMessageToSnackbar, cardsApi } from "../../main";
import { GamePreferences } from "../../libs/src";
export default {
  data: () => ({
    selected_decks: [],
    displayDecks: true,
    room_name: null,
    available_decks: [],
  }),
  props: {},
  components: {
    "deck-display": DeckDisplay,
  },
  created() {
    this.refreshAvailableDecks();
  },
  methods: {
    deckSelect(deck) {
      deck.isSelected = true;
      this.selected_decks.push(deck);
    },

    deckUnSelect(deck) {
      deck.isSelected = false;
      this.selected_decks = this.selected_decks.filter((v) => v !== deck);
    },
    newRoom() {
      let gamePreferences = new GamePreferences({
        deck_preferences: this.selected_decks,
      });
      cardsAgainstApi.createNewGameGameNewPost(
        this.room_name,
        gamePreferences,
        (error, data, response) => {
          if (error) {
            console.error(error);
            console.error(response);
            pushMessageToSnackbar(
              `Failed to create room.${JSON.parse(response.text).detail}`
            );
          } else {
            this.room_data = JSON.parse(response.text);
            console.log("Room created");
            pushMessageToSnackbar("Room was created.");
            this.$emit("newRoomCreated", this.room_name);
          }
        }
      );
    },
    refreshAvailableDecks() {
      cardsApi.getDeckListCardsDeckGet((error, data, response) => {
        if (error) {
          console.error(error);
          console.error(response);
        } else {
          this.available_decks = JSON.parse(response.text).map((item) => ({
            ...item,
            isSelected: false,
          }));
          this.deckSelect(this.available_decks[0]);
        }
      });
    },
  },
};
</script>

<style>
.game_preference_form {
  border: rgb(37, 35, 35);
  padding: 30px;
}
</style>