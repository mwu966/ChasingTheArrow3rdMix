<template>
  <div>
    <nav-menu />
    <about :content="about" />
    <info :content="info" />
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'
import About from '~/components/about.vue'
import Info from '~/components/info.vue'
import marked from 'marked'
export default {
  components: { NavMenu, About, Info },
  data() {
    return {
      about: '',
      info: ''
    }
  },
  async asyncData({ app }) {
    const about = await app.$axios.$get('content/about.md')
    const info = await app.$axios.$get('content/info.md')
    return { about: marked(about), info: marked(info) }
  }
}
</script>

<style lang="stylus"></style>
