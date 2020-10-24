<template>
  <div>
    <el-table :data="sipderAllType" stripe style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="website" label="网址" width="auto" align="left">
      </el-table-column>
      <el-table-column label="操作" fixed="right" align="center" width="auto">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            round
            @click="handleSpiderRun(scope.$index, scope.row)"
            >爬取</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="paginationOption.currentPage"
      :page-sizes="paginationOption.pageSizes"
      :page-size="paginationOption.pageSize"
      layout="total, prev, pager, next, jumper"
      :total="paginationOption.total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";

const { mapGetters, mapActions } = createNamespacedHelpers("module_net_list");

export default {
  name: "netlist",
  data() {
    return {
      paginationOption: {
        total: 0,
        pageSize: 1,
        currentPage: 1,
      },
    };
  },
  computed: {
    ...mapGetters(["sipderAllType"]),
  },
  methods: {
    ...mapActions(["actionSipderType"]),
    handleSpiderRun: async function(index, row) {
      let res = await this.axios.post("/lv1/spiderone", { class: row.website });
      console.info(res);
    },
    handleCurrentChange(val) {
      this.paginationOption.currentPage = val;
    },
  },
  async created() {
    let res = await this.axios.post("/lv1/typenews");
    if (res.status === 200) {
      const { typeContent } = res.data.data;
      this.paginationOption.total = typeContent.length;
      this.actionSipderType(typeContent);
    } else {
      this.$notify.info({
        title: res.statusText,
        message: res.data.msg,
      });
    }
  },
};
</script>

<style lang="less" scoped>
.el-icon--right {
  padding-right: 10px;
}
</style>
