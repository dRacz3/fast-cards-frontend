<template>
  <div>
    <md-card md-with-hover class="disable_selection">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ renderedResult }}</div>
          <!-- <div class="md-subhead">It also have a ripple</div> -->
        </md-card-header>
        <md-card-actions v-if="isTzar">
          <!-- <md-button>Action</md-button> -->
          <md-button class="md-raised" @click="onWinnerSelected">
            <md-icon>thumb_up</md-icon> I like this
          </md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script>
export default {
  name: "submission-result-display",
  data: () => ({}),

  props: {
    submission: { required: true },
    // black_card: { required: true },
    // white_card_list: {
    //   type: Array,
    //   required: true,
    // },
    isTzar: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    onWinnerSelected() {
      this.$emit("onWinnerSelected", this.submission);
    },
    replace_character_at_index(str, index, replacement) {
      return (
        str.substring(0, index) +
        replacement +
        str.substring(index + 1, str.length)
      );
    },
  },
  computed: {
    renderedResult() {
      console.log(this.submission);
      const black_card = this.submission.black_card;
      const white_cards = this.submission.white_cards;

      let str = black_card.text;
      if (str.indexOf("_") == -1) {
        return str + " [" + white_cards[0].text + "]";
      }

      let replacements = white_cards.map((e) => e.text);

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
    },
  },
};
</script>
 
<style scoped>
.md-card {
  margin: 10px;
}
</style>
