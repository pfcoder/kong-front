<template>
  <!--<div>Hello</div>-->
  <div :id="id" :class="className" :style="{ height: height, width: width }" />
</template>

<script>
import echarts from "echarts";
import resize from "./mixins/resize";
import { getRackHistory } from "@/api/kong";

export default {
  mixins: [resize],
  props: {
    className: {
      type: String,
      default: "chart",
    },
    id: {
      type: String,
      default: "chart",
    },
    width: {
      type: String,
      default: "200px",
    },
    height: {
      type: String,
      default: "200px",
    },
    timeRange: {
      type: String,
      default: "2h",
    },
  },
  data() {
    return {
      chart: null,
      // time selection, default 2 hours
      startTime: null,
      endTime: null,
      chartData: null,
    };
  },
  watch: {
    timeRange(val, oldval) {
      console.log("timeRange change:", val, oldval);
      this.rebuildData();
    },
  },
  created() {
    console.log("chart created");
  },
  mounted() {
    console.log(this.$route.params.rack_id, this.timeRange);
    this.initChart();
    this.rebuildData();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    buildXY(period, steps, data) {
      const format2h = (d) => d.getHours() + ":" + d.getMinutes();
      const format24h = (d) =>
        `${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;
      const format7d = (d) =>
        `${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;

      let xData = [];
      // 1,2,3,4,in,out
      let yData = [[], [], [], [], [], []];
      const end = new Date();
      let start;
      let formatDate = format2h;
      switch (period) {
        case "2h":
          start = new Date(end.getTime() - 2 * 60 * 60 * 1000);
          formatDate = format2h;
          break;
        case "24h":
          start = new Date(end.getTime() - 24 * 60 * 60 * 1000);
          formatDate = format24h;
          break;
        case "7d":
          start = new Date(end.getTime() - 7 * 24 * 60 * 60 * 1000);
          formatDate = format7d;
          break;
      }

      let xStep = (end.getTime() - start.getTime()) / steps;

      for (var i = 0; i < steps; i++) {
        const d = new Date(start.getTime() + i * xStep);
        xData.push(formatDate(d));
        for (var j = 0; j < yData.length; j++) {
          let yStep = data[j].data.length / steps;
          let index = Math.min(Math.floor(i * yStep), data[j].data.length - 1);
          let item = data[j].data[index];
          yData[j].push(item);
        }
      }

      return {
        x: xData,
        y: yData,
      };
    },
    rebuildData() {
      this.chart && this.chart.showLoading();
      // parser time range
      const reg = /(\d+)(h|d)/i;
      const res = this.timeRange.match(reg);
      if (!res) {
        console.error("timeRange format error:", this.timeRange);
        return;
      }

      let period = res[1];
      if (res[2] === "d" || res[2] === "D") {
        // days
        period += "d";
      } else {
        // hours
        period += "h";
      }

      console.log("period:", period);
      // request data
      let params = this.$route.params.rack_id.split("$");
      getRackHistory(params[1], period, params[0]).then((res) => {
        console.log("res:", res);
        // 1,2,3,4,供水，回水
        this.chartData = this.buildXY(period, 20, res);
        console.log("chartData:", this.chartData);
        this.chart.hideLoading();
        this.updateChart();
      });
    },
    initChart() {
      this.chart = echarts.init(document.getElementById(this.id));
    },
    updateChart() {
      console.log("charData:", this.chartData);
      this.chart.setOption({
        backgroundColor: "white",
        title: {
          top: 20,
          text: `机柜：${this.$route.params.rack_id} 历史温度`,
          textStyle: {
            fontWeight: "normal",
            fontSize: 16,
            color: "grey",
          },
          left: "1%",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              color: "#57617B",
            },
          },
        },
        legend: {
          top: 20,
          icon: "rect",
          itemWidth: 14,
          itemHeight: 5,
          itemGap: 13,
          data: ["1#", "2#", "3#", "4#", "供水", "回水"],
          right: "4%",
          textStyle: {
            fontSize: 12,
            color: "grey",
          },
        },
        grid: {
          top: 100,
          left: "2%",
          right: "2%",
          bottom: "2%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            data: this.chartData.x,
          },
        ],
        yAxis: [
          {
            type: "value",
            name: "(C)",
            axisTick: {
              show: true,
            },
            axisLine: {
              lineStyle: {
                color: "#57617B",
              },
            },
            axisLabel: {
              margin: 10,
              textStyle: {
                fontSize: 14,
              },
            },
            splitLine: {
              lineStyle: {
                color: "grey",
                type: "dashed",
              },
            },
          },
        ],
        series: [
          {
            name: "1#",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: "#CC3399",
              },
            },
            itemStyle: {
              normal: {
                color: "#CC3399",
                borderColor: "#CC3399",
                borderWidth: 12,
              },
            },
            data: this.chartData.y[0],
          },
          {
            name: "2#",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: "#9933CC",
              },
            },

            itemStyle: {
              normal: {
                color: "#9933CC",
                borderColor: "#9933CC",
                borderWidth: 12,
              },
            },
            data: this.chartData.y[1],
          },
          {
            name: "3#",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: "#CC99CC",
              },
            },

            itemStyle: {
              normal: {
                color: "#CC99CC",
                borderColor: "#CC99CC",
                borderWidth: 12,
              },
            },
            data: this.chartData.y[2],
          },
          {
            name: "4#",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: "#FF99CC",
              },
            },

            itemStyle: {
              normal: {
                color: "#FF99CC",
                borderColor: "#FF99CC",
                borderWidth: 12,
              },
            },
            data: this.chartData.y[3],
          },
          {
            name: "供水",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: "#336699",
              },
            },

            itemStyle: {
              normal: {
                color: "#336699",
                borderColor: "#336699",
                borderWidth: 12,
              },
            },
            data: this.chartData.y[4],
          },
          {
            name: "回水",
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
              normal: {
                width: 2,
                color: "#0099FF",
              },
            },

            itemStyle: {
              normal: {
                color: "#0099FF",
                borderColor: "#0099FF",
                borderWidth: 12,
              },
            },
            data: this.chartData.y[5],
          },
        ],
      });
    },
  },
};
</script>
