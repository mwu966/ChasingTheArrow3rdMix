<template>
  <div>
    <loading />
    <nav-menu />
    <about id="about" :content="about" />
    <members id="members" :content="members" />
    <info id="info" :content="info" />
    <foot />
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
import NavMenu from '~/components/NavMenu.vue'
import About from '~/components/About.vue'
import Members from '~/components/Members.vue'
import Info from '~/components/Info.vue'
import Foot from '~/components/Footer.vue'
import marked from 'marked'
export default {
  components: { Loading, NavMenu, About, Members, Info, Foot },
  data: () => ({
    about: '',
    info: '',
    members: ''
  }),
  async asyncData({ app }) {
    const about = await app.$axios.$get('content/about.md')
    const info = await app.$axios.$get('content/info.md')
    const members = await app.$axios.$get('content/members.json')
    return {
      about: marked(about),
      info: marked(info),
      members: members
    }
  }
}
</script>

<style lang="stylus">
html
  background-image linear-gradient(135deg, #a79756, #faf8c5, #a79756)

body
  font-family 'Gentium Book Basic', 'Kosugi', sans-serif
</style>
