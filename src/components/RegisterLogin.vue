<template>
  <div>
    <div v-if="devmode">Current login data: {{ token }}</div>
    <div class="hello" v-if="isUserLoggedIn">
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
import Register from "../libs/src/model/Register";

import { backendApi, apiclient } from "../main";
import generateName from "../helpers/generateFunnyName";

export default {
  name: "HelloWorld",
  data: () => ({
    username: null,
    password: null,
    token: null,
    devmode: false,
  }),
  props: {
    msg: String,
  },
  methods: {
    register() {
      apiclient.defaultHeaders = {};
      let userRegistrationData = new Register(
        this.username,
        this.password,
        this.password
      );

      console.log(`Registering with: ${JSON.stringify(userRegistrationData)}`);

      backendApi.restAuthRegistrationCreate(
        userRegistrationData,
        (error, data, response) => {
          if (error) {
            console.error(error);
            this.$store.commit(
              "push_message_to_snackbar",
              `Registration failed with ${error} error is : ${response.text}`
            );
          } else {
            this.token = JSON.parse(response.text).token;
            this.storeSuccessfulLoginData(this.token, this.username);
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
        password: this.password,
      };

      backendApi.restAuthLoginCreate(logindata, (error, data, response) => {
        if (error) {
          console.error(error);
          this.$store.commit(
            "push_message_to_snackbar",
            "Login failed with " + error + " error is : " + response.text
          );
        } else {
          const parsedResponse = JSON.parse(response.text);
          this.token = parsedResponse.token;

          this.storeSuccessfulLoginData(this.token, this.username);
        }
      });
    },
    logout() {
      this.username = null;
      this.password = null;
      this.token = null;

      this.$store.commit("update_api_token", {
        token: null,
        username: null,
      });
      this.$store.commit("push_message_to_snackbar", "Logged out");
      apiclient.defaultHeaders = {
        Authorization: ``,
      };
      // eslint-disable-next-line no-unused-vars
      backendApi.restAuthLogoutCreate((error, data, resposne) => {
        console.log("Logged out...");
      });
    },

    storeSuccessfulLoginData(token, username) {
      this.$store.commit("update_api_token", {
        token: token,
        username: username,
      });
      apiclient.defaultHeaders = {
        Authorization: `Token ${this.token}`,
      };
      this.$store.commit(
        "push_message_to_snackbar",
        "Logged in as " + this.username
      );
    },
  },
  mounted() {
    this.token = this.$store.state.token;
    this.devmode = this.$store.state.developer_mode;
    const logged_in_username = this.$store.state.logged_in_username;

    this.username = logged_in_username || generateName().replace(" ", "_");
    this.password = this.username + "123";
  },

  computed: {
    isUserLoggedIn() {
      return this.$store.state.token !== null;
    },
  },
};
</script>

<style scoped lang="scss"></style>
