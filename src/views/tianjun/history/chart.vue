<template>
  <div class="chart-container">
    <timeRange v-model="timeRange" @timeRangeChange="onTimeRangeChange" />
    <chart height="100%" width="100%" :time-range="timeRange" />
  </div>
</template>

<script>
import TimeRange from './components/TimeRange'
import Chart from './components/LineMarker'

export default {
  name: 'LineChart',
  components: { TimeRange, Chart },
  data() {
    return {
      timeRange: '24h'
    }
  },
  methods: {
    onTimeRangeChange(timeRange) {
      console.log('timeRange:', timeRange)
      this.timeRange = timeRange
    }
  }
}
</script>

<style scoped>
.chart-container{
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
}
</style>

