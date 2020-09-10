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
import Register from "@/libs/src/model/Register";

import { backendApi, apiclient } from "../main";

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
          } else {
            console.log("API called successfully. Returned data: ");
            this.token = JSON.parse(response.text).key;
            this.$store.commit("update_api_token", this.token);
            apiclient.defaultHeaders = {
              Authorization: `Token ${this.token}`
            };
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
        } else {
          console.log("API called successfully. Returned data: ");
          this.token = JSON.parse(response.text).key;
          // let asd = response;
          // console.log(asd);
          // console.log(asd.xhr);
          // document.cookie = "username=John Doe";
          this.$store.commit("update_api_token", this.token);
          apiclient.defaultHeaders = {
            Authorization: `Token ${this.token}`
          };
          console.log(this.getCookie("csrftoken"));
        }
      });
    }
  },
  mounted() {
    this.token = this.$store.state.api_token;
  }
};
</script>

<style scoped lang="scss"></style>
