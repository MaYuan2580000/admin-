<template>
  <div class="conentBox">
    <div style="color:#fff; padding-left:20px;">Logo</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#333"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">Simba</template>
        <el-menu-item index="2-1">修改密码</el-menu-item>
        <el-menu-item index="2-2" @click="$go('/login')">退出登录</el-menu-item>
      
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.conentBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #333;
}
</style>