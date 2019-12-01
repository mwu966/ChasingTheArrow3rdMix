<template>
  <section class="section">
    <div class="container">
      <div class="members-container">
        <div v-for="(member, index) in content.members" :key="index">
          <member
            :content="{ member, index, membersCount: content.members.length }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Member from '~/components/Member.vue'
export default {
  components: { Member },
  props: ['content']
}
</script>

<style lang="stylus" scoped>
.members-container
  display flex
  flex-direction row
  overflow-x scroll
  overflow-y hidden

.section
  padding 1rem 1.5rem
</style>
