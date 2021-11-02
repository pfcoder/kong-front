<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="机柜代码">
      <template slot-scope="scope">
        {{ scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column label="采集时间">
      <template slot-scope="scope">
        {{ scope.row.registerStatusMap['油温1'].createdAt | timeProcess }}
      </template>
    </el-table-column>
    <el-table-column label="油温1" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.registerStatusMap['油温1'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温1'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温2" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.registerStatusMap['油温2'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温2'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温3" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.registerStatusMap['油温3'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温3'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温4" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.registerStatusMap['油温4'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温4'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="入水温度" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.registerStatusMap['入水温度'].value | waterInTempFilter">
          {{ scope.row.registerStatusMap['入水温度'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="出水温度" align="center">
      <template slot-scope="scope">
        <el-tag :hit="true" :type="scope.row.registerStatusMap['出水温度'].value | waterOutTempFilter">
          {{ scope.row.registerStatusMap['出水温度'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="电流" align="center">
      <template slot-scope="scope">
        {{ scope.row.a }}A
      </template>
    </el-table-column>
    <el-table-column label="功率" align="center">
      <template slot-scope="scope">
        {{ scope.row.p }}KW
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import moment from 'moment'

export default {
  filters: {
    oilTempFilter(temp) {
      if (Number(temp) > 50) {
        return 'danger'
      } else if (Number(temp) === 0) {
        return 'warning'
      } else {
        return 'success'
      }
    },
    waterInTempFilter(temp) {
      if (Number(temp) > 35) {
        return 'danger'
      } else if (Number(temp) === 0) {
        return 'warning'
      } else {
        return 'success'
      }
    },
    waterOutTempFilter(temp) {
      if (Number(temp) > 45) {
        return 'danger'
      } else if (Number(temp) === 0) {
        return 'warning'
      } else {
        return 'success'
      }
    },
    timeProcess(time) {
      return moment(time).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  props: {
    tableData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      list: null
    }
  },
  watch: {
    tableData: {
      deep: true,
      handler(val) {
        console.log('table update:', val)
        this.setList(val)
      }
    }
  },
  created() {
    // this.fetchData()
  },
  methods: {
    setList(listData) {
      // TODO convert listData
      this.list = listData.allRackStatus
    }
  }
}
</script>
