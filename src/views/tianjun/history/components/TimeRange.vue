<template>
  <div style="display:inline-block;">
    <label class="radio-label">时间范围: </label>
    <el-radio-group v-model="timeRange">
      <el-radio label="2H" border>
        2H
      </el-radio>
      <el-radio label="24H" border>
        24H
      </el-radio>
      <el-radio label="7D" border>
        7D
      </el-radio>
    </el-radio-group>
  </div>
</template>

<script>
export default {

  props: {
    value: {
      type: String,
      default: '2H'
    }
  },
  computed: {
    timeRange: {
      get() {
        return this.value
      },
      set(val) {
        console.log('val:', val)
        this.$emit('input', val)
        this.$emit('timeRangeChange', val)
      }
    }
  }
}
</script>
