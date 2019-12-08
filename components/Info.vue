<template>
  <section class="section">
    <div class="container">
      <h2 class="index">
        <span>頒布情報</span>
      </h2>
      <div class="columns">
        <div class="column is-two-fifths">
          <img src="~assets/img/hyoushiC97.png" alt="" />
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

<style lang="stylus" scoped></style>
