<template>
  <div class='user' @click="toUserChat">
    <div class="user__avatar"></div>
    <div class="user__info">
      <p class="info__name">{{user_data.name}}</p>
      <p class="info__last-message">{{user_data.chat[user_data.chat.length-1].text}}</p>
    </div>
    <div class="user__time">{{user_data.chat[user_data.chat.length-1].time}}</div>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: "user-list-item",
  props: {
    user_data: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions([
      'SET_USER_TO_HEADER'
    ]),
    toUserChat() {
      this.SET_USER_TO_HEADER(this.user_data);
      this.$router.push({
        name: 'chat',
        params: { 'messages': this.user_data.chat, 'user': this.user_data },
      })
    }
  }
}
</script>

<style lang="scss">
</style>