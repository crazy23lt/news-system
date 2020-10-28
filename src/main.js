import Vue from "vue";
import "./plugins/axios";
import "./plugins/echarts";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
import "./plugins/fontawesome.js";
import "./assets/normalize.css";
import "./assets/reset.less";
import "./assets/theme.less";
import "./utils/format";
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
