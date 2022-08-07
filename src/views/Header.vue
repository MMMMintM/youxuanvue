<!--zt-->
<template>
  <div class="header">
    用户：
    {{userName}}
  </div>
</template>

<script>
export default {
  name: "HeaderPage",

  computed:{
    userName(){
      let userName = this.$store.getters.getUserName
      return userName
    }
  }
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 15%;
    background-color: antiquewhite;
  }
</style>