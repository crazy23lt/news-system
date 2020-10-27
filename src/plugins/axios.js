"use strict";

import Vue from "vue";
import axios from "axios";
import Qs from "qs";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
import { Notification } from "element-ui";
import { Loading } from "element-ui";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: "http://10.1.8.196:3001",
  baseURL: "http://192.168.137.1:3001",
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
};
let loadingInstance = null;
const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    loadingInstance = Loading.service({
      fullscreen: true,
      background: "rgba(0, 0, 0, 0.3)",
      text: "Loading",
    });
    Nprogress.start();
    config.data = Qs.stringify(config.data);
    // Do something before request is sent
    // 请求头添加Authorization字段  也可以存在 vuex中
    config.headers.Authorization = window.localStorage.getItem("token");
    // vueX 中的 token
    // 进度条开启
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // 关闭进度条
    loadingInstance.close();
    Nprogress.done();
    return response;
  },
  function(error) {
    loadingInstance.close();
    Nprogress.done();
    // Do something with response error
    const { status } = error.response;
    console.info(error.response);
    switch (status) {
      case 401:
        Notification.info({
          title: "错误",
          message: "用户未认证",
        });
        break;
      case 403:
        Notification.info({
          title: "错误",
          message: "用户无权限访问该资源",
        });
        break;
      case 500:
        Notification.info({
          title: "错误",
          message: "服务器错误",
        });
        break;
    }
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      },
    },
    $axios: {
      get() {
        return _axios;
      },
    },
  });
};

Vue.use(Plugin);

export default Plugin;
