<template>
  <section class="topHeader">
    <button @click="change('dark')">
      换肤
    </button>
    <button @click="change('white')">
      换肤白
    </button>
  </section>
</template>

<script>
export default {
  methods: {
    change(type) {
      window.document.documentElement.setAttribute('data-theme', type)
    }
  }
}

</script>

<style scoped lang="scss">
.topHeader{
    background: #fff;
}
</style>
