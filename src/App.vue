<template>
  <div class="page-container">
    <div v-if="updateExists">
      A new version is available, please update or suffer the consequences.
      (Like bugs, and stuff not working properly or at all.)
      <md-button @click="refreshApp">Update</md-button>
    </div>
    <md-app>
      <md-app-toolbar class="md-primary" md-elevation="0">
        <md-button
          class="md-icon-button"
          @click="toggleMenu"
          v-if="!menuVisible"
        >
          <md-icon>menu</md-icon>
        </md-button>
        <span class="md-title">Cards Against Humanity </span>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span>Navigation</span>

          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <md-icon>account_circle</md-icon>
            <span class="md-list-item-text"> Account </span>
          </md-list-item>
          <md-list-item to="/game-overview" v-if="isUserLoggedIn">
            <md-icon>games</md-icon>
            <span class="md-list-item-text">Game</span>
          </md-list-item>
          <!-- <md-list-item to="/messagelogs">
            <md-icon>error</md-icon>
            <span class="md-list-item-text"> Test View</span>
          </md-list-item>
           <md-list-item to="/chat">
            <md-icon>mail</md-icon>
            <span class="md-list-item-text"> Test View</span>
          </md-list-item> -->
        </md-list>
      </md-app-drawer>
      <md-app-content>
        <router-view />
        <md-snackbar
          :md-position="snackbar.position"
          :md-duration="snackbar.duration"
          :md-active.sync="snackbar.showSnackbar"
          md-persistent
        >
          <span>{{ snackbar.message }}</span>
        </md-snackbar>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
import { apiclient, authApi } from "./main";
import update from "./mixins/update";

export default {
  data: () => ({
    menuVisible: false,
    snackbar: {
      duration: 4000,
      position: "center",
      showSnackbar: false,
      message: "",
    },
    isUserLoggedIn: false,
    login_check_interval: null,
  }),
  // file deepcode ignore VueMissingCleanup: As it is needed for prod update
  mixins: [update],
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    snakcbar_event(event) {
      // Avoid spamming the 'update'..
      let displayed = this.format_event(event);
      if (displayed.length > 0) {
        this.snackbar.message = displayed;
        this.snackbar.showSnackbar = false;
        this.snackbar.showSnackbar = true;
      }
    },

    format_event(event) {
      if (typeof event != "string" && "message" in event) {
        return event.message;
      } else {
        const serializedEvent = JSON.stringify(event);
        return serializedEvent;
      }
    },
  },

  beforeDestroy() {
    clearInterval(this.login_check_interval);
  },
  mounted() {
    document.title = "Fast Cards";
    let token = this.$store.state.api_token;
    if (token) {
      console.log("Setting up authentication header");
      apiclient.defaultHeaders = { "Access-Control-Allow-Origin": "*" };
      apiclient.authentications["JWTBearer"].accessToken = token;

      this.$store.commit("register_event_callback", this.snakcbar_event);
      this.login_check_interval = setInterval(() => {
        authApi.isMyLoginValidAuthIsMyLoginValidGet((error, data, response) => {
          if (error) {
            this.isUserLoggedIn = false;
          } else {
            console.debug(data);
            console.debug(response);
            this.isUserLoggedIn = true;
          }
          this.$store.commit("update_login_validity", this.isUserLoggedIn);
        });
      }, 1000);
    }
  },
};
</script>
<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.md-app {
  min-height: 350px;
  border: 1px solid rgba(#000, 0.12);
}

// Demo purposes only
.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}

.page-container {
  min-height: 100vh;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>
