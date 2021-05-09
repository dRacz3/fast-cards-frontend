<template>
  <div class="page-container">
    <h4>Game is in state:{{ room_data.state }}</h4>

    <div v-if="room_data.last_winners">
      <div v-if="room_data.last_winners.length > 1">
        <h3>It was a draw! The winners are:</h3>
      </div>
      <div v-else><h3>The winner is:</h3></div>
      <div v-for="(entry, index) of room_data.last_winners" :key="index">
        <h4>{{ entry.username }}, who has submitted:</h4>
        <submission-result-display
          :submission="entry.submission"
          :isPlayerAllowedToVote="false"
        ></submission-result-display>
      </div>
    </div>
    <div>
      <ul class="flex-container table-container">
        <div
          v-for="(entry, index) of this.room_data.other_players"
          :key="index"
        >
          <player-display
            :player_data="entry"
            :has_submitted_this_round="
              calculateHasPlayerSubmittedThisRound(entry.username)
            "
          ></player-display>
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
      </div>
      <div
        class="flex-container"
        v-if="
          cards_for_submission.length == room_data.currently_active_card.pick
        "
      >
        <md-button @click="submitCards" class="md-raised">Submit</md-button>
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
import PlayerDisplay from "@/components/GameComponents/PlayerDisplay";
import WhiteCardDisplay from "@/components/GameComponents/WhiteCardDisplay";
import BlackCardDisplay from "@/components/GameComponents/BlackCardDisplay";
import SubmissionResultDisplay from "@/components/GameComponents/SubmissionResultDisplay.vue";

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
    "submission-result-display": SubmissionResultDisplay,
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

    calculateHasPlayerSubmittedThisRound(username) {
      return Object.keys(this.room_data.player_submissions).includes(username);
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
      return this.calculateHasPlayerSubmittedThisRound(
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
  justify-content: center;
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
