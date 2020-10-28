<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span class="title">基本表单</span>
      <el-button type="primary" round style="float: right;" size="mini"
        >重置表单</el-button
      >
    </div>
    <el-form ref="baseFormRef" label-position="top" :model="baseFormData">
      <el-form-item label="Type 1">
        <el-input
          :class="!phActive ? '' : 'type1'"
          v-model="baseFormData.name"
          placeholder="Input Name"
          @focus="gainFouceType1"
          @blur="gainBlurType1"
        >
        </el-input>
      </el-form-item>
      <el-form-item label="Type 2">
        <el-input
          class="type2"
          v-model="baseFormData.title"
          @focus="gainFouceType2"
          @blur="gainBlurType2"
        >
          <label>
            <span>Input Title</span>
          </label></el-input
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      baseFormData: {
        name: "",
        title: "",
      },
      phActive: false,
    };
  },
  methods: {
    gainFouceType1() {
      console.info("获取焦点");
      this.phActive = true;
    },
    gainBlurType1() {
      console.info("失去焦点");
      this.phActive = false;
    },
    gainFouceType2() {
      //   this.phActive = true;
    },
    gainBlurType2() {
      //   this.phActive = false;
    },
  },
};
</script>

<style lang="less" scoped>
.title {
  font-weight: bolder !important;
  font-size: 20px;
}
.el-form {
  .el-form-item {
    ::v-deep input {
      height: 66px;
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #222;
      border-radius: 0;
      -webkit-transition: all 0.2s linear 0s;
      -moz-transition: all 0.2s linear 0s;
      transition: all 0.2s linear 0s;
      &::placeholder {
        -webkit-transition: all 0.2s linear 0s;
        -moz-transition: all 0.2s linear 0s;
        transition: all 0.2s linear 0s;
        font-weight: bolder;
        color: black;
      }
    }
  }
}
.type1 {
  ::placeholder {
    color: transparent !important;
  }
}
.type2 {
  ::v-deep input {
    border: none !important;
    border-bottom: 1px solid #222 !important;
  }
}
</style>
