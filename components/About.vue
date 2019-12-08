<template>
  <section class="section">
    <div class="container">
      <h1 class="index">
        <span>About this book</span>
      </h1>
      <div class="content" v-html="content" />
    </div>
  </section>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="stylus" scoped></style>
