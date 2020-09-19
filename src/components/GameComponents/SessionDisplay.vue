<template>
  <div>
    <md-card md-with-hover class="disable_selection">
      <md-ripple>
        <md-card-header>
          <div class="md-title">{{ data.session_id }}</div>
          <div class="md-subhead">{{ data.created_at }}</div>
        </md-card-header>

        <md-card-content v-if="data.has_started">
          Game has started, last update: {{ data.updated_at }}
        </md-card-content>

        <md-card-actions>
          <md-button @click="join_session(data.session_id)">Join</md-button>
          <md-button class="md-accent" @click="delete_Session(data.session_id)"
            ><md-icon>delete</md-icon>Delete</md-button
          >
        </md-card-actions>
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

<style>
.disable_selection {
  -webkit-user-select: none;
  /* Safari */
  -moz-user-select: none;
  /* Firefox */
  -ms-user-select: none;
  /* IE10+/Edge */
  user-select: none;
}
</style>
