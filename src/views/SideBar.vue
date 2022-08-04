<!--zt-->
<template>
  <div>
    <div class="sideBar">
      <ul class="menu" v-for="(menu,idx) in navTree" :key="menu.id">
        <li>
          <router-link to="" @click="showMenu(idx)">
            <i class={{menu.icon}}></i>
            {{menu.name}}
          </router-link>
          <ul class="submenu" v-for="(childrenMenu) in childrenTree" :key="childrenMenu.id">
            <li v-if="childrenMenu.parentId == menu.id" v-show="true">
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
      openMenus:[]
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
    showMenu(idx){
      for(var i = 0;i < this.openMenus.length;i ++)
      {
        if(i != idx)
          this.openMenus[i].isShow = false
      }
      console.log(idx)
      this.openMenus[idx].isShow = !this.openMenus[idx].isShow
    }
  },
  mounted() {
    for(let i = 0;i < this.navTree.length;i++){
      this.openMenus.unshift({isShow:false})
      console.log(this.openMenus[i].isShow)
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