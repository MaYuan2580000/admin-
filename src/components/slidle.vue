<template>
   <div style="position:relative;height:100%;">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#333"
      text-color="#fff"
      :collapse="iscollapse"
      router
    >
    <el-menu-item index="1" route="/">
     <i class="el-icon-setting"></i>
     <span>工作平台</span>
    </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1" route="/user">用户列表</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
    <div >
         <i class=" arrow" :class="!iscollapse?'el-icon-d-arrow-left':'el-icon-d-arrow-right'" @click="iscollapse=!iscollapse"></i>
    </div>
</div>
</template>

<script>
export default {
  watch:{
    iscollapse(newval,oldval){
      this.$emit("collapse",newval)
    }
  },
  data(){
    return{
      activeIndex:'1',
      iscollapse:false
    }
  }
};
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
.arrow{
  position: absolute;
  left: calc(50% - 15px);
  bottom: 100px;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 30px
}
</style>