/**
 * 文件夹
 *  class : 0/1/2... 文件夹等级
 *  name : 文件夹名称
 *  up_id : null/0/1/2...  父级文件夹
 *  id : 0/1/2/3...
 *
 *  我的资源
 *      应用数据
 *          娱乐
 *             音乐
 *  学习资料
 */
const state = {
  dirs: [
    {
      class: 0,
      name: "我的资源",
      up_id: null,
      id: 0,
    },
    {
      class: 0,
      name: "学习资料",
      up_id: null,
      id: 1,
    },
    {
      class: 1,
      name: "应用数据",
      up_id: 0,
      id: 0,
    },
    {
      class: 2,
      name: "娱乐",
      up_id: 0,
      id: 0,
    },
    {
      class: 3,
      name: "音乐",
      up_id: 0,
      id: 0,
    },
  ],
};
const actions = {};
const getters = {};
const mutations = {};
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
