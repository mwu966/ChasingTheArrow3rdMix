<template>
  <div>
    <div class="members-bg" @click="modalOpen">
      <div
        class="members-bg-img"
        :style="{
          backgroundImage: `url(${require(`~/assets/img/members/${content.member.imgName}`)})`
        }"
      ></div>
      <div class="members-bg-center"></div>
    </div>
    <div class="writer-name">{{ content.member.writerName }}</div>
    <div class="circle-name">{{ content.member.circleName }}</div>
    <div class="modal" :class="{ 'is-active': isOpen }">
      <div class="modal-background" @click="modalClose"></div>
      <div class="modal-content">
        <div
          class="modal-circle-name"
          v-show="content.member.writerName == 'Colloid'"
        >
          主催
        </div>
        <div class="modal-writer-name">
          {{ content.member.writerName }}
        </div>
        <div class="modal-circle-name">
          {{ content.member.circleName }}
        </div>
        <p class="image">
          <img
            :src="require(`~/assets/img/members/${content.member.imgName}`)"
            :alt="content.member.writerName"
          />
        </p>
        <div class="music">
          {{
            `${content.member.playStyle1}&nbsp;
            ${content.member.musicName1}&nbsp;
            ${content.member.kanjiLevel1}&nbsp;
            足&nbsp;
            ${content.member.difficultyLevel1}`
          }}
        </div>
        <div class="music" v-if="content.member.playStyle2 != ''">
          {{
            `${content.member.playStyle2}&nbsp;
              ${content.member.musicName2}&nbsp;
              ${content.member.kanjiLevel2}&nbsp;
              足&nbsp;
              ${content.member.difficultyLevel2}`
          }}
        </div>
        <div class="sns">
          <a :href="'https://twitter.com/' + content.member.twitterId">
            <img src="~assets/sns_icon/twitter.png" alt="Twitter" />
          </a>
          <a
            :href="
              'https://www.pixiv.net/member.php?id=' + content.member.pixivId
            "
            v-if="content.member.pixivId != ''"
          >
            <img src="~assets/sns_icon/pixiv.png" alt="Pixiv" />
          </a>
          <a :href="content.member.blogUrl" v-if="content.member.blogUrl != ''">
            <img src="~assets/sns_icon/hatena_blog.png" alt="はてなブログ" />
          </a>
          <a :href="content.member.webUrl" v-if="content.member.webUrl != ''">
            <img src="~assets/sns_icon/web.svg" alt="Webサイト" />
          </a>
        </div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="modalClose"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['content'],
  data: () => ({
    isOpen: false
  }),
  methods: {
    modalOpen() {
      document.getElementsByTagName('html')[0].classList.add('is-clipped')
      this.isOpen = true
    },
    modalClose() {
      document.getElementsByTagName('html')[0].classList.remove('is-clipped')
      this.isOpen = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.members-bg
  position relative
  width 100%
  height 100%
  border solid 1px #000
  border-radius 50%
  cursor pointer

.members-bg:hover
  box-shadow 0px 3px 3px rgba(0, 0, 0, 0.4)

.members-bg-img
  width 100%
  height 100%
  border-radius 50%
  background-position center center
  background-size cover
  background-repeat no-repeat
  animation rotate-anime 5s linear infinite

.members-bg-center
  position absolute
  top 50%
  left 50%
  align-items center
  width 10vmin
  height 10vmin
  border solid 2vmin #333
  border-radius 50%
  background-color #fff
  transform translate(-50%, -50%)

@keyframes rotate-anime
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)

.writer-name
  margin 0.5rem 0
  text-align center
  white-space nowrap
  font-size 1.8rem

.circle-name
  margin 0.5rem 0
  text-align center
  white-space nowrap
  font-size 1.2rem

.modal-writer-name
  margin-left 0.5rem
  color #fff
  font-size 2.5rem

.modal-circle-name
  margin-left 0.5rem
  color #fff
  font-size 1.3rem

.modal-content
  width auto

.image img
  max-height 60vh
  width auto

.music
  margin-left 0.5rem
  color #fff
  font-size 1.7rem

.sns
  display flex
  justify-content center

  a
    margin 1em

    img
      width 40px
      height 40px
</style>
