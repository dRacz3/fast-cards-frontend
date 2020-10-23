<template>
  <div>
    <md-field>
      <label>Room name</label>
      <md-input v-model="room_name"></md-input>
      <md-button @click="update()">Check</md-button>
    </md-field>
    <div v-if="error">Failed to retrieve data.. {{ error }}</div>
    <div v-if="this.data">
      The Winner is : {{ this.data.winner.name }} with
      {{ this.data.winner.points }} points
      <ul>
        <div v-for="(entry, index) of data.rounds" :key="index">
          TZAR-> [[[ {{ entry.TZAR }} ]]]
          {{ entry.BlackCard }}
          <br />

          <div v-for="(submission, index2) of entry.Submissions" :key="index2">
            <!-- {{ submission }} -->
            -> {{ submission.name }} [{{ submission.points }}] Has submitted the
            following cards:
            <div
              v-for="(card, index3) of submission.submitted_cards"
              :key="index3"
            >
              - - - - > {{ card }}
            </div>
          </div>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { gameApi } from "../main";

export default {
  data: () => ({
    data: null,
    room_name: null,
    error: null
  }),
  components: {},
  methods: {
    update() {
      gameApi.gameEngineApiSessionOverviewRead(this.room_name, (e, r, d) => {
        if (e) {
          this.error = e;
        } else {
          this.data = JSON.parse(JSON.parse(d.text));
          console.log(this.data);
        }
      });
    }
  }
};
</script>
