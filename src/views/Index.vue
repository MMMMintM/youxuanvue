<template>
  <div class="index">
    <Header></Header><!--zt-->
    <side-bar></side-bar><!--zt-->
    <main-content></main-content>
  </div>
</template>

<script>

import Header from "@/views/Header";
import SideBar from "@/views/SideBar";
import MainContent from "@/views/MainContent";

export default {
  name: "IndexPage",
  components:{
    Header,
    SideBar,
    MainContent
  }
}
</script>

<style scoped>
  .index{
    width: 100%;
    height: 800px;
  }
</style>