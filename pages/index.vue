<template>
  <div class="container">
    <nav-menu />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h1 class="test-style">
              {{ name }}
              <nuxt-link to="/first-mix">1st</nuxt-link>
              <div v-html="mark" />
            </h1>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'
import marked from 'marked'
export default {
  components: { NavMenu },
  data() {
    return {
      name: 'てすとてすと',
      mark: ''
    }
  },
  async asyncData({ app }) {
    const response = await app.$axios.$get('content/test.md')
    return { mark: marked(response) }
  }
}
</script>

<style lang="stylus">
.test-style
  color #000
  font-size 50px
</style>
