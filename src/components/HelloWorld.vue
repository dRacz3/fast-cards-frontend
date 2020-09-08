/* eslint-disable no-unused-vars */
<template>
  <div class="hello">
    Hello there {{ username }} -> {{ token }}
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
</template>

<script>
import ApiClient from "../libs/src/ApiClient";
import ApiApi from "../libs/src/api/ApiApi";

import Register from "../libs/src/model/Register";

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
      let userRegistrationData = new Register(
        this.username,
        this.email,
        this.password,
        this.password
      );
      let apiclient = new ApiClient();
      let api = new ApiApi(apiclient);
      api.apiRestAuthRegistrationCreate(
        userRegistrationData,
        (error, data, response) => {
          if (error) {
            console.error(error);
          } else {
            console.log("API called successfully. Returned data: ");
            this.token = JSON.parse(response.text).key;
            this.$store.commit("update_api_token", this.token);
          }
        }
      );
    },
    login() {}
  },
  mounted() {
    this.token = this.$store.state.api_token;
  }
};
</script>

<style scoped lang="scss"></style>
