import {
  fetchAskList,
  fetchJobList,
  fetchNewsList,
  fetchUserInfo,
  fetchItem,
  fetchList,
} from "../api/index";

export default {
  async FETCH_NEWS({ commit }) {
    try {
      const { data } = await fetchNewsList();
      commit("SET_NEWS", data);
      return data;
    } catch (error) {
      console.error();
    }
  },
  async FETCH_ASK({ commit }) {
    const { data } = await fetchAskList();
    commit("SET_ASK", data);
    return data;
  },
  async FETCH_JOBS({ commit }) {
    const { data } = await fetchJobList();
    commit("SET_JOBS", data);
    return data;
  },
  async FETCH_USER({ commit }, username) {
    const { data } = await fetchUserInfo(username);
    commit("SET_USER", data);
    return data;
  },
  async FETCH_ITEM({ commit }, itemId) {
    const { data } = await fetchItem(itemId);
    commit("SET_ITEM", data);
    return data;
  },
  async FETCH_LIST({ commit }, pageName) {
    const { data } = await fetchList(pageName);
    commit("SET_LIST", data);
    return data;
  },
};
