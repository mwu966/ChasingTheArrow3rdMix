<template>
  <div>
    <span>{{ content.member.writerName }}</span>
    <span>{{ content.member.circleName }}</span>
    <div
      class="members-bg"
      :class="{
        'members-right-margin': content.index + 1 == content.membersCount
      }"
      @click="isOpen = true"
    >
      <div class="members-bg-img"></div>
      <div class="members-bg-center"></div>
    </div>
    <div class="modal" :class="{ 'is-active': isOpen }">
      <div class="modal-background" @click="isOpen = false"></div>
      <div class="modal-content">
        <p class="image">
          <img src="~assets/img/Colloid-2nd.png" alt="" />
        </p>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="isOpen = false"
      ></button>
    </div>
    <span>{{
      content.member.playStyle1 +
        '&nbsp;' +
        content.member.musicName1 +
        '&nbsp;' +
        content.member.kanjiLevel1 +
        '&nbsp;' +
        content.member.difficultyLevel1
    }}</span>
    <span>{{
      content.member.playStyle2 +
        '&nbsp;' +
        content.member.musicName2 +
        '&nbsp;' +
        content.member.kanjiLevel2 +
        '&nbsp;' +
        content.member.difficultyLevel2
    }}</span>
    <a :href="'https://twitter.com/' + content.member.twitterId">
      <img src="~assets/sns_icon/twitter.png" alt="Twitter" />
    </a>
    <a
      :href="'https://www.pixiv.net/member.php?id=' + content.member.pixivId"
      v-if="content.member.pixivId != ''"
    >
      <img src="~assets/sns_icon/pixiv.png" alt="Pixiv" />
    </a>
    <a :href="content.member.blogUrl" v-if="content.member.blogUrl != ''">
      <img src="~assets/sns_icon/hatena_blog.png" alt="はてなブログ" />
    </a>
    <a :href="content.member.webUrl" v-if="content.member.webUrl != ''">
      Web
    </a>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data: () => ({
    isOpen: false
  })
}
</script>

<style lang="stylus" scoped>
.modal
  transform translate3d(0px, 0px, 200px)

.members-bg
  position relative
  margin auto 3vw
  max-width 60vh
  max-height 60vh
  width 70vw
  height 70vw
  border solid 1px #000
  border-radius 50%
  transform perspective(550px) rotateX(50deg)

.members-right-margin
  margin-right 30vw

.members-bg-img
  width 100%
  height 100%
  border-radius 50%
  background-image url('~assets/img/Colloid-2nd.png')
  background-position center center
  background-size 350%
  background-repeat no-repeat
  animation rotate-anime 30s linear infinite

.members-bg-center
  position absolute
  top 50%
  left 50%
  align-items center
  width 25%
  height 25%
  border solid 3vh #333
  border-radius 50%
  background-color #fff
  transform translate(-50%, -50%)

@keyframes rotate-anime
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>
