<template>
  <section class="section">
    <div class="container" v-html="content" />
  </section>
</template>

<script>
export default {
  props: ['content']
}
</script>

<style lang="stylus" scoped></style>
