<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="vocab-line-chart">
      <vocab-chart :chart-data="chartData" :width="chartWidth" :height="chartHeight"></vocab-chart>
    </div>
    <div class="vocav-btn" @click="triggerClick()">点击</div>
  </div>
</template>

<script>
import VocabChart from './VocabChart'
export default {
  components:{
    VocabChart
  },
  data(){
      let chartData = {
        labels: ['11.06', '11.06', '11.06', '11.06', '11.06'],
        datasets: [
          {
            label: "词汇量曲线",
            backgroundColor: '#FFF9F0',
            data: [0, 139, 210, 430, 1239],
            pointBorderColor: "#FFDB9D",
            pointBorderWidth: 3,
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      }
      const width = 500;
      const height = width * 0.75;
      return{
        chartWidth: width,
        chartHeight: height,
        chartData: chartData
      }
    },
    ready(){
      this.getChartStyle();
    },
    watch:{
      'chartData': {
        handler (newData, oldData) {
          console.log('watch 1 ,', newData, oldData);
        }
      }
    },
    methods:{
      triggerClick(){
        console.log('click', this.chartData);
        // this.$set(this.chartData.datasets[0].label, "12.09")
        this.chartData.datasets[0].label = '223'
      },
      getChartStyle(){
        const chart = $(".vocab-line-chart");
        chart.width(this.chartWidth).height(this.chartHeight);
      }
    }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
.vocav-btn{
  width: 250px;
  height: 50px;
  border: 1px solid #F2A813;
  border-radius: 0.18rem;
  background-color: #FFEDD1;
  color: #D88D4B;
  font-size: 30px;
  text-align: center;
  margin: 10px auto 0;
  line-height: 50px;
}
</style>
