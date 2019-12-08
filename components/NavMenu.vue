<template>
  <nav
    class="navbar is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navMenu"
        @click="isOpen = !isOpen"
        :class="{ 'is-active': isOpen }"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navMenu" class="navbar-menu" :class="{ 'is-active': isOpen }">
      <div class="navbar-start">
        <nuxt-link class="navbar-item" v-scroll-to="'#top'" to>
          Top
        </nuxt-link>
        <nuxt-link class="navbar-item" v-scroll-to="'#about'" to>
          About
        </nuxt-link>
        <nuxt-link class="navbar-item" v-scroll-to="'#members'" to>
          Dancer List
        </nuxt-link>
        <nuxt-link class="navbar-item" v-scroll-to="'#info'" to>
          Info
        </nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a
              href="https://twitter.com/share?ref_src=twsrc%5Etfw"
              class="twitter-share-button"
              data-show-count="false"
              >Tweet</a
            ><script
              async
              src="https://platform.twitter.com/widgets.js"
              charset="utf-8"
            ></script>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  })
}
</script>

<style lang="stylus" scoped>
.navbar, .navbar-menu
  border-bottom solid 1px rgba(0, 0, 0, 0.25)
  background-image linear-gradient(135deg, #a79756, #faf8c5, #a79756)

.navbar-item:focus, .navbar-item:hover
  background rgba(0, 0, 0, 0.1)
</style>
