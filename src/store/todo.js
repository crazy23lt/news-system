import * as todoConst from "./type";
// 状态
const state = {
  todoTasks: [
    { info: "webpack深入浅出学习", time: "2018-04-19 20:00:00", state: false },
    { info: "react入门到精通", time: "2018-04-19 20:00:00", state: false },
    { info: "Vue组件化开发", time: "2018-04-19 20:00:00", state: false },
    { info: "MongoDB用户管理", time: "2018-04-19 20:00:00", state: false },
  ],
};
// 异步
const actions = {};
// 计算属性
const getters = {
  [todoConst.GET_TASK](state) {
    return state.todoTasks;
  },
};
// 以异变
const mutations = {
  [todoConst.CHANGE_STATE](state, params) {
    state.todoTasks[params].state = !state.todoTasks[params].state;
  },
  [todoConst.DEL_TASK](state, params) {
    state.todoTasks.splice(params, 1);
  },
  [todoConst.ALL_COMPLETE](state) {
    state.todoTasks.forEach((element) => {
      if (!element.state) element.state = true;
    });
  },
  [todoConst.DEL_ALL_COMPLETE](state) {
    state.todoTasks = state.todoTasks.filter((item) => !item.state);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
