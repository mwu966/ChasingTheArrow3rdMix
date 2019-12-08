<template>
  <div>
    <loading />
    <nav-menu />
    <top id="top" />
    <about id="about" :content="about" />
    <members id="members" :content="members" />
    <info id="info" :content="info" />
    <foot />
  </div>
</template>

<script>
import Loading from '~/components/Loading.vue'
import Top from '~/components/Top.vue'
import NavMenu from '~/components/NavMenu.vue'
import About from '~/components/About.vue'
import Members from '~/components/Members.vue'
import Info from '~/components/Info.vue'
import Foot from '~/components/Footer.vue'
import marked from 'marked'
export default {
  components: { Loading, Top, NavMenu, About, Members, Info, Foot },
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

.index
  margin-bottom 0.8rem
  border-bottom 3px solid #111

.index span
  position relative
  display inline-block
  padding 10px 10px 0 10px
  background #111
  color #eee
  font-size 1.7rem
  line-height 2rem

.index span:after
  position absolute
  top 0
  left 100%
  width 0
  height 0
  border-width 0 60px 2.8rem 0
  border-style solid
  border-color transparent
  border-bottom-color #111
  content ' '
</style>
