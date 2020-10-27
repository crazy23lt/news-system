import Vue from "vue";
import Vuex from "vuex";
// import module_net_list from "./moduleNet";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: {},
    sipderType: [],
  },
  mutations: {
    mutateUserInfo(state, params) {
      state.userInfo = params;
    },
    mutateSiplerType(state, params) {
      state.sipderType = params;
    },
  },
  actions: {
    async actionUserInfo({ commit }, params) {
      commit("mutateUserInfo", params);
    },
    async actionSipderType({ commit }, params) {
      commit("mutateSiplerType", params);
    },
  },

  getters: {
    sipderAllType(state) {
      return state.sipderType.map((item) => {
        return {
          website: item,
        };
      });
    },
  },
  modules: {
    // module_net_list,
  },
});
