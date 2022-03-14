<template>
  <div class="header">
    <div
        v-if="!isCoreRoute"
        class="header__back"
        @click="goBack">
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div class="header__user-info" v-if="!isCoreRoute">
      <span>{{currentUserChat.name }}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

  export default {
    name: "Header",
    props: {},
    data() {
      return {

      }
    },
    computed: {
      ...mapState([
        'currentUserChat',
      ]),
      isCoreRoute() {
        return this.$route.path === '/'
      }
    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    }
  }
</script>