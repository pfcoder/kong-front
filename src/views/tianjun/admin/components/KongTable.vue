<template>
  <el-table
    :data="list"
    style="width: 100%; padding-top: 15px"
    @row-click="openHistory"
  >
    <el-table-column label="机柜代码">
      <template slot-scope="scope">
        <router-link :to="'/chart/' + scope.row.name">
          {{ scope.row.name }}
        </router-link>
      </template>
    </el-table-column>
    <el-table-column label="采集时间">
      <template slot-scope="scope">
        {{ scope.row.time | timeProcess }}
      </template>
    </el-table-column>
    <el-table-column label="油温1" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.oil[0] | oilTempFilter">
          {{ scope.row.oil[0] }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温2" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.oil[1] | oilTempFilter">
          {{ scope.row.oil[1] }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温3" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.oil[2] | oilTempFilter">
          {{ scope.row.oil[2] }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温4" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.oil[3] | oilTempFilter">
          {{ scope.row.oil[3] }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="入水温度" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.water[0] | waterInTempFilter">
          {{ scope.row.water[0] }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="出水温度" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.water[1] | waterOutTempFilter">
          {{ scope.row.water[1] }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="电流" align="center">
      <template slot-scope="scope"> {{ scope.row.a }}A </template>
    </el-table-column>
    <el-table-column label="功率" align="center">
      <template slot-scope="scope"> {{ scope.row.p }}KW </template>
    </el-table-column>
  </el-table>
</template>

<script>
import moment from "moment";

export default {
  filters: {
    oilTempFilter(temp) {
      if (Number(temp) > 50) {
        return "danger";
      } else if (Number(temp) <= 0) {
        return "warning";
      } else {
        return "success";
      }
    },
    waterInTempFilter(temp) {
      if (Number(temp) > 35) {
        return "danger";
      } else if (Number(temp) <= 0) {
        return "warning";
      } else {
        return "success";
      }
    },
    waterOutTempFilter(temp) {
      if (Number(temp) > 45) {
        return "danger";
      } else if (Number(temp) <= 0) {
        return "warning";
      } else {
        return "success";
      }
    },
    timeProcess(time) {
      return moment(time).format("HH:mm:ss");
    },
  },
  props: {
    tableData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      list: null,
    };
  },
  watch: {
    tableData: {
      deep: true,
      handler(val) {
        console.log("table update:", val);
        const list = [];
        for (const key in val) {
          const item = val[key];
          list.push({
            name: key,
            time: item.time,
            oil: item.oil,
            water: item.water,
          });
        }
        console.log("list:", list);
        this.setList(list);
      },
    },
  },
  created() {
    // this.fetchData()
  },
  methods: {
    setList(listData) {
      // TODO convert listData
      this.list = listData;
    },
    openHistory(row) {
      this.$router.push({ path: "/chart/" + row.name });
    },
  },
};
</script>
