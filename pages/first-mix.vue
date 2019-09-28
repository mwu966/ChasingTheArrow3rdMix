<template>
  <div class="container">
    <nav-menu />
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            aaa
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import NavMenu from '~/components/NavMenu.vue'
export default {
  components: { NavMenu },
  asyncData() {
    return new Promise(resolve => {
      setTimeout(function() {
        resolve({})
      }, 1000)
    })
  }
}
</script>

<style lang="stylus"></style>
