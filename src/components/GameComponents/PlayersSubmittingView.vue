<template>
  <div class="page-container">
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
    <div v-if="!isCurrentPlayerTzar && !has_player_submitted_this_round">
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
        <div
          v-if="
            cards_for_submission.length == room_data.currently_active_card.pick
          "
        >
          <md-button @click="submitCards">Submit</md-button>
        </div>
      </div>

      <br />

      <!-- Your cards -->
      <div>
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
    <div v-if="isCurrentPlayerTzar">
      You are the Tzar currently. You cannot submit cards this round, but
      prepare to judge other player's submissions! Enjoy this progressbar while
      you wait.
      <md-progress-bar
        class="md-accent"
        md-mode="indeterminate"
      ></md-progress-bar>
    </div>
    <div v-if="has_player_submitted_this_round">
      You have already submitted this round. Wait for others to finish.
      <md-progress-bar
        class="md-accent"
        md-mode="indeterminate"
      ></md-progress-bar>
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
      this.cards_for_submission = [];
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
      if (this.player) {
        const submission_text_map = this.cards_for_submission.map(
          (c) => c.text
        );
        console.log(`Submission map: ${submission_text_map}`);

        return this.player.cards_in_hand.filter(
          (e) => !submission_text_map.includes(e.text)
        );
      }
      return [];
    },
    has_player_submitted_this_round() {
      return Object.keys(this.room_data.player_submissions).includes(
        this.room_data.player.username
      );
    },
  },
};
</script>



<style scoped>
.flex-container {
  display: flex;
  align-content: center;
  flex-flow: row wrap;
  justify-content: space-around;
}

.page-container {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
}

.table-container {
  border: rgba(8, 15, 15, 0.232) 1px solid;
  border-radius: 50px;
  padding: 15px;
}
</style>
