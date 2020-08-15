import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import  "./api";

//  注册全局组件
import "./components/common";

//  reset.css
import './assets/css/reset.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
