<template>
  <div class="disable_selection" @click="toggleSelect">
    <md-card
      md-with-hover
      class="white-card"
      v-bind:class="{ selected: isSelected }"
    >
      <div class="md-title">{{ displayedText }}</div>

      <div class="md-subhead evenly-spaced">
        <span>{{ data.icon }} </span><span>{{ data.deck }}</span>
      </div>
    </md-card>
  </div></template
>

<script>
export default {
  data: () => ({
    isSelected: false
  }),
  components: {},
  methods: {
    toggleSelect() {
      this.isSelected = !this.isSelected;
    }
  },
  props: {
    data: {
      required: true
    }
  },
  computed: {
    displayedText() {
      return this.data.text.replace("_", "_____");
    }
  }
};
</script>

<style lang="scss" scoped>
.disable_selection {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
}

.white-card {
  background: white;
  color: black;
  height: 15em;
  width: 25em;
  margin: 40px 10px 10px 0px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  border-radius: 25px;
  border: 1px solid rgba(0, 0, 0, 0.308);
  overflow-wrap: break-word;
}

.evenly-spaced {
  display: flex;
  min-height: 4em;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
}

.pick-counter {
  border-radius: 50px;
  background: #626262ca;
  padding: 15px;
}

.selected {
  background: rgba(184, 184, 184, 0.219);
}
</style>
