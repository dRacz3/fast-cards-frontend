<template>
  <div>
    <md-empty-state
      v-if="sessions == null"
      md-rounded
      md-icon="warning"
      md-label="Failed to load rooms"
      md-description="Are you logged in? Is the server running and available?"
    >
    </md-empty-state>

    <div v-else>
      <div v-if="selected_session == null">
        <md-field>
          <label>New Room Name</label>
          <md-input v-model="new_room_name"></md-input>
          <md-button @click="createAndJoinSession">
            <md-icon>create</md-icon>Create & Join new Room</md-button
          >
          <md-button @click="getSessions">
            <md-icon>refresh</md-icon> Refresh</md-button
          >
        </md-field>
        <div v-for="(entry, index) of sessions" :key="index">
          <session-display
            :data="entry"
            :join_session="joinSession"
            :delete_Session="deleteSession"
          >
          </session-display>
        </div>
      </div>
      <div v-else>
        <play-room :session_name="selected_session">
          <md-button
            @click="selected_session = null"
            class="md-raised md-primary"
          >
            <md-icon>exit_to_app</md-icon> Exit</md-button
          >
        </play-room>
      </div>
    </div>
  </div>
</template>

<script>
import { gameApi } from "../main";
import SessionDisplay from "@/components/GameComponents/SessionDisplay.vue";
import PlayRoom from "@/components/GameComponents/PlayRoom.vue";

export default {
  name: "Home",
  data: () => ({
    sessions: null,
    selected_session: null,
    new_room_name: null
  }),
  components: {
    "session-display": SessionDisplay,
    "play-room": PlayRoom
  },
  methods: {
    getSessions() {
      let opts = {
        search: "", // String | A search term.
        page: 1 // Number | A page number within the paginated result set.
      };

      gameApi.gameEngineApiSessionsList(opts, (error, data, response) => {
        if (error) {
          console.error(error);
        } else {
          let cards = JSON.parse(response.text).results;
          this.sessions = cards;
        }
      });
    },
    joinSession(session_name) {
      this.selected_session = session_name;
    },
    createAndJoinSession() {
      this.joinSession(this.new_room_name);
    },
    deleteSession(session_name) {
      gameApi.gameEngineApiSessionsDelete(
        session_name,
        (error, data, response) => {
          if (error) {
            this.$store.commit(
              "push_message_to_snackbar",
              "Failed to delete session : " +
                session_name +
                ", " +
                response.text
            );
          } else {
            this.$store.commit(
              "push_message_to_snackbar",
              "Session : " + session_name + " deleted, " + response.text
            );
            this.getSessions();
          }
        }
      );
    }
  },
  mounted() {
    this.getSessions();
  }
};
</script>
