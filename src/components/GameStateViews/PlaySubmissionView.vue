<template>
  <div>
    You are currently looking at the submission view. The TZAR ({{
      session_data.last_round.tzar.user
    }}) is currently selecting the winner card.
    <div v-if="!has_everyone_submitted">
      Waiting for every player to submit
    </div>
    <!-- Cards submitted so far in the round -->
    <ul v-if="submissions.length > 0">
      <md-list v-for="(entry, index) of submissions" :key="index">
        <md-list-item>
          <submission-display
            class="md-list-item-text"
            :submission_info="entry"
            :black_card_data="session_data.last_round.active_black_card"
          >
            <div v-if="true && has_everyone_submitted">
              <md-button>This is the best!</md-button>
            </div>
          </submission-display>
        </md-list-item>
      </md-list>
    </ul>
  </div>
</template>

<script>
import SubmissionDisplay from "../GameComponents/SubmissionDisplay";

export default {
  components: {
    "submission-display": SubmissionDisplay
  },
  props: {
    submissions: {
      required: true
    },
    session_data: {
      required: true
    },
    profile_data: {
      required: true
    }
  },
  computed: {
    has_everyone_submitted() {
      return this.submissions.length >= this.profile_data.length;
    }
  }
};
</script>

<style></style>
