<template>
  <div>
    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="card-content">
            <div class="news-count">
              爬取时间间隔：
            </div>
            <el-slider
              class="slider-time"
              v-model="value"
              :max="24"
              :min="1"
              show-input
              :step="1"
              :marks="marks"
              @input="changeSpiderTime"
              @change="changeSpiderTime"
            >
            </el-slider>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="24">
        <el-card class="box-card">
          <div class="news-count">
            设置爬取媒体
          </div>
          <el-tree
            show-checkbox
            :data="data"
            :props="defaultProps"
            @check="handleNodeCheck"
          ></el-tree>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
export default {
  name: "spider",
  data() {
    return {
      data: [
        {
          label: "NBA体育",
          children: [
            {
              label: "新浪体育"
            },
            {
              label: "腾讯体育"
            }
          ]
        },
        {
          label: "金融理财",
          children: [
            {
              label: "深圳理财"
            },
            {
              label: "上海理财"
            }
          ]
        },
        {
          label: "国际新闻",
          children: [
            {
              label: "早间新闻"
            },
            {
              label: "午间新闻"
            },
            {
              label: "晚间新闻"
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      },
      value: 10,
      marks: {
        1: "1h",
        2: "2h",
        4: "4h",
        6: "6h",
        10: "10h",
        12: "12h",
        16: "16h",
        24: "24h"
      }
    };
  },
  methods: {
    handleNodeCheck: debounce(function(data) {
      console.log(data);
      // 请求服务端设置 爬虫时间间隔的接口
      let axiosState = true;
      if (axiosState) {
        this.$message.success("设置爬取媒体成功！");
      } else {
        this.$message.error("设置爬取媒体失败！");
      }
    }, 3000),
    changeSpiderTime: debounce(function(value) {
      console.info(value);
      // 请求服务端设置 爬虫时间间隔的接口
      let axiosState = true;
      if (axiosState) {
        this.$message.success("设置时间间隔成功！");
      } else {
        this.$message.error("设置时间间隔失败！");
      }
    }, 1000)
  }
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
.slider-time {
  flex-grow: 1;
  margin: 0 50px;
}
.el-row {
  margin-bottom: 20px;
}
</style>
