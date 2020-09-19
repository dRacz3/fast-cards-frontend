<template>
  <div class="page-container">
    <div v-if="current_player_data == null">
      loading..
    </div>

    <div v-if="profile_data">
      <ul class="flex-container">
        <div v-for="(entry, index) of profile_data" :key="index">
          <player-display :player_data="entry" :is_tzar="isTzar(entry)" />
        </div>
      </ul>
    </div>

    <black-card-display
      :card_data="active_round.active_black_card"
    ></black-card-display>

    <div>
      <ul v-if="submissions.length > 0" class="table-container">
        Selected cards:
        <div v-for="(entry, index) of submissions" :key="index">
          <white-card-display
            :card_data="entry"
            :on_clicked_callback="remove_card_from_submission"
          >
          </white-card-display>
        </div>
      </ul>
    </div>

    <div v-if="active_round.active_black_card.pick != submissions.length">
      You have to select more cards before you can submit it!
    </div>
    <md-button v-else class="md-raised" @click="submit_cards(submissions)"
      >Submit Selected</md-button
    >

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
</template>

<script>
import BlackCardDisplay from "../GameComponents/BlackCardDisplay";
import PlayerDisplay from "../GameComponents/PlayerDisplay";
import WhiteCardDisplay from "../GameComponents/WhiteCardDisplay";

export default {
  data: () => ({
    submissions: []
  }),
  props: {
    active_round: {
      type: Object,
      required: true
    },
    profile_data: {
      type: Array,
      required: true
    },
    update_player_data: {
      required: true,
      type: Function
    },
    submit_cards: {
      required: true,
      type: Function
    },
    current_player_data: {
      type: Object,
      required: true
    }
  },
  components: {
    "black-card-display": BlackCardDisplay,
    "player-display": PlayerDisplay,
    "white-card-display": WhiteCardDisplay
  },
  computed: {
    //!TODO: Actual metric about how many players need to submit something.
    submission_counter_text() {
      return "0/1";
    },

    //! Display only cards that are not submitted
    cards_to_display() {
      if (this.current_player_data) {
        return this.current_player_data.cards.filter(
          e => !this.submissions.includes(e)
        );
      }
      return [];
    }
  },
  mounted() {
    this.update_player_data();
  },
  methods: {
    //! Shortcut function to check if the given player is the Tzar
    isTzar(player) {
      if (player.user == this.active_round.tzar.user) {
        return true;
      }
      return false;
    },

    //! Execute this callback when a white card instance is clicked.
    //! Add to submissions if not submitted, remove from submission if submitted.
    on_white_card_clicked(card) {
      if (!this.submissions.includes(card)) {
        // Cant select more than that
        if (
          this.submissions.length + 1 >
          this.active_round.active_black_card.pick
        ) {
          this.$store.commit(
            "push_message_to_snackbar",
            "You cannot submit more cards than the allowed pick count"
          );
          return false;
        } else {
          this.submissions.push(card);
        }
      } else {
        // eslint-disable-next-line no-unused-vars
        this.remove_card_from_submission(card);
      }
      return true;
    },
    remove_card_from_submission(card /*isSelected*/) {
      // eslint-disable-next-line no-unused-vars
      this.submissions = this.submissions.filter(function(value, index, arr) {
        return value.text != card.text;
      });
    }
  }
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
