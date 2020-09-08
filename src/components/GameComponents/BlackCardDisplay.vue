<template>
  <div class="disable_selection">
    <md-card md-with-hover class="black-card">
      <md-ripple>
        <div class="md-title">{{ displayedText }}</div>
        <br />
        <div class="md-subhead evenly-spaced">
          <span>{{ data.icon }} </span><span>{{ data.deck }}</span>

          <div>
            PICK <span class="dot pick-counter"> {{ data.pick }}</span>
          </div>
        </div>
      </md-ripple>
    </md-card>
  </div></template
>

<script>
export default {
  data: () => ({}),
  components: {},
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

.black-card {
  background: black;
  color: white;
  min-height: 15em;
  max-width: 25em;
  margin: 15px;
  padding: 30px;
  // display: inline-flex;
  display: flex;

  align-items: center;
  border-radius: 25px;
}

.evenly-spaced {
  display: flex;
  min-height: 4em;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
}

.pick-counter {
  border-radius: 50px;
  background: #2f2f2f;
  padding: 15px;
}
</style>
