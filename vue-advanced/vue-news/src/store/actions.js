import {
  fetchAskList,
  fetchJobList,
  fetchNewsList,
  fetchUserInfo,
  fetchItem,
} from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList().then(({ data }) => {
      commit("SET_NEWS", data);
      return data;
    });
  },
  FETCH_ASK({ commit }) {
    fetchAskList().then(({ data }) => commit("SET_ASK", data));
  },
  FETCH_JOBS({ commit }) {
    fetchJobList().then(({ data }) => commit("SET_JOBS", data));
  },
  FETCH_USER({ commit }, username) {
    fetchUserInfo(username).then(({ data }) => commit("SET_USER", data));
  },
  FETCH_ITEM({ commit }, itemId) {
    fetchItem(itemId).then(({ data }) => commit("SET_ITEM", data));
  },
};
