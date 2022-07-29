<!--zt-->
<template>
  <div>
    <div class="sideBar">
      <ul class="menu">
        <li>
          <router-link to="" @click="showMenu(0)"><i class="fa fa-home"></i>首页管理</router-link>
          <ul class="submenu" v-show="openMenus[0].isShow">
            <li>
              <router-link to="">轮播图管理</router-link>
            </li>
            <li>
              <router-link to="">商品推荐</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" @click="showMenu(1)"><i class="fa fa-user"></i>用户管理</router-link>
          <ul class="submenu" v-show="openMenus[1].isShow">
            <li>
              <router-link to="">用户列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" @click="showMenu(2)"><i class="fa fa-user-o"></i>商品管理</router-link>
          <ul class="submenu" v-show="openMenus[2].isShow">
            <li>
              <router-link to="">商品列表</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" @click="showMenu(3)"><i class="fa fa-bus"></i>订单管理</router-link>
          <ul class="submenu" v-show="openMenus[3].isShow">
            <li>
              <router-link to="">历史订单</router-link>
            </li>
          </ul>
        </li>
        <li>
          <router-link to="" @click="showMenu(4)"><i class="fa fa-bus"></i>角色管理</router-link>
          <ul class="submenu" v-show="openMenus[4].isShow">
            <li>
              <router-link to="">角色列表</router-link>
            </li>
            <li>
              <router-link to="">权限列表</router-link>
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

  },
  methods:{
    showMenu(idx){
      for(var i = 0;i < this.openMenus.length;i ++)
      {
        if(i != idx)
          this.openMenus[i].isShow = false
      }
      this.openMenus[idx].isShow = !this.openMenus[idx].isShow
    }
  },
  created() {
    for(var i = 0;i < 5;i++){
      this.openMenus.unshift({isShow:false})
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
    /*display: block;*/
    width: 10px;
    position: absolute;
    z-index: 1;
    left: 20px;
    top: 17px;
    border: 1px dotted;
    border-width: 1px 0 0;/* 上 右 下*/
  }
</style>