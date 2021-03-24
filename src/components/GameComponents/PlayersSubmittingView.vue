<template>
  <div>
    <h4>Game is in state:{{ this.room_data.state }}</h4>
    <div>
      <player-display :player_data="player"></player-display>
    </div>
    <!-- Other players -->
    <div>
      <ul class="flex-container table-container">
        <div
          v-for="(entry, index) of this.room_data.other_players"
          :key="index"
        >
          <player-display :player_data="entry"></player-display>
        </div>
      </ul>
    </div>
    <!-- Active black card -->
    <black-card-display :card_data="room_data.currently_active_card">
    </black-card-display>
    <!-- Cards to submit -->
    <div>
      <ul class="flex-container table-container">
        <div v-for="(entry, index) of cards_for_submission" :key="index">
          <white-card-display
            :card_data="entry"
            :on_clicked_callback="on_submitted_white_card_clicked"
          >
          </white-card-display>
        </div>
      </ul>
      <md-button @click="submitCards">Submit</md-button>
    </div>

    <br />

    <!-- Your cards -->
    <div v-if="!isCurrentPlayerTzar">
      <ul class="flex-container table-container">
        <div v-for="(entry, index) of cards_to_display" :key="index">
          <white-card-display
            :card_data="entry"
            :on_clicked_callback="on_white_card_clicked"
          >
          </white-card-display>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import PlayerDisplay from "./PlayerDisplay";
import WhiteCardDisplay from "./WhiteCardDisplay";
import BlackCardDisplay from "./BlackCardDisplay";

export default {
  props: {
    room_data: {
      type: Object,
      required: true,
    },
    submitClicked: {
      required: true,
    },
  },

  data: () => ({
    cards_for_submission: [],
  }),
  components: {
    "player-display": PlayerDisplay,
    "white-card-display": WhiteCardDisplay,
    "black-card-display": BlackCardDisplay,
  },
  mounted() {},
  methods: {
    on_white_card_clicked(card) {
      console.log(
        `Pick: ${this.room_data.currently_active_card.pick} >= ${this.cards_for_submission.length}`
      );
      if (
        this.room_data.currently_active_card.pick <=
        this.cards_for_submission.length
      ) {
        console.error("Trying to submit too many cards, remove a few.");
        return;
      }
      console.log(`clicked: ${JSON.stringify(card)}`);
      this.cards_for_submission.push(card);
    },

    on_submitted_white_card_clicked(card) {
      console.log(`Removing card: ${JSON.stringify(card)}`);
      this.cards_for_submission = this.cards_for_submission.filter(
        (v) => v !== card
      );
    },

    submitCards() {
      console.log("Submitting from view");
      this.submitClicked(this.cards_for_submission);
    },
  },

  computed: {
    player() {
      return this.room_data.player;
    },

    isCurrentPlayerTzar() {
      return this.player.current_role === "TZAR";
    },
    cards_to_display() {
      //   return this.player.cards_in_hand;
      if (this.player) {
        return this.player.cards_in_hand.filter(
          (e) => !this.cards_for_submission.includes(e)
        );
      }
      return [];
    },
  },
};
</script>
