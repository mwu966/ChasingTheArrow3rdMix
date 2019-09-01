<template>
  <div v-if="loading" class="loading-page">
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
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.loading-page
  position fixed
  z-index 3
  display flex
  justify-content center
  align-items center
  width 100vw
  height 100vh
  background-color #fff
</style>
