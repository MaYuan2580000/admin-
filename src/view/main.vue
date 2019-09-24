<template>
      <div id="app">
    <myheader></myheader>
    <section style="display:flex; flex:1;">
      <div style="background:#333;">
      <slidle @collapse="slidleCollapse"></slidle>
      </div>
      <article  :style="{width:'calc(100vw - '+leftW+'px)'}" style="padding:10px; box-sizing:border-box">
        <el-breadcrumb separator-class="el-icon-arrow-right" style="margin:15px 0;">
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
import { myheader, slidle } from "@/components";
export default {
  data() {
    return {
       leftW:201
    };
  },
  components: {
    myheader,
    slidle
  },
  methods:{
    slidleCollapse(val){
        this.leftW = val?65:201;
    }
  }
};
</script>