<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部任务" name="first"> </el-tab-pane>
    <el-tab-pane label="已完成" name="second">已完成</el-tab-pane>
    <el-tab-pane label="未完成" name="third">未完成</el-tab-pane>
  </el-tabs>
</template>

<script>
export default {};
</script>

<style></style>
