<template>
  <div>
    <h2>{{resultItem}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        resultItem:{}
      }
    },
    mounted() {
      this.resultItem = this.$route.params.resultItem
    }
  }
</script>

<style scoped>

</style>
