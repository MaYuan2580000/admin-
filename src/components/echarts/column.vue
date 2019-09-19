<template>
  <div :id="id" :style="{width,height}"></div>
</template>

<script>
import echarts from 'echarts'
export default {
    props:['width','height',"id"],
  data(){
      return{}
  },
     mounted(){
      var myChart = echarts.init(document.getElementById(this.id));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["新增用户","新增评论","新增会员"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36]
            }]
        };
        myChart.setOption(option);
   }
}
</script>

<style>

</style>