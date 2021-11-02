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
export default {
  name: 'DashboardAdmin',
  components: {
    BarChart,
    KongTable
  },
  data() {
    return {
      kongTemperatureData: {
        allRackStatus: [],
        time: new Date().toString()
      }
    }
  },
  mounted() {
    this.fetch_data()
    this.timer = setInterval(() => {
      this.fetch_data()
      console.log('timer reach')
    }, 30000)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  },
  methods: {
    fetch_data() {
      getTemperatures().then(res => {
        console.log('res:', res)
        this.kongTemperatureData = {
          allRackStatus: res.data.allRackStatus,
          time: new Date().toString()
        }
      })
    }
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
