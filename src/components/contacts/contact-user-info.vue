<template>
  <div class="contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__phone">
        <span>{{ contact.phone }}</span>
      </div>
      <div class="info__tools">
        <button class="info__button start-call">Call</button>
        <button class="info__button start-chat">Start Chat</button>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

export default {
  name: 'contact-user-info',
  props: {},
  data() {
    return {
      contact: {}
    }
  },
  computed: {
    ...mapState([
        'contacts'
    ])
  },
  mounted() {
    this.contact = this.contacts.find((contact) => contact.id == this.$route.query.id)
  }
}
</script>

<style lang="scss" scoped>

</style>