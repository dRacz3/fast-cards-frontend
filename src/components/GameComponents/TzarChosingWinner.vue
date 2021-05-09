<template>
  <div>
    <div v-if="isPlayerAllowedToVote">
      <h1>You have to choose a winner!</h1>
    </div>
    <div v-else>
      <h1>Tzar is choosing winner...</h1>
    </div>

    <div>
      <div v-for="(entry, index) of room_data.player_submissions" :key="index">
        <submission-result-display
          :submission="entry"
          :isPlayerAllowedToVote="isPlayerAllowedToVote"
          @onWinnerSelected="onWinnerSelected"
        ></submission-result-display>
      </div>
    </div>

    <div>
      <!-- {{ JSON.stringify(room_data.player_submissions, null, 4) }} -->
    </div>
  </div>
</template>

<script>
import SubmissionResultDisplay from "./SubmissionResultDisplay.vue";

export default {
  data: () => ({}),
  components: {
    "submission-result-display": SubmissionResultDisplay,
  },
  methods: {
    onWinnerSelected(submission) {
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
        return true;
      }
      return this.room_data.player.current_role === "TZAR";
    },
  },
};
</script>

<style></style>
