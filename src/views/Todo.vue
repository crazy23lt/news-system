<template>
  <el-card class="box-card">
    <ex-todo />
  </el-card>
</template>

<script>
import ExTodo from "../components/ExTodo";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapMutations } = createNamespacedHelpers("todo");
import { CHANGE_STATE, GET_TASK } from "../store/type";
export default {
  components: { ExTodo },
  methods: {
    ...mapMutations([CHANGE_STATE]),
  },
  computed: { ...mapGetters([GET_TASK]) },
  created() {
    this.CHANGE_STATE(0);
    console.info(this.GET_TASK);
  },
};
</script>

<style lang="less" scoped>
.todo {
}
</style>
