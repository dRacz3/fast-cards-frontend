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
        ></submission-result-display>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
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
  },
  props: {
    room_data: {
      required: true,
    },
  },
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
