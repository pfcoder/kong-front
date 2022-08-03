<template>
  <div class="dashboard-editor-container">
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="24">
        <div class="chart-wrapper">
          <bar-chart :chart-data="kongTemperatureData" />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col
        :xs="{ span: 24 }"
        :sm="{ span: 24 }"
        :md="{ span: 24 }"
        :lg="{ span: 24 }"
        :xl="{ span: 24 }"
        style="padding-right: 8px; margin-bottom: 30px"
      >
        <kong-table :table-data="kongTemperatureData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarChart from "./components/BarChart";
import KongTable from "./components/KongTable";
import { getTemperatures } from "@/api/kong";
export default {
  name: "TianJun",
  components: {
    BarChart,
    KongTable,
  },
  data() {
    return {
      kongTemperatureData: {},
    };
  },
  mounted() {
    this.fetch_data();
    this.timer = setInterval(() => {
      this.fetch_data();
      console.log("timer reach");
    }, 30000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    fetch_data() {
      let url = window.location.href;
      let params = "";
      if (url.endsWith("21")) {
        params = "21";
      } else if (url.endsWith("22")) {
        params = "22";
      }
      getTemperatures(params).then((res) => {
        console.log("res xxxx:", res);
        this.kongTemperatureData = this.process_data(
          params == "21"
            ? res.data.allRackStatus
            : res.data.allRackStatus[0].registerStatusMap,
          params
        );
      });
    },

    process_data(data, params) {
      /* const NAME_REG = /(.*)(回|供|-)/
      const OIL_REG = /(.*)-(\d)#温度/
      const WATER_IN_REG = /回水温度$/
      const WATER_OUT_REG = /供水温度$/*/

      const process_2 = () => {
        const REG = /(.*)(-|供|回)((\d)#|水)温度$/;

        const map = {};
        for (var key in data) {
          const item = data[key];

          // parser key
          // TA08-1#温度
          // TA11回水温度
          // TA12供水温度
          const check = key.match(REG);
          if (!check) {
            console.error("unknown key:", key);
            continue;
          }
          const name = check[1];
          if (!map[name]) {
            map[name] = {
              oil: [0, 0, 0, 0], // 1, 2, 3, 4
              water: [0, 0], // in out
              time: item.createdAt,
            };
          }

          // check oil temp
          if (check[2] === "-") {
            map[name].oil[Number(check[4]) - 1] = item.value;
          } else if (check[2] === "供") {
            // water check
            map[name].water[0] = item.value;
          } else if (check[2] === "回") {
            map[name].water[1] = item.value;
          }
        }

        console.log("map:", map);
        return map;
      };

      const process_1 = () => {
        const map = {};
        for (var key in data) {
          const item = data[key];
          const name = item.name;
          const value = item.registerStatusMap;
          //console.log("value:", value, item);
          if (!map[name]) {
            map[name] = {
              oil: [
                value["油温1"].value,
                value["油温2"].value,
                value["油温3"].value,
                value["油温4"].value,
              ], // 1, 2, 3, 4
              water: [value["入水温度"].value, value["出水温度"].value], // in out
              time: item.registerStatusMap["入水温度"].createdAt,
            };
          }
        }

        console.log("map:", map);
        return map;
      };

      if (params == "" || params == "22") {
        return process_2();
      } else {
        return process_1();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
