import { fetchAskList, fetchJobList, fetchNewsList } from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList().then(({ data }) => commit("SET_NEWS", data));
  },
  FETCH_ASK({ commit }) {
    fetchAskList().then(({ data }) => commit("SET_ASK", data));
  },
  FETCH_JOBS({ commit }) {
    fetchJobList().then(({ data }) => commit("SET_JOBS", data));
  },
};
