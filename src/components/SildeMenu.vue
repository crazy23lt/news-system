<template>
  <div :class="[isCollapse ? 'close' : 'open', 'wrapper']">
    <el-button
      :class="isCollapse ? 'close' : 'open'"
      type="primary"
      @click="showSildeNav"
      class="icon"
      :icon="isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    ></el-button>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#545c64"
      text-color="white"
      active-text-color="#ffd04b"
      :collapse-transition="false"
      :router="true"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">系统主页</span>
      </el-menu-item>
      <el-submenu index="/news">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span slot="title">新闻设置</span>
        </template>
        <el-menu-item index="/netlist">媒体列表</el-menu-item>
        <el-menu-item index="/newslist">新闻列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/spider">
        <i class="el-icon-help"></i>
        <span slot="title">爬虫设置</span>
      </el-menu-item>
      <el-menu-item index="/todo">
        <i class="el-icon-s-check"></i>
        <span slot="title">Todo应用</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-user"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sildeNav",
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    showSildeNav() {
      this.isCollapse = !this.isCollapse;
      this.$emit("changeSilder", this.isCollapse);
    },
  },
};
</script>

<style lang="less" scoped>
.wrapper {
  transition: width 0.3s;
}
.close {
  width: 64px;
}
.open {
  width: 200px;
}
.el-menu {
  border: none !important;
  .el-menu-item {
    transition: border-color 0.3s, background-color 0.3s, color 0.3s;
  }
}
.icon {
  font-size: 20px;
}
</style>
