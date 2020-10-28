<template>
  <el-tabs v-model="activeState" @tab-click="handleClick">
    <el-tab-pane :label="`全部任务 (${allCount})`" name="all">
      <el-table :data="todos" style="width: 100%" :show-header="false">
        <el-table-column>
          <template slot-scope="scope">
            <el-link type="primary">{{ scope.row.info }}</el-link>
          </template>
        </el-table-column>
        <el-table-column width="180">
          <template slot-scope="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>
        <el-table-column width="120" align="center">
          <template slot-scope="scope">
            <div>
              <el-button
                v-show="!scope.row.state"
                size="mini"
                @click="markCompleteHandler(scope.$index, scope.row)"
                >标记已完成</el-button
              >
            </div>
            <div>
              <el-button
                v-show="scope.row.state"
                size="mini"
                @click="markCompleteHandler(scope.$index, scope.row)"
                >标记未完成</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:10px;">
        <el-button
          size="mini"
          type="primary"
          @click="allMarkCompleteHandler"
          round
          >全部标记完成</el-button
        >
      </div>
    </el-tab-pane>
    <el-tab-pane :label="`已完成 (${completedCount})`" name="completed">
      <el-table :data="completedTodos" style="width: 100%" :show-header="false">
        <el-table-column>
          <template slot-scope="scope">
            <el-link type="primary">{{ scope.row.info }}</el-link>
          </template>
        </el-table-column>
        <el-table-column width="180">
          <template slot-scope="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>
        <el-table-column width="120" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="delHandler(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <div style="margin-top:10px;">
        <el-button
          size="mini"
          type="danger"
          @click="delAllMarkCompleteHandler"
          round
          >删除全部已完成</el-button
        >
      </div>
    </el-tab-pane>
    <el-tab-pane :label="`未完成 (${undoneCount})`" name="undone"
      ><el-table :data="undoneTodos" style="width: 100%" :show-header="false">
        <el-table-column>
          <template slot-scope="scope">
            <el-link type="primary">{{ scope.row.info }}</el-link>
          </template>
        </el-table-column>
        <el-table-column width="180">
          <template slot-scope="scope">
            {{ scope.row.time }}
          </template>
        </el-table-column>
      </el-table></el-tab-pane
    >
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      activeState: "all",
    };
  },
  props: {
    todos: {
      type: Array,
    },
  },
  computed: {
    allCount: function() {
      return this.todos.length;
    },
    completedCount: function() {
      return this.todos.filter((item) => item.state).length;
    },
    undoneCount: function() {
      return this.todos.filter((item) => !item.state).length;
    },
    completedTodos: function() {
      return this.todos.filter((item) => item.state);
    },
    undoneTodos: function() {
      return this.todos.filter((item) => !item.state);
    },
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 标记完成
    markCompleteHandler(index) {
      this.$emit("callMark", index);
    },
    // 所有标记完成
    allMarkCompleteHandler() {
      this.$emit("allTask");
    },
    // 删除
    delHandler(index) {
      this.$emit("delTask", index);
    },
    // 删除全部已完成
    delAllMarkCompleteHandler() {
      this.$emit("delAll");
    },
  },
};
</script>

<style lang="less" scoped></style>
