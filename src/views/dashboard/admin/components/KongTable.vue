<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="机柜代码">
      <template slot-scope="scope">
        {{ scope.row.name }}
      </template>
    </el-table-column>
    <el-table-column label="油温1" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.registerStatusMap['油温1'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温1'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温2" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.registerStatusMap['油温2'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温2'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温3" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.registerStatusMap['油温3'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温1'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温4" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.registerStatusMap['油温4'].value | oilTempFilter">
          {{ scope.row.registerStatusMap['油温4'].value }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="入水温度" align="center">
      <template slot-scope="scope">
        {{ scope.row.registerStatusMap['入水温度'].value }}°C
      </template>
    </el-table-column>
    <el-table-column label="出水温度" align="center">
      <template slot-scope="scope">
        {{ scope.row.registerStatusMap['出水温度'].value }}°C
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

export default {
  filters: {
    oilTempFilter(temp) {
      if (Number(temp) > 50) {
        return 'danger'
      } else {
        return 'success'
      }
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
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
