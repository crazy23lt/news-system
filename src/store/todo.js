import * as todoMutation from "./type";
// 状态
const state = {
  todoTasks: [
    { info: "webpack深入浅出学习", state: false },
    { info: "react入门到精通", state: false },
    { info: "Vue组件化开发", state: false },
    { info: "MongoDB用户管理", state: false },
  ],
};
// 异步
const actions = {};
// 计算属性
const getters = {
  [todoMutation.GET_TASK](state) {
    return state;
  },
};
// 以异变
const mutations = {
  [todoMutation.CHANGE_STATE](state, params) {
    state.todoTasks[params].state = !state.todoTasks[params].state;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
