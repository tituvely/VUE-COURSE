import {
  fetchAskList,
  fetchJobList,
  fetchNewsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
} from "../api/index";

export default {
  FETCH_NEWS({ commit }) {
    return fetchNewsList().then(({ data }) => {
      commit("SET_NEWS", data);
      return data;
    });
  },
  FETCH_ASK({ commit }) {
    return fetchAskList().then(({ data }) => {
      commit("SET_ASK", data);
      return data;
    });
  },
  FETCH_JOBS({ commit }) {
    return fetchJobList().then(({ data }) => {
      commit("SET_JOBS", data);
      return data;
    });
  },
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username).then(({ data }) => {
      commit("SET_USER", data);
      return data;
    });
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchItem(itemId).then(({ data }) => {
      commit("SET_ITEM", data);
      return data;
    });
  },
  FETCH_LIST({ commit }, pageName) {
    return fetchList(pageName).then(({ data }) => {
      commit("SET_LIST", data);
      return data;
    });
  },
};
