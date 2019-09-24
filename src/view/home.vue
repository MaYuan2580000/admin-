<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card" style="height:250px">
          <div slot="header" class="clearfix">
            <span>快捷入口</span>
            <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
          </div>

          <el-row :gutter="40" class="carStyle">
            <el-col :span="8">
              <el-button type="primary">
                <i class="el-icon-circle-plus-outline"></i>
                添加用户
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="success">
                <i class="el-icon-user-solid"></i> 用户管理
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="warning">
                <i class="el-icon-tickets"></i> 帖子管理
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button type="danger">
                <i class="el-icon-circle-close"></i> 投诉管理
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" style="height:250px">
          <div slot="header" class="clearfix">
            <span>数据统计</span>
          </div>

          <el-row :gutter="40" class="zengJIa">
            <el-col :span="12" class="item">
              新增用户 /
              <span>150</span>人
            </el-col>
            <el-col :span="12" class="item">
              新增帖子 /
              <span>150</span>条
            </el-col>
            <el-col :span="12" class="item">
              新增充值 /
              <span>1500.0</span>元
            </el-col>
            <el-col :span="12" class="item">
              新增投诉 /
              <span>150</span>条
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card" style="height:250px">
          <div slot="header" class="clearfix">
            <span>快捷入口</span>
            <el-button style="float: right; padding: 3px 0" type="text">编辑</el-button>
          </div>

          <iframe
            allowtransparency="true"
            frameborder="0"
            width="385"
            height="96"
            scrolling="no"
            src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=1&t=0&v=0&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=385&h=96&align=center"
          ></iframe>
        </el-card>
      </el-col>
    </el-row>

    <div style="height:50px"></div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>上周统计</span>
          </div>
          <chartcolumn width="500px" height="300px" id="c1"></chartcolumn>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>本周访问量</span>
          </div>
          <chartline width="500px" height="300px" id="c2"></chartline>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>行业成分</span>
          </div>
          <chartpie width="500px" height="300px" id="c3"></chartpie>
        </el-card>
      </el-col>
    </el-row>
    <!-- <qrcode></qrcode> -->
  </div>
</template>

<script>
import { chartcolumn, chartline, chartpie, qrcode } from "@/components";
export default {
  data() {
    return {
      
    };
  },
  components: {
    chartcolumn,
    chartline,
    chartpie,
    qrcode
  }
};
</script>

<style>
.el-calendar-day {
  text-align: center;
  height: 30px !important;
  margin-top: -5px;
}
.carStyle button {
  margin: 15px 0;
}
.zengJIa .item {
  padding: 20px;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.zengJIa .item span {
  color: orangered;
  font-size: 30px;
  padding: 0 10px;
}
</style>