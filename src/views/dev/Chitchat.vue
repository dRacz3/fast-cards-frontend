<template>
  <div>
    <h1>Message log</h1>
    <ul class="flex-container">
      <div v-for="(entry, index) of messages.reverse()" :key="index">
        <md-content> [{{ index }}] {{ entry }} </md-content>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: [],
  }),
  components: {},

  mounted() {
    const st = this.$store.state;
    this.messages = st.message_log;
  },
  updated() {
    const st = this.$store.state;
    this.messages = st.message_log;
  },
};
</script>

<style></style>
