<template>
  <section class="section">
    <div class="container">
      <h2 class="index">
        <span>Dancer List</span>
      </h2>
      <div
        class="members-container"
        v-touch:swipe.left="toLeft"
        v-touch:swipe.right="toRight"
      >
        <div class="arrow left" @click="toLeft()"></div>
        <transition-group
          class="member-container"
          tag="div"
          :name="dancerChangeDirection ? 'dancer-left' : 'dancer-right'"
        >
          <member
            class="member"
            v-for="(member, index) in content.members"
            v-show="index == activeIndex"
            :key="member.twitterId"
            :content="{ member }"
          />
        </transition-group>
        <div class="arrow right" @click="toRight()"></div>
      </div>
    </div>
  </section>
</template>

<script>
import Member from '~/components/Member.vue'
export default {
  components: { Member },
  props: ['content'],
  data: () => ({
    activeIndex: 0,
    dancerChangeDirection: true
  }),
  methods: {
    toLeft: function() {
      this.activeIndex == 0
        ? (this.activeIndex = this.content.members.length - 1)
        : this.activeIndex--
      this.dancerChangeDirection = true
    },
    toRight: function() {
      this.activeIndex == this.content.members.length - 1
        ? (this.activeIndex = 0)
        : this.activeIndex++
      this.dancerChangeDirection = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.members-container
  display flex
  justify-content center
  margin-bottom 10vh

.arrow
  max-width 15vh
  width 15vw
  background-position center center
  background-repeat no-repeat
  cursor pointer

  @media screen and (min-width: 2200px)
    width 15rem

.arrow:hover
  filter drop-shadow(3px 4px 4px rgba(0, 0, 0, 0.4))

.left
  margin-right 1vw
  background-image url('data:image/svg+xml;charset=utf8,%3C!--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200)%20--%3E%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%20256px%3B%20height%3A%20256px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%234B4B4B%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M454.792%2C198.809H226.106l96.511-91.848c22.89-21.766%2C23.802-57.976%2C2.014-80.877%20c-21.778-22.89-57.976-23.78-80.866-2.003L0%2C256.006L243.766%2C487.92c22.89%2C21.788%2C59.088%2C20.875%2C80.866-2.015%20c21.788-22.878%2C20.875-59.099-2.014-80.854l-96.511-91.848h228.687c31.604%2C0%2C57.208-25.594%2C57.208-57.198%20C512%2C224.403%2C486.396%2C198.809%2C454.792%2C198.809z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E')

.right
  margin-left 1vw
  background-image url('data:image/svg+xml;charset=utf8,%3C!--%20Generator%3A%20Adobe%20Illustrator%2018.1.1%2C%20SVG%20Export%20Plug-In%20.%20SVG%20Version%3A%206.00%20Build%200)%20--%3E%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%20256px%3B%20height%3A%20256px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%20.st0%7Bfill%3A%234B4B4B%3B%7D%3C%2Fstyle%3E%3Cg%3E%20%3Cpath%20class%3D%22st0%22%20d%3D%22M268.234%2C24.08c-22.883-21.777-59.085-20.883-80.861%2C2c-21.787%2C22.904-20.894%2C59.116%2C2.01%2C80.883l96.511%2C91.84%20H57.202C25.606%2C198.803%2C0%2C224.399%2C0%2C256.006c0%2C31.596%2C25.606%2C57.192%2C57.202%2C57.192h228.691l-96.511%2C91.85%20c-22.904%2C21.756-23.797%2C57.979-2.01%2C80.862c21.776%2C22.883%2C57.978%2C23.798%2C80.861%2C2.011L512%2C256.006L268.234%2C24.08z%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E')

.member-container
  max-width 65vh
  max-height 65vh
  width 60vw
  height 60vw

  @media screen and (min-width: 2200px)
    max-width calc(1300px - 30rem)
    max-height calc(1300px - 30rem)

.member
  max-width 65vh
  max-height 65vh
  width 60vw
  height 60vw

  @media screen and (min-width: 2200px)
    max-width calc(1300px - 30rem)
    max-height calc(1300px - 30rem)

.dancer-left-enter-active, .dancer-right-enter-active, .dancer-left-leave-active, .dancer-right-leave-active
  position absolute
  transition transform 0.5s

.dancer-left-enter
  position absolute
  transform translateX(100vw)

.dancer-left-leave-active
  position absolute
  transform translateX(-100vw)

.dancer-right-enter
  position absolute
  transform translateX(-100vw)

.dancer-right-leave-active
  position absolute
  transform translateX(100vw)
</style>
