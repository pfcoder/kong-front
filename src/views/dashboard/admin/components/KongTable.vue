<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="机柜代码">
      <template slot-scope="scope">
        {{ scope.row.kong_id }}
      </template>
    </el-table-column>
    <el-table-column label="油温1" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.oil1 | oilTempFilter">
          {{ scope.row.oil1 }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温2" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.oil2 | oilTempFilter">
          {{ scope.row.oil2 }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温3" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.oil3 | oilTempFilter">
          {{ scope.row.oil3 }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="油温4" align="center">
      <template slot-scope="scope">
        <el-tag :type="scope.row.oil4 | oilTempFilter">
          {{ scope.row.oil4 }}°C
        </el-tag>
      </template>
    </el-table-column>
    <el-table-column label="回水温度" align="center">
      <template slot-scope="scope">
        {{ scope.row.w_in }}°C
      </template>
    </el-table-column>
    <el-table-column label="出水温度" align="center">
      <template slot-scope="scope">
        {{ scope.row.w_out }}°C
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
      this.list = [{
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }, {
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }, {
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }, {
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }, {
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }, {
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }, {
        kong_id: 'TA08',
        oil1: '37',
        oil2: '40',
        oil3: '45',
        oil4: '55'
      }]
    }
  }
}
</script>
