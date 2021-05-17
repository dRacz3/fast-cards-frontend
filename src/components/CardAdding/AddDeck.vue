<template>
  <div>
    <md-button @click="dialog_active = true" class="md-raised"
      >New deck</md-button
    >
    <md-dialog :md-active.sync="dialog_active">
      <md-dialog-title>You are about to add a new deck</md-dialog-title>

      <md-dialog-content>
        <h4>You will have to provide a name and description:</h4>
        <md-field>
          <label>Deck name</label>
          <md-input v-model="deck_data.id_name" required></md-input>
        </md-field>

        <label
          >Description, some small note on what kind of cards are there in the
          deck</label
        >
        <md-field>
          <md-textarea v-model="deck_data.description" required></md-textarea>
          <md-icon>description</md-icon>
        </md-field>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click="close()">Close</md-button>
        <md-button class="md-primary" @click="save()">Save</md-button>
      </md-dialog-actions>

      <!-- Feedback part -->
      <div v-if="status.show">
        {{ status.message }}
        <md-progress-bar
          md-mode="indeterminate"
          v-if="status.is_pending"
        ></md-progress-bar>
      </div>
    </md-dialog>
  </div>
</template>

<script>
import { cardsApi } from "@/main";
import { DeckMetaData } from "@/libs/src/index";
export default {
  data: () => ({
    deck_data: {
      id_name: "",
      description: "",
    },
    status: {
      show: false,
      message: null,
      action: null,
      is_pending: false,
    },
    dialog_active: false,
  }),
  props: {},
  components: {},
  computed: {},
  methods: {
    close() {
      this.status.show = false;
      this.status.is_pending = false;
      this.dialog_active = false;
    },
    save() {
      this.status.show = true;
      this.status.message = "Saving started...";
      this.status.is_pending = true;
      let deckMetaData = new DeckMetaData();

      deckMetaData.id_name = this.deck_data.id_name;
      deckMetaData.description = this.deck_data.description;
      deckMetaData.official = false;
      deckMetaData.name = this.deck_data.id_name;
      deckMetaData.icon = this.deck_data.id_name;

      cardsApi.createDeckCardsDeckPut(deckMetaData, (error, data, response) => {
        this.status.is_pending = false;
        if (error) {
          if (response.text) {
            let resp = JSON.parse(response.text);
            if (resp.detail) {
              this.status.message = "Failed to create deck, " + resp.detail;
            } else {
              this.status.message = "Failed to create deck, " + error;
            }
          }
        } else {
          this.status.message = "Deck created!";
        }
      });
      this.$emit("deck_list_changed");
    },
  },
};
</script>

<style>
</style>