<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column
        sortable
        label="日期"
        width="120"
        align="left"
        :filters="fliterDate"
        :filter-method="filterHandlerDate"
      >
        <template slot-scope="scope">
          <el-tag effect="plain">
            {{ scope.row.time | dateFormat(true) }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="auto" align="left">
      </el-table-column>
      <el-table-column
        label="来源"
        width="200"
        align="left"
        :filters="fliterSource"
        :filter-method="filterHandlerSource"
      >
        <template slot-scope="scope">
          <el-link :href="scope.row.url" :underline="false" target="_blank">
            {{ scope.row.source }}
          </el-link>
        </template>
      </el-table-column>

      <el-table-column label="操作" align="center" fixed="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="danger"
            round
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="paginationOption.currentPage"
      :page-sizes="paginationOption.pageSizes"
      :page-size="paginationOption.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="paginationOption.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "newslist",
  data() {
    return {
      paginationOption: {
        total: 100,
        pageSize: 20,
        pageSizes: [20, 50, 100],
        currentPage: 1,
      },
      tableData: [],
    };
  },
  methods: {
    handleDelete: async function(index, row) {
      let res = await this.axios.post("/lv1/delnews", { _id: row._id });
      if (res.status === 200) {
        this.tableData.splice(index, 1);
        this.$notify.info({
          title: res.statusText,
          message: res.data.msg,
        });
      } else {
        this.$notify.info({
          title: res.statusText,
          message: res.data.msg,
        });
      }
    },
    filterHandlerDate(value, row) {
      return Vue.filter("dateFormat")(row.time, true) === value;
    },
    filterHandlerSource(value, row) {
      return value === row.source;
    },
    handleSizeChange: async function(val) {
      this.paginationOption.pageSize = val;
      let { data } = await this.axios.post("/lv1/news", {
        pagesize: this.paginationOption.pageSize,
        pagenum: this.paginationOption.currentPage,
      });
      this.paginationOption.total = data.data.newsCount;
      this.tableData = data.data.newsSize;
    },
    handleCurrentChange: async function(val) {
      this.paginationOption.currentPage = val;
      let { data } = await this.axios.post("/lv1/news", {
        pagesize: this.paginationOption.pageSize,
        pagenum: this.paginationOption.currentPage,
      });
      this.paginationOption.total = data.data.newsCount;
      this.tableData = data.data.newsSize;
    },
  },
  computed: {
    fliterDate: function() {
      let mapcache = new Map();
      this.tableData.map((item) => {
        let t = Vue.filter("dateFormat")(item.time, true);
        if (!mapcache.has(t)) mapcache.set(t, { text: t, value: t });
      });
      return [...mapcache.values()];
    },
    fliterSource: function() {
      let mapcache = new Map();
      this.tableData.map((item) => {
        if (!mapcache.has(item.source))
          mapcache.set(item.source, { text: item.source, value: item.source });
      });
      return [...mapcache.values()];
    },
  },
  async created() {
    let { data } = await this.axios.post("/lv1/news", {
      pagesize: this.paginationOption.pageSize,
      pagenum: this.paginationOption.currentPage,
    });
    this.paginationOption.total = data.data.newsCount;
    this.tableData = data.data.newsSize;
  },
};
</script>

<style lang="less" scoped></style>
