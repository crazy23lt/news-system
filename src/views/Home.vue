<template>
  <el-container>
    <el-header style="padding:0px;">
      <HeaderComp />
    </el-header>
    <el-container class="container">
      <el-aside
        style="overflow-x: hidden;"
        :width="isCollapse ? '64px' : '200px'"
      >
        <SildeNav v-on:changeSilder="silderHandler" />
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeaderComp from "../components/Header";
import SildeNav from "../components/SildeMenu";
import { mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      isCollapse: true,
    };
  },
  components: { HeaderComp, SildeNav },
  methods: {
    ...mapActions(["actionUserInfo"]),
    silderHandler(state) {
      this.isCollapse = state;
    },
  },
  async created() {
    let res = await this.axios.post("/lv1/searchuser", {
      _id: window.localStorage.getItem("_id"),
    });
    if (res.status === 200) {
      let { data } = res.data;
      this.actionUserInfo(data);
    } else {
      this.$notify.info({
        title: res.statusText,
        message: res.data.msg,
      });
    }
  },
};
</script>

<style lang="less" scoped>
.el-header {
  height: 10%;
}
.el-container {
  height: 100%;
}
.container {
  height: 90%;
}
.el-aside {
  background-color: #707b86;
  transition: width 0.1s ease-in-out 0s;
}
</style>
