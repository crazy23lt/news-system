<template>
  <div :class="isCollapse ? 'close' : 'open'">
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
      :collapse-transition="true"
      :router="true"
    >
      <el-submenu index="/">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">新闻</span>
        </template>
        <el-menu-item index="/netlist">媒体列表</el-menu-item>
        <el-menu-item index="/newslist">新闻列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/spider">
        <i class="el-icon-menu"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-setting"></i>
        <span slot="title">管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "sildeNav",
  data() {
    return {
      isCollapse: true
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
    }
  }
};
</script>

<style lang="less" scoped>
.close {
  width: 64px;
}
.open {
  width: 200px;
}
.el-menu {
  border: none !important;
}
.icon {
  font-size: 20px;
}
</style>
