<template>
  <div>
    <div v-if="!isUserLoggedIn">
      <h1>Please register or log in in order to play the game</h1>
      <h5>You will be logged in automatically after registering</h5>
      <md-card class="login-card">
        <md-field>
          <label>UserName</label>
          <md-input v-model="username"></md-input>
        </md-field>

        <md-field>
          <label>Password</label>
          <md-input v-model="password"></md-input>
        </md-field>

        <md-card-actions>
          <md-button
            class="md-accent md-raised"
            @click="populateLoginWithRandomStuff()"
            >Create random login info</md-button
          >
          <md-button class="md-accent md-raised" @click="register()"
            >Register</md-button
          >
          <md-button class="md-accent md-raised" @click="login()"
            >Login</md-button
          >
        </md-card-actions>
      </md-card>
    </div>

    <div v-else>
      <h1>You are logged in. Do you want to log out?</h1>
      <md-button class="md-accent" @click="logout()">
        <md-icon>exit_to_app</md-icon>Log out</md-button
      >
    </div>
  </div>
</template>

<script>
import { UserSchema, UserLoginSchema } from "../libs/src/index";

import { userApi, apiclient } from "../main";
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
      let userRegistrationSchema = new UserSchema(
        this.username,
        this.username + "@emailisnotused.com",
        this.password
      );

      console.log(
        `Registering with: ${JSON.stringify(userRegistrationSchema)}`
      );

      this.$store.commit(
        "push_message_to_snackbar",
        `Registration, please wait. Might take some time. This is running on a dump raspberry`
      );
      userApi.createUserAuthSignupPost(
        userRegistrationSchema,
        (error, data, response) => {
          if (error) {
            console.error(error);
            this.$store.commit(
              "push_message_to_snackbar",
              `Registration failed with ${error} error is : ${response.text}`
            );
          } else {
            this.token = JSON.parse(response.text).access_token;
            this.storeSuccessfulLoginData(this.token, this.username);
            this.$router.push("/game-overview");
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
      let logindata = new UserLoginSchema(this.username, this.password);
      userApi.userLoginAuthLoginPost(logindata, (error, data, response) => {
        if (error) {
          console.error(error);
          this.$store.commit(
            "push_message_to_snackbar",
            "Login failed with " + error + " error is : " + response.text
          );
        } else {
          const parsedResponse = JSON.parse(response.text);
          this.token = parsedResponse.access_token;
          this.storeSuccessfulLoginData(this.token, this.username);
          this.$router.push("/game-overview");
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
      apiclient.authentications["JWTBearer"].accessToken = "";
    },

    storeSuccessfulLoginData(token, username) {
      this.$store.commit("update_api_token", {
        token: token,
        username: username,
      });

      this.$store.commit("update_login_validity", true);

      apiclient.authentications["JWTBearer"].accessToken = token;
      this.$store.commit(
        "push_message_to_snackbar",
        "Logged in as " + this.username
      );
    },

    populateLoginWithRandomStuff() {
      this.username = generateName().replace(" ", "_");
      this.password = this.username + "123";
    },
  },
  mounted() {
    this.token = this.$store.state.api_token;
    this.devmode = this.$store.state.developer_mode;
    const logged_in_username = this.$store.state.logged_in_username;

    this.username = logged_in_username || generateName().replace(" ", "_");
    this.password = this.username + "123";
  },

  computed: {
    isUserLoggedIn() {
      return (
        this.$store.state.api_token !== null &&
        this.$store.state.api_token !== "null"
      );
    },
  },
};
</script>

<style scoped lang="scss">
.login-card {
  padding: 50px 50px 50px 50px;
  flex: 1;
}
</style>
