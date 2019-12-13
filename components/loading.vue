<template>
  <div v-show="loading" class="loading-page">
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
  data: () => ({
    loading: true
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>

<style lang="stylus" scoped>
.loading-page
  position fixed
  top 0
  z-index 40
  display flex
  justify-content center
  align-items center
  width 100vw
  height 100vh
  background-color #fff
</style>
