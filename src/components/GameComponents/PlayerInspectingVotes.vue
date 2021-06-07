<template>
  <div>
    <div>Let's see the votes</div>

    <div>
      <div v-for="(entry, index) of room_data.player_submissions" :key="index">
        <submission-result-display
          :submission="entry"
          :isPlayerAllowedToVote="false"
          :votees="voteCounts(entry)"
        ></submission-result-display>
      </div>
    </div>
    <md-button @click="advanceToNextRound()"
      >Let's start the next round!</md-button
    >
    <div></div>
  </div>
</template>

<script>
// var hash = require("object-hash");
import SubmissionResultDisplay from "./SubmissionResultDisplay.vue";

export default {
  data: () => ({}),
  components: {
    "submission-result-display": SubmissionResultDisplay,
  },
  methods: {
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

    advanceToNextRound() {
      this.$emit("advanceClicked");
    },

    voteCounts(submission) {
      let players_who_voted = this.room_data.other_players
        .filter((p) => p.votes)
        .filter((p) => p.votes.length > 0)
        .filter((p) =>
          this.compare_submissions(p.votes[0].submission, submission)
        )
        .reduce((acc, currentValue) => {
          return [...acc, currentValue.username];
        }, []);

      return players_who_voted;
    },
  },
  props: {
    room_data: {
      required: true,
    },
  },
  mounted() {},

  beforeUpdate() {},
};
</script>

<style></style>
