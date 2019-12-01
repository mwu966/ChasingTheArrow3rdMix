<template>
  <div>
    <div
      class="members-bg"
      :class="{
        'members-right-margin': content.index + 1 == content.membersCount
      }"
      @click="openMemberImage('book-image-' + content.member.twitterId)"
    >
      <div class="members-bg-img"></div>
      <div class="members-bg-center"></div>
    </div>
    <div class="modal" :id="'book-image-' + content.member.twitterId">
      <div
        class="modal-background"
        @click="closeMemberImage('book-image-' + content.member.twitterId)"
      ></div>
      <div class="modal-content">
        <p class="image">
          <img src="~assets/img/Colloid-2nd.png" alt="" />
        </p>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeMemberImage('book-image-' + content.member.twitterId)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    openMemberImage(name) {
      document.getElementById(name).classList.add('is-active')
    },
    closeMemberImage(name) {
      document.getElementById(name).classList.remove('is-active')
    }
  }
}
</script>

<style lang="stylus" scoped>
.modal
  transform translate3d(0px, 0px, 200px)

.members-bg
  position relative
  margin auto 20px
  width 300px
  height 300px
  border solid 1px #000
  border-radius 50%
  transform perspective(550px) rotateX(50deg)

.members-right-margin
  margin-right 150px

.members-bg-img
  width 100%
  height 100%
  border-radius 50%
  background-image url('~assets/img/Colloid-2nd.png')
  background-position center center
  background-repeat no-repeat
  animation rotate-anime 30s linear infinite

.members-bg-center
  position absolute
  top 50%
  left 50%
  align-items center
  width 25%
  height 25%
  border solid 18px #333
  border-radius 50%
  background-color #fff
  transform translate(-50%, -50%)

@keyframes rotate-anime
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>
