<template>
  <el-tabs v-model="activeState" @tab-click="handleClick">
    <el-tab-pane label="全部任务" name="all"> </el-tab-pane>
    <el-tab-pane label="已完成" name="completed">已完成</el-tab-pane>
    <el-tab-pane label="未完成" name="undone">未完成</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeState: "all",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style></style>
