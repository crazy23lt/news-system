<template>
  <el-table-column label="日期" width="180">
    <template slot-scope="scope">
      <i class="el-icon-time"></i>
      <span style="margin-left: 10px">{{ scope.row.date }}</span>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: "extablecolumn"
};
</script>

<style></style>
