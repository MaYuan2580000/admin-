<template>
  <div :id="id" :style="{width,height}"></div>
</template>

<script>
import echarts from "echarts";
export default {
  props: ["width", "height", "id"],
  data() {
    return {};
  },
  mounted() {
    var myChart = echarts.init(document.getElementById(this.id));

    // 指定图表的配置项和数据
    // var data = genData(50);

    var option = {
      title: {
        text: "同名数量统计",
        subtext: "纯属虚构",
        x: "center"
      },
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      tooltip: {},
      legend: {
        type: "scroll",
        orient: "vertical",
        right: 10,
        top: 20,
        bottom: 20,
        data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"],

        selected: ["a"]
      },
      series: [
        {
          name: "姓名",
          type: "pie",
          radius: "55%",
          center: ["40%", "50%"],
          data: [
            { value: 335, name: "直接访问" },
            { value: 310, name: "邮件营销" },
            { value: 234, name: "联盟广告" },
            { value: 135, name: "视频广告" },
            { value: 1548, name: "搜索引擎" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)"
            }
          }
        }
      ]
    };

    myChart.setOption(option);
  }
};
</script>

<style>
</style>