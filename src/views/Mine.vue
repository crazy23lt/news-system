<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card shadow="hover" class="box-card mgb20" style="height:252px;">
          <div slot="header" class="clearfix">
            <span>用户信息</span>
          </div>
          <div class="userinfo">
            <div class="avatar">
              <img src="../assets/Koala.jpg" alt="Koala" />
            </div>
            <div class="user-role">
              <span>Koala</span>
              <span>超级管理员</span>
            </div>
          </div>
        </el-card>
        <el-card shadow="hover" class="box-card">
          <div slot="header" class="clearfix">
            <span>系统信息</span>
          </div>
          <ve-pie :data="chartData" :settings="chartSettings"></ve-pie>
        </el-card>
      </el-col>
      <el-col :span="16">
        <el-row :gutter="20" class="mgb20">
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="ex-card red">
                <div class="icon-wrapper">
                  <i class="el-icon-user-solid"></i>
                </div>
                <div class="card-msg">
                  <span class="msg-title">用户人数</span>
                  <span class="msg-content">100</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="ex-card blue">
                <div class="icon-wrapper">
                  <i class="el-icon-user-solid"></i>
                </div>
                <div class="card-msg">
                  <span class="msg-title">媒体数量</span>
                  <span class="msg-content">782</span>
                </div>
              </div>
            </el-card>
          </el-col>
          <el-col :span="8">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="ex-card green">
                <div class="icon-wrapper">
                  <i class="el-icon-user-solid"></i>
                </div>
                <div class="card-msg">
                  <span class="msg-title">新闻数量</span>
                  <span class="msg-content">2231</span>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card shadow="hover" class="box-card mgb20">
              <div slot="header" class="clearfix">
                <span>新闻详情</span>
              </div>
              <ve-histogram
                :settings="chartSettings1"
                :data="chartData1"
              ></ve-histogram>
            </el-card>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card shadow="hover" class="box-card">
              <div slot="header" class="clearfix">
                <span>快速爬取</span>
              </div>
              <div class="qk-options">
                <el-button type="primary" round>新浪新闻</el-button>
                <el-button type="primary" round>网易新闻</el-button>
                <el-button type="primary" round>腾讯新闻</el-button>
                <el-button type="primary" round>百度新闻</el-button>
                <el-button type="primary" round>今日头条</el-button>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data() {
    this.chartSettings = {
      roseType: "radius",
    };
    this.chartSettings1 = {
      axisSite: { right: ["爬取率"] },
      yAxisType: ["KMB", "percent"],
      yAxisName: ["数值", "比率"],
    };
    return {
      chartData: {
        columns: ["类型", "新闻数量"],
        rows: [
          { 类型: "新闻", 新闻数量: 1393 },
          { 类型: "娱乐", 新闻数量: 3530 },
          { 类型: "财经", 新闻数量: 2923 },
          { 类型: "体育", 新闻数量: 1723 },
          { 类型: "科技", 新闻数量: 3792 },
          { 类型: "旅游", 新闻数量: 4593 },
        ],
      },
      chartData1: {
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.mgb20 {
  margin-bottom: 20px;
}
.red {
  background-color: rgb(245, 108, 108);
  color: white;
  .icon-wrapper {
    background-color: rgb(250, 131, 131);
  }
}
.blue {
  background-color: rgb(146, 109, 222);
  color: white;
  .icon-wrapper {
    background-color: rgb(165, 135, 228);
  }
}
.green {
  background-color: rgb(21, 195, 119);
  color: white;
  .icon-wrapper {
    background-color: rgb(62, 206, 143);
  }
}
.ex-card {
  height: 100px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
  .icon-wrapper {
    min-height: 50px;
    min-width: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
  }
  .card-msg {
    height: 100%;
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    font-weight: bolder;
    color: white;
    .msg-title {
      font-size: 16px;
    }
    .msg-content {
      font-size: 24px;
    }
  }
}
.userinfo {
  display: flex;
  justify-content: center;
  align-items: center;
  .avatar {
    width: 120px;
    height: 120px;
    min-width: 120px;
    min-height: 120px;
    border-radius: 50%;
    overflow: hidden;
    border: 5px solid #ebeef5;
    box-sizing: border-box;
    transition: border-color 0.3s ease-in-out;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    &:hover {
      border-color: #c0c4cc;
    }
  }
  .user-role {
    flex-grow: 1;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    font-size: 28px;
    padding: 10px;
    box-sizing: border-box;
    height: 160px;
    span:nth-child(1) {
      font-weight: bold;
    }
    &:nth-child(2) {
    }
  }
}
.pie-wrapper {
  height: 160px;
}
.qk-options {
  height: 35px;
}
</style>
