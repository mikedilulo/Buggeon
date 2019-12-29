import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _buggeonApi = axios.create({
  baseURL: "//localhost:3000/api",
  timeout: 5000
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bug: []
  },
  mutations: {
    createBug(state, bug) {
      state.bug.push(bug);
      // console.log(bug);
    },
    allBugs(state, data) {
      state.bug = data;
    }
  },
  actions: {
    async createBug({ commit, dispatch }, bug) {
      let res = await _buggeonApi.post("bugs", bug);
      commit("createBug", res.data);
      console.log(res.data);
    },
    async getAll({ commit, dispatch }) {
      let res = await _buggeonApi.get("bug");
      commit("allBugs", res.data);
    }
  },
  modules: {}
});
