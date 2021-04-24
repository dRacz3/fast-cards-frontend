<template>
  <div class="deck">
    <md-card>
      <div @click="onClicked">
        <md-ripple>
          <md-subheader v-bind:class="{ selected: deck_data.isSelected }">
            {{ deck_data.id_name }}
            <div v-if="deck_data.official">- [OFFICIAL]</div>
            <div v-else>- [Custom]</div>
          </md-subheader>
        </md-ripple>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    deck_data: {
      required: true,
      type: Object,
    },
  },
  methods: {
    onClicked() {
      if (this.deck_data.isSelected) {
        this.$emit("deckUnSelected", this.deck_data);
      } else {
        this.$emit("deckSelected", this.deck_data);
      }
    },
  },
};
</script>

<style>
.selected {
  background-color: lightgrey;
}
.deck {
  padding: 2px 2px 2px 2px;
}
</style>