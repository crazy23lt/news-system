import Vue from "vue";
import Vuex from "vuex";
import module_net_list from "./moduleNet";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
  },
  mutations: {
    mutateUserInfo(state, params) {
      state.userInfo = params;
    },
  },
  actions: {
    async actionUserInfo({ commit }, params) {
      commit("mutateUserInfo", params);
    },
  },
  getters: {},
  modules: {
    module_net_list,
  },
});
