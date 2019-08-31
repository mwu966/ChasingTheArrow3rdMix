<template>
  <div>
    <FirstLoading />
    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="test-style">
              {{ name }}
            </h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FirstLoading from '~/components/first-loading.vue'
export default {
  components: {
    FirstLoading
  },
  data() {
    return {
      name: 'てすとてすと'
    }
  }
}
</script>

<style lang="stylus">
.test-style
  color #000
  font-size 50px
</style>
