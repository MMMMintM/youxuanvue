<!--zt-->
<template>
  <div>
    <div class="sideBar">
      <ul class="menu" v-for="(menu,idx) in navTree" :key="menu.id">
        <li>
          <router-link to="" @click="showMenu(idx,navTree)">
            <i class={{menu.icon}}></i>
            {{menu.name}}
          </router-link>
          <ul class="submenu" v-for="(childrenMenu) in childrenTree" :key="childrenMenu.id">
            <li v-if="childrenMenu.parentId == menu.id" v-show="menu.show">
              <router-link :to="childrenMenu.url">
                {{childrenMenu.name}}
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "SideBar",
  data(){
    return{
    }
  },
  computed:{
    navTree(){
      let tree = this.$store.getters.getNavTree;
      return tree
    },
    childrenTree(){
      let childrenTree = this.$store.getters.getChildrenTree;
      return childrenTree
    }
  },
  methods:{
    showMenu(idx,navTree) {
      for(let i = 0;i < navTree.length;i ++){
        if(i != idx)
          navTree[i].show = false
      }
      navTree[idx].show = true
    }
  }
}
</script>

<style scoped>
  .sideBar{
    width: 15%;
    height: 90%;
    background-color: aqua;
    float: left;
  }
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
    position: relative;
    border-style: solid;
    border-width: 1px 0 0;
    border-color: #E5E5E5;
  }
  .submenu>li{
    position: relative;
    padding-left: 40px;
  }
  a{
    /*display: block;*/
    width: 189px;
    height: 36px;
    color: #5d5d5d;
    text-decoration: none;
    line-height: 36px;
  }
  .fa{
    display: inline-block;
    margin-left: 14px;
    margin-right: 14px;
    font-family: 'FontAwesome';
    font-weight: normal;
    font-style: normal;
  }
  .submenu{
    /*display: none;*/
    position: relative;
  }
  .submenu:before {
    content: "";
    /*display: block;*/
    position: absolute;
    z-index: 1;
    left: 18px;
    top: 0;
    bottom: 0;
    border: 1px dotted;
    border-width: 0 0 0 1px;/* 上 右 下 左 */
  }
  .submenu > li:before {
    content: "";
    width: 10px;
    position: absolute;
    z-index: 1;
    left: 20px;
    top: 17px;
    border: 1px dotted;
    border-width: 1px 0 0;/* 上 右 下*/
  }
</style>