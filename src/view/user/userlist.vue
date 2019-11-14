<template>
  <div>
    <div style="margin:10px 0; display:flex;">
      <el-button type="primary" @click="addUser" icon="el-icon-circle-plus-outline">添加用户</el-button>

      <el-input
        placeholder="请输入内容"
        v-model="keywords"
        class="input-with-select"
        style="width:500px;margin-left:100px;"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="serachData"></el-button>
      </el-input>
    </div>
    <el-dialog
      @close="clearUserInfo"
      :title="(form.id?'编辑用户':'添加用户')"
      @open="$refs.frm.clearValidate()"
      :visible.sync="dialogVisible"
      width="30%"
    >
      <el-form ref="frm" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="性别">
          <el-radio-group v-model="form.gender">
            <el-radio :label="1">男</el-radio>
            <el-radio :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="病例信息" prop="msd">
          <el-input type="textarea" v-model="form.msd"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="saveUsrInfo">保存</el-button>
        <!-- <el-button type="primary" @click="updatas"></el-button> -->
      </span>
    </el-dialog>

    <el-dialog
      :title="detaiUserName.name+'的详情信息'"
      :visible.sync="dialogVisibleUsername"
      width="30%"
    >
      <el-form label-width="80px">
        <el-form-item label="姓名">{{detaiUserName.name}}</el-form-item>

        <el-form-item label="性别">{{detaiUserName.gender}}</el-form-item>
        <el-form-item label="年龄">{{detaiUserName.age}}</el-form-item>
        <el-form-item label="病例信息">{{detaiUserName.msd}}</el-form-item>
      </el-form>
    </el-dialog>

    <el-table :data="userList" style="width: 100%" border v-loading="loading">
      <el-table-column label="姓名" width="180" align="center">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <!-- :formatter="fmtGender"  -->
      <el-table-column prop="gender" label="性别" width="180" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" align="center"></el-table-column>
      <el-table-column prop="msd" label="病例信息" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-search" type="success" @click="detail(scope.row)">详情</el-button>
          <el-button size="mini" icon="el-icon-edit" type="warning" @click="edituser(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            icon="el-icon-delete"
            type="danger"
            @click="deleUserlist(scope.row)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="1000" style="margin:10px 0;"></el-pagination>
  </div>
</template>

<script>
import { clearInterval } from "timers";
import {
  getuserList,
  deleUser,
  addUser,
  updateUser,
  selfindUser
} from "../../api/api";
import qs from "qs";
export default {
  data() {
    var checkAge = (rule, value, callback) => {
      if (!Number.isInteger(value)) {
        callback(new Error("请输入数字值"));
      } else {
        if (value < 1 || value > 110) {
          callback(new Error("年龄必须在1到110之间"));
        } else {
          callback();
        }
      }
    };
    return {
      userList: [], //列表数组
      list: [],
      loading: true, //加载动画
      dialogVisible: false, //模态框,
      dialogVisibleUsername: false,
      clearValidate: "",
      select: "",
      keywords: "",
      // firstName: "",
      // lastName: "",
      // fullName: ""
      detaiUserName: {},
      form: {
        id: "",
        name: "",
        gender: 1,
        age: 1,
        msd: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 2, max: 10, message: "长度在 2 到 10 个字符", trigger: "blur" }
        ],
        age: [
          { required: true, message: "请输入年龄", trigger: "blur" },
          { type: "number", message: "年龄必须是正整数", trigger: "blur" },
          { validator: checkAge, trigger: "blur" }
        ]
      }
    };
  },

  methods: {
    //年龄
    // fmtGender(row){
    //   // return ["女","男"][row.gender] || "未知";

    // },
    //清空form里面的值
    clearUserInfo() {
      this.form = {
        id: "",
        name: "",
        gender: "",
        age: "",
        msd: ""
      };
    },
    //搜索
    serachData() {
      this.loading = true;
      var serach = this.keywords;
      selfindUser(qs.stringify({ keyword: serach })).then(res => {
        if (res.data.status == 200) {
          this.userList = res.data.users;
          this.loading = false;
        } else {
          this.loading = true;
          this.$fail("请想好再输入了");
        }
      });
      //  let that = this;
      //  if(that.keywords === '' || typeof(that.keywords)=="undefined"){
      //       that.list = that.userList
      //  }else{
      //    that.list=[];
      //    that.userList.map(function(item){
      //        console.log(typeof item.id)
      //        if(item.name.serach(that.keywords)!=-1){
      //            that.list.push(item)
      //        }
      //    })
      //  }
    },
    //添加

    saveUsrInfo(index, row) {
      if (!this.form.name.trim() || !this.form.age || !this.form.msd.trim()) {
        return this.$warn("请输入完整的信息");
      }
      console.log(this.form, "++++");
      // console.log()
      this.dialogVisible = false;
      if (this.form.id == "") {
        addUser(qs.stringify(this.form)).then(res => {
          if (res.data.status === "200") {
            this.$success("添加成功");
            this.getuserInfo();
          } else {
            this.$fail("添加失败");
          }
        });
      } else {
        updateUser(qs.stringify(this.form)).then(res => {
          console.log(res);
          if (res.data.status === "200") {
            this.getuserInfo();
            alert("修改cg");
          } else {
            alert("失败");
          }
        });
      }
    },
    //删除
    deleUserlist(row) {
      this.$confirm(`确定要删除吗${row.name}?`, "系统提示", {
        type: "warning"
      }).then(() => {
        var id = row.id;
        deleUser(id).then(res => {
          if (res.data.status === "200") {
            this.loading = false;
            this.getuserInfo();
          } else {
            this.loading = true;
          }
        });
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    //详情
    detail(row) {
      this.detaiUserName = row;
      this.dialogVisibleUsername = true;
    },
    //编辑
    edituser(row) {
      this.form = row;
      // this.form.id = row.id;
      this.dialogVisible = true;
      // updateUser(this.form.id).then(res=>{
      //   console.log(res)
      // })
    },
    addUser() {
      this.dialogVisible = true;
    },
    getuserInfo() {
      this.loading = true;
      getuserList().then(res => {
        console.log(res)
        if (res.data.status === "200") {
          this.userList = res.data.users;
          this.loading = false;
        }

        // if (res.data.status != "200") {
        //     this.loading = true;
        // } else {
        //   // console.log(res.data.users);
        //   this.loading = false
        //   this.userList = res.data.users;

        // }
      });
    }
  },
  created() {
    this.getuserInfo();
  }
  // watch: {
  //   lastName: function(newval, oldval) {
  //     // console.log(newval,oldval);
  //     this.fullName = this.firstName + this.lastName;
  //   }
  // },
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>