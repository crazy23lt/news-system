const module_net_list = {
  namespaced: true,
  state: () => ({
    sipderType: [],
  }),
  matations: {
    mutateSiplerType(state, params) {
      state.sipderType = params;
    },
  },
  actions: {
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
};
export default module_net_list;
