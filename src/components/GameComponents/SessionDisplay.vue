<template>
  <div class="room-card">
    <div class="disable_selection ">
      <md-header>
        <div class="md-title">{{ data.session_id }}</div>
        <div class="md-subhead">{{ data.created_at }}</div>
      </md-header>

      <md-content v-if="data.has_started">
        Game has started, last update: {{ data.updated_at }}
      </md-content>
      <md-button @click="join_session(data.session_id)">Join</md-button>
      <md-button class="md-accent" @click="delete_Session(data.session_id)"
        ><md-icon>delete</md-icon>Delete</md-button
      >
    </div>
  </div></template
>

<script>
export default {
  data: () => ({}),
  components: {},
  props: {
    data: {
      required: true
    },
    join_session: {
      type: Function,
      required: true
    },
    delete_Session: {
      type: Function,
      required: true
    }
  }
};
</script>

<style scoped>
.disable_selection {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
}

.room-card {
  border: 2px solid black;
  padding: 15px;
  margin: 20px;
}
</style>
