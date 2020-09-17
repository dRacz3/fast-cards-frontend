<template>
  <div>
    Round data: {{ active_round }} <br />
    Profiles: {{ profile_data }} <br />
    <div v-if="profile_data">
      <ul>
        <div v-for="(entry, index) of profile_data" :key="index">
          <player-display :player_data="entry" :is_tzar="isTzar(entry)" />
        </div>
      </ul>
    </div>

    <div>
      <ul v-if="submissions.length > 0">
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

    <black-card-display
      :card_data="active_round.active_black_card"
    ></black-card-display>

    <div>
      <ul>
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
    update_cards_in_hand: {
      required: true,
      type: Function
    },
    submit_cards: {
      required: true,
      type: Function
    },
    cards_in_hand: {
      type: Array,
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
      return this.cards_in_hand.filter(e => !this.submissions.includes(e));
    }
  },
  mounted() {
    this.update_cards_in_hand();
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

<style></style>
