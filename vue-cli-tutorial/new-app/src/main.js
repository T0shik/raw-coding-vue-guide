import Vue from "vue";
import App from "./App.vue";
import router from './router'
import axios from 'axios'
import { store } from './stores/store'
import "./components/generic/index";

Vue.config.productionTip = false;

const api = axios.create({
  baseURL: "http://localhost:3000/"
})

const axiosPlugn = {
  install(Vue) {
    Vue.prototype.$api = api;
  }
}

Vue.prototype.$eventBus = new Vue();

Vue.use(axiosPlugn);

var app = new Vue({
  router,
  store,
  render: h => h(App)
});

console.log(app);
app.$mount("#app")