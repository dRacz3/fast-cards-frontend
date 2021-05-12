<template>
  <div>
    <div v-if="isPlayerAllowedToVote">
      <h1>You have to vote for a winner!</h1>
    </div>
    <div v-else>
      <h1>A winner is being chosen... Please wait</h1>
    </div>
    <div v-if="has_voted">You have already submitted your vote!</div>

    <div>
      <div v-for="(entry, index) of room_data.player_submissions" :key="index">
        <submission-result-display
          :submission="entry"
          :isPlayerAllowedToVote="isPlayerAllowedToVote"
          @onWinnerSelected="onWinnerSelected"
          :votees="voteCounts(entry)"
        ></submission-result-display>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
// var hash = require("object-hash");
import SubmissionResultDisplay from "./SubmissionResultDisplay.vue";

export default {
  data: () => ({
    // TODO This is a workaround. Should be deducted from game state
    has_voted: false,
  }),
  components: {
    "submission-result-display": SubmissionResultDisplay,
  },
  methods: {
    onWinnerSelected(submission) {
      this.has_voted = true;
      this.$emit("onWinnerSelected", submission);
    },

    compare_submissions(lhs, rhs) {
      const lhs_ids = lhs.white_cards.map((c) => c.card_id);
      const rhs_ids = rhs.white_cards.map((c) => c.card_id);

      const array2Sorted = rhs_ids.slice().sort();
      return (
        lhs_ids.length === rhs_ids.length &&
        lhs_ids
          .slice()
          .sort()
          .every(function (value, index) {
            return value === array2Sorted[index];
          })
      );
    },

    voteCounts(submission) {
      console.log(submission);
      let players_who_voted = this.room_data.other_players
        .filter((p) => p.votes)
        .filter((p) => p.votes.length > 0)
        .filter((p) =>
          this.compare_submissions(p.votes[0].submission, submission)
        )
        .reduce((acc, currentValue) => {
          return [...acc, currentValue.username];
        }, []);
      console.log(players_who_voted);
      return players_who_voted;
    },
  },
  props: {
    room_data: {
      required: true,
    },
  },
  mounted() {
    console.log("Mounted");
  },

  beforeUpdate() {},
  computed: {
    isPlayerAllowedToVote() {
      if (this.room_data.mode == "GOD_IS_DEAD") {
        if (this.has_voted) {
          return false;
        }
        return true;
      }
      return this.room_data.player.current_role === "TZAR";
    },
  },
};
</script>

<style></style>
