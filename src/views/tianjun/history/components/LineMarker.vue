<template>
  <!--<div>Hello</div>-->
  <div :id="id" :class="className" :style="{height:height,width:width}" />

</template>

<script>
import echarts from 'echarts'
import resize from './mixins/resize'
import { getRackHistory } from '@/api/kong'

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '200px'
    },
    timeRange: {
      type: String,
      default: '2h'
    }
  },
  data() {
    return {
      chart: null,
      // time selection, default 2 hours
      startTime: null,
      endTime: null,
      chartData: {

      }
    }
  },
  watch: {
    timeRange(val, oldval) {
      console.log('timeRange change:', val, oldval)
    }
  },
  created() {
    console.log('chart created')
  },
  mounted() {
    console.log(this.$route.params.rack_id, this.timeRange)
    this.rebuildData()
    this.initChart()
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    buildXAxis(period, steps) {
      const format2h = (d) => d.getHours() + ':' + d.getMinutes()
      const format24h = (d) => d.getDay() + ' ' + d.getHours() + ':' + d.getMinutes()
      const format7d = (d) => `${d.getMonth() + 1}-${d.getDay()}`

      const xAxis = []
      const end = new Date()
      let start
      let formatDate = format2h
      switch (period) {
        case '2h':
          start = new Date(end.getTime() - 2 * 60 * 60 * 1000)
          formatDate = format2h
          break
        case '24h':
          start = new Date(end.getTime() - 24 * 60 * 60 * 1000)
          formatDate = format24h
          break
        case '7d':
          start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000)
          formatDate = format7d
          break
      }

      const step = (end.getTime() - start.getTime()) / steps

      for (var i = 0; i < steps; i++) {
        const d = new Date(start.getTime() + i * step)
        xAxis.push(formatDate(d))
      }

      return xAxis
    },
    rebuildData() {
      // parser time range
      const reg = /(\d+)(h|d)/i
      const res = this.timeRange.match(reg)
      if (!res) {
        console.error('timeRange format error:', this.timeRange)
        return
      }

      let period = res[1]
      if (res[2] === 'd' || res[2] === 'D') {
        // days
        period += 'd'
      } else {
        // hours
        period += 'h'
      }

      console.log('period:', period)
      // request data
      getRackHistory(this.$route.params.rack_id, period).then(res => {
        console.log('res:', res)
      })
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id))

      this.chart.setOption({
        backgroundColor: 'white',
        title: {
          top: 20,
          text: '机柜温度历史数据',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 16,
            color: 'grey'
          },
          left: '1%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#57617B'
            }
          }
        },
        legend: {
          top: 20,
          icon: 'rect',
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ['CMCC', 'CTCC', 'CUCC'],
          right: '4%',
          textStyle: {
            fontSize: 12,
            color: '#F1F1F3'
          }
        },
        grid: {
          top: 100,
          left: '2%',
          right: '2%',
          bottom: '2%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
        }],
        yAxis: [{
          type: 'value',
          name: '(%)',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#57617B'
            }
          },
          axisLabel: {
            margin: 10,
            textStyle: {
              fontSize: 14
            }
          },
          splitLine: {
            lineStyle: {
              color: '#57617B'
            }
          }
        }],
        series: [{
          name: 'CMCC',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(137, 189, 27, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(137, 189, 27, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(137,189,27)',
              borderColor: 'rgba(137,189,2,0.27)',
              borderWidth: 12

            }
          },
          data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
        }, {
          name: 'CTCC',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 136, 212, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(0, 136, 212, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(0,136,212)',
              borderColor: 'rgba(0,136,212,0.2)',
              borderWidth: 12

            }
          },
          data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
        }, {
          name: 'CUCC',
          type: 'line',
          smooth: true,
          symbol: 'circle',
          symbolSize: 5,
          showSymbol: false,
          lineStyle: {
            normal: {
              width: 1
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(219, 50, 51, 0.3)'
              }, {
                offset: 0.8,
                color: 'rgba(219, 50, 51, 0)'
              }], false),
              shadowColor: 'rgba(0, 0, 0, 0.1)',
              shadowBlur: 10
            }
          },
          itemStyle: {
            normal: {
              color: 'rgb(219,50,51)',
              borderColor: 'rgba(219,50,51,0.2)',
              borderWidth: 12
            }
          },
          data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
        }]
      })
    }
  }
}
</script>
