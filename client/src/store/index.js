import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _buggeonApi = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {}
});
