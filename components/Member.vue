<template>
  <div>
    <div class="members-bg" @click="openMemberImage('book-image-colloid')">
      <div class="members-bg-img"></div>
      <div class="members-bg-center"></div>
    </div>
    <div id="book-image-colloid" class="modal">
      <div
        class="modal-background"
        @click="closeMemberImage('book-image-colloid')"
      ></div>
      <div class="modal-content">
        <p class="image">
          <img src="~assets/img/Colloid-2nd.png" alt="" />
        </p>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeMemberImage('book-image-colloid')"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
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
  width 300px
  height 300px
  border solid 1px #000
  border-radius 50%
  transform perspective(550px) rotateX(65deg)

.members-bg-img
  width 100%
  height 100%
  border-radius 50%
  background-image url('~assets/img/Colloid-2nd.png')
  background-position center center
  background-repeat no-repeat
  animation rotate-anime 12s linear infinite

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
  -webkit-transform translate(-50%, -50%)

@keyframes rotate-anime
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>
