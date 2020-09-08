"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gameApi = exports.backendApi = exports.apiclient = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./registerServiceWorker");

var _router = _interopRequireDefault(require("./router"));

var _store = _interopRequireDefault(require("./store"));

var _vueMaterial = _interopRequireDefault(require("vue-material"));

require("vue-material/dist/vue-material.min.css");

require("vue-material/dist/theme/default.css");

var _ApiClient = _interopRequireDefault(require("./libs/src/ApiClient"));

var _ApiApi = _interopRequireDefault(require("./libs/src/api/ApiApi"));

var _GameEngineApiApi = _interopRequireDefault(require("./libs/src/api/GameEngineApiApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//import VueSocketIOExt from "vue-socket.io-extended";
//import io from "socket.io-client";
_vue["default"].use(_vueMaterial["default"]);

_vue["default"].config.productionTip = false; //const socket = io("http://127.0.0.1:8000");
//Vue.use(VueSocketIOExt, socket);

var apiclient = new _ApiClient["default"]();
exports.apiclient = apiclient;
var backendApi = new _ApiApi["default"](apiclient);
exports.backendApi = backendApi;
var gameApi = new _GameEngineApiApi["default"](apiclient);
exports.gameApi = gameApi;
new _vue["default"]({
  router: _router["default"],
  store: _store["default"],
  render: function render(h) {
    return h(_App["default"]);
  },
  beforeCreate: function beforeCreate() {
    this.$store.commit("initialiseStore");
  }
}).$mount("#app");