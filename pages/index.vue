<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h1 class="test-style">
            {{ name }}
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
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
