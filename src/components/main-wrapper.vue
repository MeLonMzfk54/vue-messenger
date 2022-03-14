<template>
  <div class="main-wrapper">
    <Header></Header>
    <router-view></router-view>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import Header from "@/components/layouts/Header";
  import bottomNav from "@/components/layouts/bottom-nav";

  export default {
    name: 'main-wrapper',
    components: {
      Header,
      bottomNav
    },
    props: {},
    data() {
      return {}
    },
    computed: {}
  }
</script>


<style scoped lang="scss">

</style>