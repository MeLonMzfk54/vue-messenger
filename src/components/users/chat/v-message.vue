<template>
  <div class="message">
    <div class="message__content">
      <p>{{ message.text }}</p>
      <p class="content__time">{{ message.text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-message',
  props: {
    message: {
      type: Object,
      coerce: str => JSON.parse(str),
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