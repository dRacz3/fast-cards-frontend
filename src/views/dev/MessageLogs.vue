<template>
  <div>
    <h1>Message log</h1>
    <ul class="flex-container">
      <div v-for="(entry, index) of messages" :key="index">
        <md-content> [{{ index }}] {{ entry }} </md-content>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    messages: []
  }),
  components: {},

  mounted() {
    this.messages = this.$store.state.message_log;
  }
};
</script>

<style></style>
