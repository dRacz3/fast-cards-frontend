<template>
  <div class="disable_selection white-card-container" @click="toggleSelect">
    <md-card md-with-hover class="white-card">
      <div class="md-title">{{ displayedText }}</div>

      <div class="md-subhead evenly-spaced">
        <span>{{ card_data.icon }} </span><span>{{ card_data.deck }}</span>
      </div>
    </md-card>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  components: {},
  methods: {
    toggleSelect() {
      if (this.on_clicked_callback) {
        this.on_clicked_callback(this.card_data, true);
      }
    }
  },
  props: {
    card_data: {
      required: true
    },
    on_clicked_callback: {
      default: null
    }
  },
  computed: {
    displayedText() {
      return this.card_data.text.replace("_", "_____");
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
  min-width: 25em;
  max-width: 35em;
  margin: 10px 5px 5px 0px;
  padding: 15px;
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

.white-card-container {
  height: 100%;
  display: flex;
}
</style>
