<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="card-content">
            <div class="news-count">今日爬取新闻数：{{ newsCount }}</div>
            <el-button @click="dialogVisible = true" type="primary" round
              >主要按钮</el-button
            >
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <router-view />
        </el-card>
      </el-col>
    </el-row>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <div class="dialog-wrapper">
        <i class="el-icon-info"></i>
        <span>确认开启爬虫？</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="spiderStart">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "newspage",
  data() {
    return {
      dialogVisible: false,
      newsCount: 0,
    };
  },
  methods: {
    spiderStart() {
      this.dialogVisible = false;
      this.spiderBegin();
      this.getnews();
    },
    getnews: async function() {
      let { data } = await this.axios.post(`/lv1/todaynews`);
      this.newsCount = data.data;
    },
    spiderBegin: async function() {
      let res = await this.axios.post(`/lv1/spider`);
      this.$notify.info({
        title: res.statusText,
        message: res.data.msg,
      });
    },
  },
  async created() {
    this.getnews();
  },
  components: {},
};
</script>

<style lang="less" scoped>
.card-content {
  display: flex;
  justify-content: space-around;
}
.news-count {
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
}
.el-row {
  margin-bottom: 20px;
}
.el-icon-info {
  font-size: 50px;
  color: #e6a23c;
}
.dialog-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
