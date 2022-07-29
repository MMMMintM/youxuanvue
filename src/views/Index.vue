<template>
  <div class="index">
    <Header></Header><!--zt-->
  </div>
</template>

<script>

import Header from "@/views/Header";
export default {
  name: "IndexPage",
  components:{
    Header
  }
}
</script>

<style scoped>
  .index{
    width: 100%;
    height: 800px;
  }
</style>