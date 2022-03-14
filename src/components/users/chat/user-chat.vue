<template>
  <div class="user-chat">
    <vMessage

    />
    <div class="input__field"></div>
  </div>
</template>

<script>
import vMessage from './v-message'

export default {
  name: 'user-chat',
  components: {
    vMessage
  },
  props: {
    messages: {
      type: Array,
      default: () => []
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}

</script>

<style lang="scss" scoped>

</style>