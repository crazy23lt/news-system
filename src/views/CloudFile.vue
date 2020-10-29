<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>系统云盘</span>
      <el-button type="primary" round style="float: right;" size="mini"
        >操作按钮</el-button
      >
    </div>
    <el-container>
      <el-aside>
        <!-- 树形目录结构 -->
        <el-tree
          :data="tree"
          :props="defaultProps"
          ref="tree"
          node-key="id"
          accordion
          @node-click="handleNodeClick"
        ></el-tree>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState } = createNamespacedHelpers("cloud");
export default {
  data() {
    return {
      defaultProps: {
        children: "children",
        label: "label",
        id: "id",
      },
    };
  },
  computed: {
    ...mapState(["dirs"]),
    tree: function() {
      const retTree = [];
      console.info(this.fn1(this.dirs));
      let root = this.dirs.filter((item) => item.class === 0);
      root.forEach((item) => {
        retTree.push({
          children: [],
          label: item.name,
          id: `${item.class}-${item.id}`,
        });
      });
      return retTree;
    },
  },
  methods: {
    handleNodeClick(event, node, tree) {
      console.info(event);
      console.info(node);
      console.info(tree);
    },
    renderContent() {},
    fn1: function(dirs, cls = 0, ret = [], max = 0) {
      dirs.forEach((item) => {
        if (cls === 0 && max < item.class) max = item.class;
        if (item.class === cls && item.up_id !== null) {
          ret.forEach((item_c) => {
            if (item_c.id === item.up_id) {
              item_c.children.push({
                children: [],
                label: item.name,
                id: `${item.class}-${item.id}`,
              });
            }
          });
        } else {
          ret.push({
            children: [],
            label: item.name,
            id: `${item.class}-${item.id}`,
          });
        }
      });
      console.info(cls);
      if (cls === max) {
        return ret;
      } else {
        return this.fn1(dirs, ++cls, ret, max);
      }
    },
  },
};
</script>

<style></style>
