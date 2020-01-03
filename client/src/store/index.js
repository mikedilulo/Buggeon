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
    bug: [],
    note: [],
    closedBug: [],
    activeBug: {}
  },
  mutations: {
    createBug(state, bug) {
      state.bug.push(bug);
      // console.log(bug);
    },
    allBugs(state, data) {
      state.bug = data;
    },
    getById(state, bug) {
      state.activeBug = bug;
    },
    editBug(state, bug) {
      state.activeBug = bug;
    },
    addNote(state, note) {
      state.note.push(note);
    },
    setNotes(state, data) {
      state.note = data;
    },
    setAllNotes(state, data) {
      state.note = data;
    }
  },
  actions: {
    async createBug({ commit, dispatch }, bug) {
      let res = await _buggeonApi.post("bugs", bug);
      commit("createBug", res.data);
      console.log(res.data);
    },
    async getAll({ commit, dispatch }) {
      let res = await _buggeonApi.get("bugs");
      commit("allBugs", res.data);
    },
    async getBugById({ commit, dispatch }, id) {
      let res = await _buggeonApi.get("bugs/" + id);
      commit("getById", res.data);
    },
    // TODO NEED TO GET THIS UP AND GOING EDIT BUG ONLY
    async editBug({ commit, dispatch }, id) {
      let res = await _buggeonApi.put("bugs/" + id);
      commit("editBug", res.data);
    },
    async deleteBug({ commit, dispatch }, id) {
      await _buggeonApi.delete("bugs/" + id);
      dispatch("getAll");
    },
    async createNote({ commit, dispatch }, note) {
      let res = await _buggeonApi.post("notes", note);
      commit("addNote", res.data);
      console.log("From Create Note", res.data.id);
    },
    async getNotesByBugId({ commit, dispatch }, id) {
      let res = await _buggeonApi.get("bugs/" + id + "/notes");
      commit("setNotes", res.data);
    },
    // NOTE Not reading id. Res.data returns me everything. I just cant target it effectively
    async deleteNote({ commit, dispatch }, id) {
      await _buggeonApi.delete("notes/" + id);
      dispatch("getNotes");
      console.log(id);
    },
    // NOTE GET NOTES
    async getNotes({ commit, dispatch }) {
      let res = await _buggeonApi.get("notes");
      commit("setAllNotes", res.data);
    }
  },
  modules: {}
});
