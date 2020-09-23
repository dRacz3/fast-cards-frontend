<template>
  <div>
    <div class="hello" v-if="token == null">
      <h1>
        Please register or log in in order to play the game. No hard checks for
        e-mail. You will be logged in automatically after registering
      </h1>

      <md-field>
        <label>UserName</label>
        <md-input v-model="username"></md-input>
      </md-field>

      <md-field>
        <label>Password</label>
        <md-input v-model="password"></md-input>
      </md-field>

      <md-field>
        <label>Email</label>
        <md-input v-model="email"></md-input>
      </md-field>
      <md-button class="md-accent" @click="register()">Register</md-button>
      <md-button class="md-accent" @click="login()">Login</md-button>
    </div>

    <div v-else>
      You are logged in. Do you want to log out?
      <md-button class="md-accent" @click="logout()">
        <md-icon>exit_to_app</md-icon>Log out</md-button
      >
    </div>
  </div>
</template>

<script>
import Register from "@/libs/src/model/Register";

import { backendApi, apiclient } from "../main";
import generateName from "../helpers/generateFunnyName";

export default {
  name: "HelloWorld",
  data: () => ({
    username: null,
    password: null,
    email: null,
    token: null
  }),
  props: {
    msg: String
  },
  methods: {
    register() {
      apiclient.defaultHeaders = {};
      let userRegistrationData = new Register(
        this.username,
        this.email,
        this.password,
        this.password
      );
      backendApi.apiRestAuthRegistrationCreate(
        userRegistrationData,
        (error, data, response) => {
          if (error) {
            console.error(error);
            this.$store.commit(
              "push_message_to_snackbar",
              "Registration failed with " +
                error +
                " error is : " +
                response.text
            );
          } else {
            console.log("API called successfully. Returned data: ");
            this.token = JSON.parse(response.text).key;
            this.$store.commit("update_api_token", this.token);
            apiclient.defaultHeaders = {
              Authorization: `Token ${this.token}`
            };
            this.$store.commit(
              "push_message_to_snackbar",
              "Registration success, you are now logged in as " + this.username
            );
          }
        }
      );
    },
    getCookie(name) {
      let cookieValue = null;
      if (document.cookie && document.cookie !== "") {
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          // Does this cookie string begin with the name we want?
          if (cookie.substring(0, name.length + 1) === name + "=") {
            cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
            break;
          }
        }
      }
      return cookieValue;
    },
    login() {
      let logindata = {
        username: this.username,
        email: "user@example.com",
        password: this.password
      };

      backendApi.apiRestAuthLoginCreate(logindata, (error, data, response) => {
        if (error) {
          console.error(error);
          this.$store.commit(
            "push_message_to_snackbar",
            "Login failed with " + error + " error is : " + response.text
          );
        } else {
          console.log("API called successfully. Returned data: ");
          this.token = JSON.parse(response.text).key;

          this.$store.commit("update_api_token", this.token);
          apiclient.defaultHeaders = {
            Authorization: `Token ${this.token}`
          };
          this.$store.commit(
            "push_message_to_snackbar",
            "Loged in as " + this.username
          );
        }
      });
    },
    logout() {
      this.username = null;
      this.password = null;
      this.token = null;
      this.$store.commit("update_api_token", null);
      this.$store.commit("push_message_to_snackbar", "Logged out");
      apiclient.defaultHeaders = {
        Authorization: ``
      };
      // eslint-disable-next-line no-unused-vars
      backendApi.apiRestAuthLogoutCreate((error, data, resposne) => {
        console.log("Logged out...");
      });
    }
  },
  mounted() {
    this.token = this.$store.state.api_token;
    this.username = generateName().replace(" ", "_");
  }
};
</script>

<style scoped lang="scss"></style>
