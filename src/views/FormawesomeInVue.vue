<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix title">
      <span>FormawesomeInVue</span>
    </div>
    <el-timeline>
      <el-timeline-item timestamp="step 1" placement="top">
        <el-card shadow="hover">
          <h3>安装依赖</h3>
          <pre>
            npm i --save @fortawesome/fontawesome-svg-core
            npm i --save @fortawesome/vue-fontawesome
            npm i --save @fortawesome/free-solid-svg-icons
            npm i --save @fortawesome/free-regular-svg-icons
            npm i --save @fortawesome/free-brands-svg-icons
          </pre>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="step 2" placement="top">
        <el-card shadow="hover">
          <h3>挂载全局组件</h3>
          <pre>
            import Vue from "vue";
            import { library } from "@fortawesome/fontawesome-svg-core";
            import { fas } from "@fortawesome/free-solid-svg-icons";
            import { far } from "@fortawesome/free-regular-svg-icons";
            import { fab } from "@fortawesome/free-brands-svg-icons";
            import {
              FontAwesomeIcon,
              FontAwesomeLayers,
              FontAwesomeLayersText,
            } from "@fortawesome/vue-fontawesome";

            library.add(fas, far, fab);

            Vue.component("font-awesome-icon", FontAwesomeIcon);
            Vue.component("font-awesome-layers", FontAwesomeLayers);
            Vue.component("font-awesome-layers-text", FontAwesomeLayersText);
          </pre>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="step 3" placement="top">
        <el-card shadow="hover">
          <h3>开始使用</h3>
          <pre>
            &lt;font-awesome-icon :icon="['fas', 'square']" /&gt;
            &lt;font-awesome-icon :icon="['far', 'square']" /&gt;
            &lt;font-awesome-icon :icon="['fab', 'accessible-icon']" /&gt;
          </pre>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="step 4" placement="top">
        <el-card shadow="hover">
          <h3>图标设置大小</h3>
          <pre>
            <font-awesome-icon icon="chess-knight"  />&lt;font-awesome-icon icon="chess-knight"  /&gt;

            <font-awesome-icon icon="chess-knight" size="xs" />&lt;font-awesome-icon icon="chess-knight" size="xs" /&gt;

            <font-awesome-icon icon="chess-knight" size="lg"  />&lt;font-awesome-icon icon="chess-knight" size="lg"  /&gt;

            <font-awesome-icon icon="chess-knight" size="2x" />&lt;font-awesome-icon icon="chess-knight" size="2x" /&gt;
          </pre>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="step 5" placement="top">
        <el-card shadow="hover">
          <h3>固定图标宽度</h3>
          <pre>
            <font-awesome-icon icon="home" fixed-width /> home &lt;font-awesome-icon icon="home" fixed-width /&gt;
            <font-awesome-icon icon="child" fixed-width /> help &lt;font-awesome-icon icon="child" fixed-width /&gt;
            <font-awesome-icon icon="cog" fixed-width /> settings &lt;font-awesome-icon icon="cog" fixed-width /&gt;
          </pre>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="step 6" placement="top">
        <el-card shadow="hover">
          <h3>旋转图标</h3>
          <pre>
            &lt;font-awesome-icon icon="chess-knight"  /&gt;
            &lt;font-awesome-icon icon="chess-knight" flip="horizontal" /&gt;
            &lt;font-awesome-icon icon="chess-knight" flip="vertical" /&gt;
            &lt;font-awesome-icon icon="chess-knight" flip="both" /&gt;
          </pre>

          <el-row :gutter="20">
            <el-col :span="6" align="center">
              <span>
                flip="none"
              </span>
              <font-awesome-icon size="2x" icon="chess-knight"
            /></el-col>
            <el-col :span="6" align="center">
              <span>
                flip="horizontal"
              </span>

              <font-awesome-icon size="2x" icon="chess-knight" flip="horizontal"
            /></el-col>
            <el-col :span="6" align="center">
              <span>
                flip="vertical"
              </span>
              <font-awesome-icon size="2x" icon="chess-knight" flip="vertical"
            /></el-col>
            <el-col :span="6" align="center">
              <span>
                flip="both"
              </span>
              <font-awesome-icon size="2x" icon="chess-knight" flip="both"
            /></el-col>
          </el-row>
        </el-card>
      </el-timeline-item>
      <el-timeline-item timestamp="step 7" placement="top">
        <el-card shadow="hover">
          <h3>旋转图标</h3>
          <pre>
            &lt;font-awesome-icon icon="chess-knight"  /&gt;
            &lt;font-awesome-icon icon="chess-knight" flip="horizontal" /&gt;
            &lt;font-awesome-icon icon="chess-knight" flip="vertical" /&gt;
            &lt;font-awesome-icon icon="chess-knight" flip="both" /&gt;
          </pre>

          <el-row :gutter="20">
            <el-col :span="6" align="center">
              <span>
                0&deg;
              </span>
              <font-awesome-icon size="2x" icon="chess-knight" rotation="0"
            /></el-col>
            <el-col :span="6" align="center">
              <span>
                90&deg;
              </span>

              <font-awesome-icon size="2x" icon="chess-knight" rotation="90"
            /></el-col>
            <el-col :span="6" align="center">
              <span>
                180&deg;
              </span>
              <font-awesome-icon size="2x" icon="chess-knight" rotation="180"
            /></el-col>
            <el-col :span="6" align="center">
              <span>
                270&deg;
              </span>
              <font-awesome-icon size="2x" icon="chess-knight" rotation="270"
            /></el-col>
          </el-row>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </el-card>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.title {
  span {
    font-weight: bolder !important;
    font-size: 20px;
  }
}
span {
  vertical-align: auto;
}
</style>
