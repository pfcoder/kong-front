<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import moment from 'moment'
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

const animationDuration = 6000

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    chartData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData)
    },

    setOptions(chartData) {
      const barWidth = '10%'
      const names = []
      const oilTemp1 = []
      const oilTemp2 = []
      const oilTemp3 = []
      const oilTemp4 = []
      const waterInTemp = []
      const waterOutTemp = []
      const data = chartData.allRackStatus
      for (let i = 0; i < data.length; i++) {
        const item = data[i]
        names.push(item.name)
        try {
          oilTemp1.push(item.registerStatusMap['油温1'].value)
          oilTemp2.push(item.registerStatusMap['油温2'].value)
          oilTemp3.push(item.registerStatusMap['油温3'].value)
          oilTemp4.push(item.registerStatusMap['油温4'].value)
          waterInTemp.push(item.registerStatusMap['入水温度'].value)
          waterOutTemp.push(item.registerStatusMap['出水温度'].value)
        } catch (e) {
          console.log('error parse object')
        }
      }

      this.chart.setOption({
        title: {
          text: '机柜温度监控数据',
          subtext: moment(chartData.time).format('YYYY/MM/DD HH:mm:ss'),
          y: 'top'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          x: '35%',
          y: 'top',
          data: ['油温1', '油温2', '油温3', '油温4', '入水温', '出水温'],
          textStyle: {
            color: 'gray',
            fontSize: 12
          },
          itemWidth: 10,
          itemHeight: 10,
          padding: [0, 20, 10, 10]
        },
        grid: {
          top: '20%',
          left: '2%',
          right: '2%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: names,
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value',
          axisTick: {
            show: false
          },
          max: 80,
          min: 0
        }],
        series: [{
          name: '油温1',
          type: 'bar',
          barWidth,
          data: oilTemp1,
          animationDuration,
          itemStyle: {
            normal: {
              color: '#FFB533'
            }
          }
        }, {
          name: '油温2',
          type: 'bar',
          barWidth,
          data: oilTemp2,
          animationDuration,
          itemStyle: {
            normal: {
              color: '#FFB533'
            }
          }
        }, {
          name: '油温3',
          type: 'bar',
          barWidth,
          data: oilTemp3,
          animationDuration,
          itemStyle: {
            normal: {
              color: '#FFB533'
            }
          }
        }, {
          name: '油温4',
          type: 'bar',
          barWidth,
          data: oilTemp4,
          animationDuration,
          itemStyle: {
            normal: {
              color: '#FFB533'
            }
          }
        }, {
          name: '入水温',
          type: 'bar',
          barWidth,
          data: waterInTemp,
          animationDuration,
          itemStyle: {
            normal: {
              color: '#33D4FF'
            }
          }
        }, {
          name: '出水温',
          type: 'bar',
          barWidth,
          data: waterOutTemp,
          animationDuration,
          itemStyle: {
            normal: {
              color: '#33D4FF'
            }
          }
        }]
      })
    }
  }
}
</script>
