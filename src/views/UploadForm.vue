<template>
  <div class="container">
    <el-row style="margin-bottom:20px;">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>裁剪图片</span>
            <el-button type="primary" round style="float: right;" size="mini"
              >上传文件</el-button
            >
          </div>
          <div class="container"></div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>上传文件</span>
            <el-button type="primary" round style="float: right;" size="mini"
              >上传文件</el-button
            >
          </div>
          <div class="container">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.container {
}
</style>
