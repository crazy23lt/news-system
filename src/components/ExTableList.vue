<template>
  <div class="table">
    <!-- layoutKey.control 控制 表单  -->
    <div class="table-control" v-if="layoutKey.control">
      <!-- 刷新功能 -->
      <div class="table-control-title" @click="reload">
        <!-- 刷新按钮 -->
        <i class="el-icon-refresh"></i>
      </div>
      <!-- 下拉框 -->
      <el-dropdown class="table-control-title">
        <!-- 下拉按钮图标 -->
        <span class="el-dropdown-link">
          <i class="el-icon-s-operation table-control-icon"></i>
        </span>
        <!-- 下拉菜单 -->
        <el-dropdown-menu slot="dropdown" class="table-control-checkbox">
          <!-- 多选框 -->
          <el-checkbox-group v-model="headItems" @change="changeChecked">
            <el-checkbox
              class="table-control-checkbox-item"
              v-for="(item, index) in allColumn"
              :label="item"
              :key="index"
              >{{ item }}</el-checkbox
            >
          </el-checkbox-group>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <!-- 表格主体内容 -->
    <el-table
      class="table"
      style="width: 100%"
      ref="tableList"
      :data="tableData"
      :defaultSort="defaultSort"
      v-bind="$attrs"
      v-on="$listeners"
      @selectionChange="selectionChange"
      @sort-change="sortChange"
    >
      <ex-table-column> </ex-table-column>
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      background
      small
      class="table-pagination"
      :current-page.sync="page.pageNo"
      :page-sizes="page.list"
      :page-size="page.pageSize"
      :layout="page.layout"
      :total="page.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      v-if="layoutKey.page"
    />
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import ExTableColumn from "./ExTableColumn";
export default {
  props: {
    layout: {
      default: "page,control" // 默认显示的功能组件
    }
  },
  data() {
    return {
      headItems: ["谷歌"],
      allColumn: ["百度", "谷歌", "微软"],
      layoutKey: {},
      page: {
        list: [5, 10, 20, 50, 100],
        total: null,
        pageSize: 10,
        pageNo: 1,
        layout: "total,sizes,prev,pager,next,jumper"
      }
    };
  },
  methods: {
    // 二次处理 props 接受的 layout 参数
    handleLayout() {
      const layout = this.layout;
      if (!layout) return null;
      layout.split(",").map(item => {
        const key = item.trim();
        this.layoutKey[key] = true;
        return true;
      });
      // 返回 表格 配置参数 layoutKey
      return this.layoutKey;
    },
    // 初始化函数
    init() {
      // 处理表格模板功能
      this.handleLayout();
    }
  },
  created() {
    //   初始化表格组件
    this.init();
  },
  components: {
    ExTableColumn
  }
};
</script>

<style lang="less" scoped></style>
