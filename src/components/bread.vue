<template>
  <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:15px 0;">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-if="menu1">{{menu1}}</el-breadcrumb-item>
    <el-breadcrumb-item>{{menu2}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  watch: {
    $route(val) {
      this.menu1 = val.meta.parentName;
      this.menu2 = val.meta.title;
    }
  },
  data() {
    return {
      menu1: "",
      menu2: ""
    };
  },
  created(){
      this.menu1 = this.$route.meta.parentName;
      this.menu2 = this.$route.meta.title
  }
};
</script>
<style lang="scss">
</style>