<template>
  <section class="home">
    123
    <topHeader />
  </section>
</template>

<script>

import topHeader from '@/components/topHeader/topHeader'
export default {
  components: {
    topHeader
  }
}
// window.document.documentElement.setAttribute('data-theme', 'dark')
</script>

<style scoped lang="scss">
// @import '@/styles/mixins.scss'; // 全局样式
.home{
  @include Bg();
  @include FontColor1($error);
}
</style>
