// 标签导航
<template>
  <div class="ex-tag">
    <div class="tags">
      <el-tag
        v-for="(item, index) in tags"
        @close="closeOneHandler(index)"
        :key="index"
        closable
        :effect="isActive(item.path) ? 'dark' : 'plain'"
        :class="isActive(item.path) ? 'active' : ''"
      >
        <router-link :to="item.path" class="tags-li-title">
          {{ item.title }}
        </router-link>
      </el-tag>
    </div>
    <el-dropdown class="tag-drop-box" @command="tagHandler">
      <el-button type="primary">
        标签选项<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="other">关闭其他</el-dropdown-item>
        <el-dropdown-item command="all">关闭所有</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
    };
  },
  methods: {
    isActive: function(path) {
      return this.$route.fullPath === path;
    },
    // 关闭单个标签
    closeOneHandler: function(index) {
      // tags 数组去除指定标签
      let delTag = this.tags.splice(index, 1)[0];
      // 删除最后一个tag 则 返回前一个tag
      const item = this.tags[index] ? this.tags[index] : this.tags[index - 1];
      console.info(item);
      // 删除最后一个才做路由跳转，或者都删除完了
      if (item)
        delTag.path === this.$route.fullPath && this.$router.push(item.path);
      else this.$router.push("/");
    },
    // 设置标签数组
    setTags: function(route) {
      const isExist = this.tags.some((item) => item.path === route.fullPath);
      if (!isExist) {
        if (this.tags.length >= 8) this.tags.shift();
        this.tags.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name,
        });
      }
    },
    // 关闭所有标签   关闭其他标签
    tagHandler: function(command) {
      if (command === "all") {
        this.tags = [];
        this.$router.push("/");
      } else {
        this.tags = this.tags.filter(
          (item) => item.path === this.$route.fullPath
        );
      }
    },
  },
  watch: {
    $route(newValue) {
      this.setTags(newValue);
    },
  },
};
</script>

<style lang="less" scoped>
.ex-tag {
  height: 30px;
  margin-bottom: 10px;
  margin-top: 7px;
  position: relative;
  display: flex;
  align-items: center;
  .tags {
    .el-tag {
      margin: 0 5px;
      cursor: pointer;
      -webkit-transition: all 0.3s ease-in;
      -moz-transition: all 0.3s ease-in;
      transition: all 0.3s ease-in;
      .tags-li-title {
        text-decoration: none;
        color: black;
      }
    }
    .active > a {
      color: white !important;
    }
  }
  .tag-drop-box {
    position: absolute;
    right: 0;
    top: 0;
    height: 30px;
    .el-button {
      height: 30px;
      padding: 0 10px;
      font-size: 12px;
    }
  }
}
.el-dropdown-item {
  height: 30px;
}
</style>
