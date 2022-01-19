import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters: {
    news(state) {
      return state.news;
    },
    jobs(state) {
      return state.jobs;
    },
    ask(state) {
      return state.ask;
    },
  },
  mutations,
  actions,
});
