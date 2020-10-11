<template>
  <div>
    You are currently looking at the submission view. The TZAR ({{
      session_data.last_round.tzar.user
    }}) is currently selecting the winner card.
    <div v-if="!has_everyone_submitted">
      Waiting for every player to submit
    </div>
    <!-- Cards submitted so far in the round -->
    <div v-if="submissions.length > 0">
      <ul v-for="(entry, index) of submissions" :key="index">
        <div>
          <submission-display
            :submission_info="entry"
            :black_card_data="session_data.last_round.active_black_card"
          >
            <div v-if="current_player_data.isTzar && has_everyone_submitted">
              <md-button @click="select_winner(entry.submission_id)"
                >This is the best!</md-button
              >
            </div>
          </submission-display>
        </div>
      </ul>
    </div>
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
    profile_data_all_players: {
      required: true
    },
    current_player_data: {
      required: true
    },
    select_winner: {
      required: true,
      type: Function
    }
  },
  computed: {
    has_everyone_submitted() {
      return this.submissions.length >= this.profile_data_all_players.length;
    }
  }
};
</script>

<style></style>
