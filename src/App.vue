<template>
  <div id="app">
    <myheader></myheader>
    <section style="display:flex; flex:1;">
      <div style="min-width:201px; background:#333;">
      <slidle ></slidle>
      </div>
      <article style="flex:1;padding:10px;">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:10px 0;" border>
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>用户管理</el-breadcrumb-item>
          <el-breadcrumb-item>用户列表</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view></router-view>
      </article>
    </section>
  </div>
</template>

<script>
import { myheader, slidle } from "./components";
export default {
  data() {
    return {
     
    };
  },
  components: {
    myheader,
    slidle
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100vh;
  flex-direction: column;
}
</style>
