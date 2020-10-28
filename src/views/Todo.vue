<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>Todo应用</span>
    </div>
    <ex-todo
      :todos="getTask"
      v-on:callMark="markHandler"
      v-on:delTask="delHandler"
      v-on:allTask="allHandler"
      v-on:delAll="delAllHandler"
    />
  </el-card>
</template>

<script>
import ExTodo from "../components/ExTodo";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("todo");
import {
  CHANGE_STATE,
  GET_TASK,
  DEL_TASK,
  ALL_COMPLETE,
  DEL_ALL_COMPLETE,
} from "../store/type";
export default {
  components: { ExTodo },
  methods: {
    ...mapMutations([CHANGE_STATE, DEL_TASK, ALL_COMPLETE, DEL_ALL_COMPLETE]),
    markHandler: function(index) {
      this[CHANGE_STATE](index);
    },
    delHandler: function(index) {
      this[DEL_TASK](index);
    },
    allHandler: function() {
      this[ALL_COMPLETE]();
    },
    delAllHandler: function() {
      this[DEL_ALL_COMPLETE]();
    },
  },
  computed: {
    ...mapGetters({
      getTask: GET_TASK,
    }),
  },
};
</script>

<style lang="less" scoped>
.todo {
}
</style>
