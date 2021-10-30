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
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 24}" style="padding-right:8px;margin-bottom:30px;">
        <kong-table :table-data="kongTemperatureData" />
      </el-col>
    </el-row>

  </div>
</template>

<script>
import BarChart from './components/BarChart'
import KongTable from './components/KongTable'
import { getTemperatures } from '@/api/kong'

var tempTestData = {
  data: [
    ['T1', 35, 40, 41, 42, 30, 35], ['T2', 33, 32, 43, 35, 50, 30, 38], ['T3', 33, 32, 43, 35, 50, 30, 38],
    ['T4', 35, 40, 41, 42, 30, 35], ['T5', 33, 32, 43, 35, 50, 30, 38], ['T6', 33, 32, 43, 35, 50, 30, 38], ['T7', 33, 32, 43, 35, 50, 30, 38]
  ],
  time: '2021-10-12T12:02:34'
}

export default {
  name: 'DashboardAdmin',
  components: {
    BarChart,
    KongTable
  },
  data() {
    return {
      kongTemperatureData: tempTestData
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      getTemperatures().then(res => {
        console.log('res:', res)
      })

      console.log('timer reach')
      this.kongTemperatureData = {
        data: [
          ['T1', 80, 40, 41, 42, 30, 35], ['T2', 33, 32, 43, 35, 50, 30, 38], ['T3', 33, 32, 43, 35, 50, 30, 38],
          ['T4', 35, 40, 41, 42, 30, 35], ['T5', 33, 32, 43, 35, 50, 30, 38], ['T6', 33, 32, 43, 35, 50, 30, 38], ['T7', 33, 32, 43, 35, 50, 30, 38]
        ],
        time: new Date().toString()
      }
    }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
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

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
