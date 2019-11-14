<template>
  <div>
    <div style="margin:10px 0; display:flex;">
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="adduer">添加用户</el-button>
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
        <el-button slot="append" icon="el-icon-search" ></el-button>
      </el-input>
    </div>

    <el-dialog
      :title="(form.id?'编辑用户':'添加用户')"
      :visible.sync="dialogVisible"
      width="30%"
      @close="clearUserInfo"
    >
      <el-form ref="frm" :model="form" label-width="80px">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="手机号" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input type="text" v-model.number="form.age"></el-input>
        </el-form-item>
        <el-form-item label="病例信息" prop="addr">
          <el-input type="textarea" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="seravUser">保存</el-button>
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

        <el-form-item label="手机号">{{detaiUserName.phone}}</el-form-item>
        <el-form-item label="年龄">{{detaiUserName.age}}</el-form-item>
        <el-form-item label="病例信息">{{detaiUserName.addr}}</el-form-item>
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
      <el-table-column prop="phone" label="手机号" width="180" align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" align="center"></el-table-column>
      <el-table-column prop="addr" label="病例信息" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button size="mini" icon="el-icon-search" type="success" @click="detail(scope.row)">详情</el-button>
          <el-button size="mini" icon="el-icon-edit" type="warning" @click="edituser(scope.row)">编辑</el-button>
          <el-button
            size="mini"
            icon="el-icon-delete"
            type="danger"
            @click="deleUserlist(scope.row,scope.$index)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
   <!-- <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
			</el-pagination> -->
  </div>
</template>
<script>
// import mock from 'mockjs'
import { ajax } from "../utils/requestPromise";
import axios from "axios";
import qs from "qs";
import { getUserlistt, userlistdelete } from "../api/api";
export default {
  data() {
    return {
      userList: [],
      listQuery: {
        page: 1,
        limit: 10
      },
      loading: false, //加载动画

      form: {
        id: "",
        name: "",
        addr: "",
        age: "",
        birth: ""
      },
       total: 0,
      page: 1,
      detaiUserName: {},
      dialogVisible: false, //添加信息模态框
      dialogVisibleUsername: false, //详情信息模态框
      keywords:'',
      select: "",
    };
  },
  methods: {
    //请空input的值
    clearUserInfo() {
      this.form = {
        id: "",
        name: "",
        gender: "",
        age: "",
        msd: ""
      };
    },
        handleCurrentChange(val) {
      this.page = val
      this.list()
    },
    //搜索
    // serachData(){
    //   this.loading = true;
    //   var search = this.keywords;
    //   axios
    //       .post("/api/user/add", this.form)
    //       .then(res => {
    //         if (res.data.code === 200) {
    //           console.log(res);
    //           this.list();
    //           this.$success("添加成功");
    //         } else {
    //           this.$fail("添加失败");
    //         }
    //       })
    //       .catch(err => {
    //         console.log(err);
    //       });
    // },
    //详情
    detail(row) {
      this.detaiUserName = row;
      this.dialogVisibleUsername = true;
    },
    //添加
    seravUser(index, row) {
      console.log(this.form);
      this.dialogVisible = false;

      if (this.form.id == "") {
        axios
          .post("/api/user/add", this.form)
          .then(res => {
            if (res.data.code === 200) {
              console.log(res);
              this.list();
              this.$success("添加成功");
            } else {
              this.$fail("添加失败");
            }
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        axios
          .post("/api/user/edit", this.form)
          .then(res => {
            if (res.data.code === 200) {
              console.log(res);
              this.list();
              this.$success("编辑成功");
            } else {
              this.$fail("编辑失败");
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    adduer() {
      this.dialogVisible = true;
    },
    //删除
    deleUserlist(index, row) {
      // console.log(row,'----')
      // console.log(index,'+++')

      // console.log(this.id);
      this.$confirm("确定要删除吗", "系统提示", {
        type: "warning"
      }).then(() => {
      var id = row;
        axios
          .get("/api/user/remove?id=" + this.id)
          .then(res => {
            console.log(res);
            if (res.data.code === 200) {
              this.list();
              this.$success("删除成功");
            } else {
              this.$fail("删除失败");
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    //编辑
    edituser(row) {
      this.form = row;

      this.dialogVisible = true;
    },
    // getUsetLIst() {
    //   getUserlistt().then(res => {
    //     console.log(res.data);
    //     this.userList = res.data.data.list;
    //   });
    // }

    list() {
      this.loading = true;
      axios
        .get("/api/user/getUser", this.listQuery)
        .then(res => {
          // console.log(res);
          this.userList = res.data.data;
          this.loading = false;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    // ajax({
    //   method:'post',
    //   url: "https://xiaochengxu.laiketui.com/V2.4/index.php?store_id=1&store_type=2",
    //  data:qs.stringify({
    //       module:'app',
    // action:'index',
    // app:'index',
    // access_id:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Njg4MDc4NDksImV4cCI6MTU2ODgxNTA0OSwianRpIjoiYzIyMDI3ODEyMGViYWFjYmFmYmQ1ZTQ2ZTdjYWVhYWYifQ.1KctrEVhg07FhiSs0CuTx0xtN0hpZh5Uy8mX_cGALq0',
    // store_type:2
    //  })
    //   })
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
    this.list();
    // this.getUsetLIst()
    // axios.get('/api/banner/list')
    // .then(res=>{
    //     console.log(res)
    // }).catch(err=>{
    //     console.log(err)
    // })
    //  axios.post('/api/login',{
    //      username:'tom',
    //      password:'123456'
    //  })
    // .then(res=>{
    //     if(res.data.code === 200){
    //        console.log(res)
    //     }
    // }).catch(err=>{
    //     console.log(err)
    // })
    // var data={
    //     name:mock.Random.cname(),
    //     age:mock.Random.integer(18,120),
    //     webUrl:mock.Random.url('http'),
    //     address:mock.Random.county(true),
    //     phone:mock.Random.string('number',11)
    // };
    // console.log(data)
  }
};
</script>
<style lang="scss">
</style>