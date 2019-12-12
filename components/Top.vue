<template>
  <section class="hero is-fullheight-with-navbar"></section>
</template>

<script>
</script>

<style lang="stylus" scoped>
.hero
  @media screen and (max-width: 768px)
    background-image url('~assets/img/top/titleLogo.png'), url('~assets/img/top/subtitle_mobile.svg'), url('~assets/img/top/jenny_mobile.png')
    background-position top 3vh right, bottom left, top 10vh left
    background-size 65vw, 80vw, 90%
    background-repeat no-repeat

  @media screen and (min-width: 769px)
    background-image url('~assets/img/top/titleLogo.png'), url('~assets/img/top/subtitle_desktop.svg'), linear-gradient(0, #EBCD28, #EBCD28), url('~assets/img/top/jenny.png'), url('~assets/img/top/afro.png')
    background-position top 5vh center, bottom, bottom 4vh center, top 10vh left -15vw, top 10vh right -10vw
    background-size 80vmin, 90vw, 100vw 10vh, 60%, 45%
    background-repeat no-repeat
    animation fadein 1.5s linear 1.5s

@keyframes fadein
  from
    opacity 0

  to
    opacity 1
</style>
