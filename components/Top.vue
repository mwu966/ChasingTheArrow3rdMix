<template>
  <section class="hero is-fullheight"></section>
</template>

<script>
</script>

<style lang="stylus" scoped>
.hero
  @media screen and (max-width: 768px)
    background-image url('~assets/img/top/titleLogo.png'), url('~assets/img/top/jenny_mobile.png'), url('~assets/img/top/afro_mobile.png')
    background-position top 45vh right, top 10vh left, top 10vh right
    background-size 60vw, 90%, 60%
    background-repeat no-repeat

  @media screen and (min-width: 769px)
    background-image url('~assets/img/top/titleLogo.png'), url('~assets/img/top/jenny.png'), url('~assets/img/top/afro.png')
    background-position bottom 5vh center, top 10vh left -30vw, top 10vh right -25vw
    background-size 80vmin, 90%, 65%
    background-repeat no-repeat
</style>
