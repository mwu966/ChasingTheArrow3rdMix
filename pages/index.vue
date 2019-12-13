<template>
  <div>
    <loading />
    <nav-menu />
    <top id="top" />
    <about
      id="about"
      :content="about"
      v-observe-visibility="visibilityAboutChanged"
      :class="{ active: isAboutVisible, disable: !isAboutVisible }"
    />
    <members
      id="members"
      :content="members"
      v-observe-visibility="visibilityMemberChanged"
      :class="{ active: isMemberVisible, disable: !isMemberVisible }"
    />
    <info
      id="info"
      :content="info"
      v-observe-visibility="visibilityInfoChanged"
      :class="{ active: isInfoVisible, disable: !isInfoVisible }"
    />
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
    members: '',
    isTopVisible: false,
    isAboutVisible: false,
    isMemberVisible: false,
    isInfoVisible: false
  }),
  methods: {
    visibilityAboutChanged(isVisible) {
      this.isAboutVisible = isVisible
    },
    visibilityMemberChanged(isVisible) {
      this.isMemberVisible = isVisible
    },
    visibilityInfoChanged(isVisible) {
      this.isInfoVisible = isVisible
    }
  },
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
  background-image url('~assets/img/top/goldenback.png')
  background-attachment fixed
  background-size cover
  background-repeat no-repeat

body
  font-family 'Gentium Book Basic', 'Sawarabi Gothic', sans-serif

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

.disable
  visibility hidden

.active
  visibility visible
  animation fadein 0.75s linear

@keyframes fadein
  from
    opacity 0
    transform translateY(60px)

  to
    opacity 1
    transform translateY(0)
</style>
