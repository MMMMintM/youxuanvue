<!--zt-->
<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainContent"
}
</script>

<style scoped>
  .main{
    width: 85%;
    height: 85%;
    background-color: aliceblue;
    float: left;
  }
</style>