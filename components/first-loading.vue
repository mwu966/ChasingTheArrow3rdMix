<template>
  <div class="loading" :class="{ 'is-finish': dataLoadFinish }">
    <trinity-rings-spinner
      :animation-duration="1500"
      :size="82"
      color="#e0e0e0"
    />
  </div>
</template>

<script>
import { TrinityRingsSpinner } from 'epic-spinners'
export default {
  components: {
    TrinityRingsSpinner
  },
  data() {
    return {
      dataLoadFinish: false
    }
  },
  mounted() {
    window.addEventListener('load', () => {
      this.dataLoadFinish = true
    })
  }
}
</script>

<style lang="stylus" scoped>
.loading
  position fixed
  z-index 3
  display flex
  justify-content center
  align-items center
  width 100vw
  height 100vh
  background-color #fff

  &.is-finish
    z-index -1
    opacity 0
    transition opacity 0.5s, z-index 0s 0.51s
</style>
