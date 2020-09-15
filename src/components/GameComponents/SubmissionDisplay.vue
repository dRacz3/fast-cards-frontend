<template>
  <div>
    <md-card class="submitted-display">
      <md-card-content>
        {{ submitted_content }}
        <md-divider></md-divider>
        <md-card-actions>
          <md-button class="md-primary">Like</md-button>
          <md-button class="md-accent">Dislike</md-button>
        </md-card-actions>
      </md-card-content>
    </md-card>
    <!-- <ul>
      <div
        v-for="(entry, index) of submission_info.submitted_white_cards"
        :key="index"
      >
        <white-card-display :card_data="entry"> </white-card-display>
      </div> 
    </ul>-->
  </div>
</template>

<script>
// import WhiteCardDisplay from "@/components/GameComponents/WhiteCardDisplay";

export default {
  // components: { "white-card-display": WhiteCardDisplay },
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
      let replacements = this.submission_info.submitted_white_cards.map(
        e => e.text
      );

      let count = 0;
      while (str.indexOf("_") > 0) {
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
  padding: 5px 5px 5px 5px;
  margin: 3px;
  display: inline-block;
  vertical-align: top;
}
</style>
