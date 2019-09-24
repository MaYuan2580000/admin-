<template>
  <div class="container">
    <el-card class="box-card conent" shadow="hover">
      <el-form ref="form" :model="form" :rules="rules" v-loading="loading">
        <el-form-item style="text-align: center">
          <div style="font-size:22px">后台管理系统</div>
        </el-form-item>
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" v-model.trim="form.username" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            prefix-icon="el-icon-unlock"
            v-model.trim="form.pwd"
            placeholder="请输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width:100%" @click="subMit()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { getlogin } from "../../api/api";
export default {
  data() {
    return {
      loading: false,
      form: {
        username: "",
        pwd: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        pwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 2, max: 16, message: "长度在 2 到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    subMit() {
      if (!this.form.username || !this.form.pwd) {
        return this.$warn("用户名或密码不能为空");
      }
      this.loading = true;
      getlogin(this.form.username,this.form.pwd).then(res => {
        this.loading = false;
        if (res.data.status!='200') {
          this.$fail("用户名或密码错误");
        } else {
          this.$success("登录成功！");
          sessionStorage.setItem("username", this.form.username);
          setTimeout(() => {
            this.$go("/");
          }, 300);
        }
      });
    }

  },

  created() {}
};
</script>
<style lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to bottom, #409eff, #fff);
  opacity: 0;
  animation: chage 0.5s 0.2s forwards;
  display: flex;
  justify-content: center;
  align-items: center;
  .conent {
    width: 500px;
    height: 300px;
    background: white;
  }
}
@keyframes chage {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>