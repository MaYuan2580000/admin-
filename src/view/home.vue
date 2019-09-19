<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>每日统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <chartcolumn width="500px" height="300px" id="c1"></chartcolumn>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>股票统计</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <chartline width="500px" height="300px" id="c2"></chartline>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>饼图</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <chartpie width="500px" height="300px" id="c3"></chartpie>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { chartcolumn, chartline, chartpie } from "@/components";
export default {
  data() {
    return {};
  },
  components: {
    chartcolumn,
    chartline,
    chartpie
  }
};
</script>

<style>
</style>