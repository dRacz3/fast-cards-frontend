<template>
  <div class="disable_selection">
    <md-card md-with-hover class="black-card">
      <div class="md-title">{{ displayedText }}</div>

      <div class="md-subhead evenly-spaced">
        <!--<span>{{ card_data.icon }} </span>-->
        <span>{{ card_data.deck }}</span>
        <div>
          PICK <span class="dot pick-counter"> {{ card_data.pick }}</span>
        </div>
      </div>
    </md-card>
  </div>
</template
>

<script>
export default {
  data: () => ({}),
  components: {},
  props: {
    card_data: {
      required: true,
    },
  },
  computed: {
    displayedText() {
      return this.card_data.text.replaceAll("_", "_____");
    },
  },
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
  // height: 15em;
  width: 25em;
  margin: 40px 10px 10px 0px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  border-radius: 25px;
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
  border-radius: 60px;
  background: #626262ca;
  padding: 10px;
}
</style>
