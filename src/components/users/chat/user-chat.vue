<template>
  <div class='user-chat'>
    <v-message
        v-for="message in messages"
        :key="message.id"
        :message="message"
    />
    <div class="input__field">
      <input
          type="text"
          class="user-chat__textfield"
          v-model="textValue"
          @keypress.enter="sendMessage"
      >
      <i
          class="material-icons"
          @click="sendMessage"
      >
        send
      </i>
    </div>
  </div>
</template>

<script>
import vMessage from './v-message'

export default {
  name: "user-chat",
  components: {
    vMessage
  },
  props: {
    user: {
      type: Object,
      default: () => {
      }
    },
    messages: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      textValue: ''
    }
  },
  methods: {
    sendMessage() {
    }
  }
}
</script>

<style lang="scss">
</style>