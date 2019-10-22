<template>
  <section class="section">
    <div class="container">
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
