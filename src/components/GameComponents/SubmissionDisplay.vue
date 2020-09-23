<template>
  <div class="submitted-display">
    <md-content class="submission_content">
      {{ submitted_content }}

      <p>
        Submitted by
        {{ submission_info.connected_game_round_profile.user_profile.user }}
      </p>

      <slot></slot>
    </md-content>
  </div>
</template>

<script>
export default {
  props: {
    submission_info: {
      submitted_white_cards: {
        required: true,
        type: Array
      },
      submission_id: {
        required: true,
        type: Number
      }
    },
    black_card_data: {
      required: true
    }
  },
  methods: {
    replace_character_at_index(str, index, replacement) {
      return (
        str.substring(0, index) +
        replacement +
        str.substring(index + 1, str.length)
      );
    }
  },
  computed: {
    submitted_content() {
      let str = this.black_card_data.text;
      if (str.indexOf("_") == -1) {
        return (
          str + " [" + this.submission_info.submitted_white_cards[0].text + "]"
        );
      }

      let replacements = this.submission_info.submitted_white_cards.map(
        e => e.text
      );

      let count = 0;
      while (str.indexOf("_") != -1) {
        let i = str.indexOf("_");
        str = this.replace_character_at_index(
          str,
          i,
          "[" + replacements[count] + "]"
        );
        count = count + 1;
      }
      return str;
    }
  }
};
</script>

<style scoped>
.submitted-display {
  border: 1px black solid;
  margin: 20px;
  align-items: center;
}

.submission_content {
  padding: 20px;
}
</style>
