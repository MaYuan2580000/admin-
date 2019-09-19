<template>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#333"
      text-color="#fff"
      router
    >
    <el-menu-item index="4" route="/">
     <i class="el-icon-setting"></i>
    工作平台</el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" route="/user">用户列表</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
   

    </el-menu>

</template>

<script>
export default {};
</script>

<style>
</style>