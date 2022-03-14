<template>
  <div class="contact-list">
    <contactUser
        v-for="contact in contacts"
        :key="contact.id"
        :contact_data="contact"
        @to-contact-info="toContactInfo(contact)"
    />
  </div>
</template>

<script>
import contactUser from './contact-user'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'contact-list',
  props: {},
  components: {
    contactUser
  },
  data() {
    return {}
  },
  computed: {
    ...mapState([
        'contacts'
    ])
  },
  methods: {
    ...mapActions([
        'FETCH_CONTACTS',
        'SET_USER_TO_HEADER'
    ]),
    toContactInfo(contact) {
      this.$router.push({
        name: 'contact',
        query: {id: contact.id}
      })
      this.SET_USER_TO_HEADER(contact)
    }
  },
  mounted() {
    this.FETCH_CONTACTS()
  }
}
</script>

<style lang="scss" scoped>

</style>