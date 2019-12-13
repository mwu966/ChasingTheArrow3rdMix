<template>
  <section class="section">
    <div class="container">
      <h1 class="index">
        <span>Information</span>
      </h1>
      <div class="columns">
        <div class="column is-two-fifths">
          <img src="~assets/img/coverC97.png" alt="" />
        </div>
        <div class="column">
          <div class="content" v-html="content" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="stylus" scoped>
/deep/
  p
    font-size 1.1rem

  h4
    position relative
    display inline-block
    padding 0 2.5em
    text-align center

  h4:before, h4:after
    position absolute
    top 50%
    display inline-block
    width 15%
    height 1px
    background-color #363636
    content ''

  h4:before
    left 0

  h4:after
    right 0
</style>
