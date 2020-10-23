<template>
  <el-dialog title="开启爬虫" :visible.sync="dialog" width="30%">
    <slot></slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary" @click="handleConfirm">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      defalut: false
    }
  },
  methods: {
    // 对话框关闭事件前置钩子函数
    handleClose() {
      this.$emit("dialogConfirm", false);
    },
    // 对话框确认事件处理
    handleConfirm() {
      this.$emit("dialogConfirm", true);
    }
  }
};
</script>

<style lang="less" scoped></style>
