<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column
        sortable
        prop="date"
        label="日期"
        width="180"
        align="center"
        :filters="fliterDate"
        :filter-method="filterHandlerDate"
      >
      </el-table-column>
      <el-table-column prop="title" label="标题" width="auto" align="left">
      </el-table-column>
      <el-table-column
        label="来源"
        width="180"
        align="center"
        fixed="right"
        :filters="fliterSource"
        :filter-method="filterHandlerSource"
      >
        <template slot-scope="scope">
          <el-link :href="scope.row.url" :underline="false" target="_blank">
            <el-tag effect="dark" icon="el-icon-paperclip">{{
              scope.row.source
            }}</el-tag>
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
export default {
  name: "newslist",
  data() {
    return {
      paginationOption: {
        total: 100,
        pageSize: 20,
        pageSizes: [20, 50, 100],
        currentPage: 1
      },
      tableData: [
        {
          date: "2019-12-12",
          title: "「译」一个案例搞懂 Vue.js 的作用域插槽",
          source: "思否",
          url: "https://segmentfault.com/a/1190000020643548"
        },
        {
          date: "2018-12-12",
          title: "vue中provide和inject使用",
          source: "思否",
          url: "https://segmentfault.com/a/1190000021216039"
        },
        {
          date: "2019-12-12",
          title: "基于ElementUI封装一个表格组件 tableList",
          source: "掘金",
          url: "https://juejin.im/post/6844904201378594824"
        },
        {
          date: "2020-12-12",
          title: "封装element-ui表格，我是这样做的",
          source: "知乎",
          url: "https://zhuanlan.zhihu.com/p/163864433"
        }
      ]
    };
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
      let axiosState = false;
      if (axiosState) {
        this.$message({
          message: "恭喜你，这是一条成功消息",
          type: "success"
        });
      } else {
        this.$message.error("错了哦，这是一条错误消息");
      }
    },
    filterHandlerDate(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
    filterHandlerSource(value, row) {
      return value === row.source;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  computed: {
    fliterDate: function() {
      let retArr = [];
      let mapDate = new Map();
      this.tableData.map(item => {
        if (mapDate.has(item.date)) {
          mapDate.set(item.date, false);
        } else {
          mapDate.set(item.date, true);
          retArr.push({ text: item.date, value: item.date });
        }
      });
      return retArr;
    },
    fliterSource: function() {
      let retArr = [];
      let mapsource = new Map();
      this.tableData.map(item => {
        if (mapsource.has(item.source)) {
          mapsource.set(item.source, false);
        } else {
          mapsource.set(item.source, true);
          retArr.push({ text: item.source, value: item.source });
        }
      });
      return retArr;
    }
  }
};
</script>

<style lang="less" scoped></style>
