<template>
  <section class="section">
    <div class="container">
      <div class="test">
        <div v-for="n of 24" :key="n" class="member-list">
          <member />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Member from '~/components/Member.vue'
export default {
  components: { Member }
}
</script>

<style lang="stylus" scoped>
.test
  display flex
  flex-direction row
  overflow-x scroll
  overflow-y hidden

.member-list
  margin auto -200px auto auto
</style>
