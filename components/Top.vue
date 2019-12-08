<template>
  <section class="hero is-fullheight-with-navbar"></section>
</template>

<script>
</script>

<style lang="stylus" scoped>
.hero
  @media screen and (max-width: 768px)
    background-image url('~assets/img/top/titleLogo.png'), url('~assets/img/top/jenny_mobile.png')
    background-position top 3vh right, top 10vh left
    background-size 65vw, 90%
    background-repeat no-repeat

  @media screen and (min-width: 769px)
    background-image url('~assets/img/top/titleLogo.png'), url('~assets/img/top/jenny.png'), url('~assets/img/top/afro.png')
    background-position top 5vh center, top 10vh left -30vw, top 10vh right -25vw
    background-size 80vmin, 90%, 65%
    background-repeat no-repeat
    animation fadein 1.5s linear 1.5s

@keyframes fadein
  from
    opacity 0

  to
    opacity 1
</style>
