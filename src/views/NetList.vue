<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="website" label="网址" width="200" align="left">
      </el-table-column>
      <el-table-column label="网站" width="auto" align="left">
        <template slot-scope="scope">
          <el-link type="primary" :href="scope.row.url"
            ><i class="el-icon-paperclip el-icon--right"></i
            >{{ scope.row.url }}</el-link
          >
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="200">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            round
            @click="handleEdit(scope.$index, scope.row)"
            >爬取</el-button
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
  name: "netlist",
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
          url: "https://juejin.im/post/6844904201378594824",
          website: "掘金"
        },
        {
          url: "https://www.cnblogs.com/sbzy/p/9661180.html",
          website: "cnblogs"
        },
        {
          url: "https://segmentfault.com/a/1190000020643548",
          website: "segmentfault"
        },
        {
          url: "https://element.eleme.cn/#/zh-CN/component/table",
          website: "elementUI"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      // 开启爬取逻辑 根据 不同 返回状态 展示不同 消息提示框
      const h = this.$createElement;
      let spiderState = false;
      if (spiderState) {
        // 爬取成功
        this.$message({
          type: "success",
          message: h("p", null, [
            h("span", null, "爬取数据条数:"),
            h("i", { style: "color: teal" }, 100)
          ])
        });
      } else {
        // 爬取失败
        this.$message({
          type: "error",
          message: h("p", null, [
            h("span", null, "爬取数据 "),
            h("i", { style: "color: teal" }, "失败")
          ])
        });
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }
  },
  components: {}
};
</script>

<style lang="less" scoped>
.el-icon--right {
  padding-right: 10px;
}
</style>
