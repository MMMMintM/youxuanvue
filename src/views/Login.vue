<template>
  <label htmlFor="username">用户名：</label><input type="text" id="username" v-model="loginForm.username">
  <label htmlFor="password">密码：</label><input type="text" id="password" v-model="loginForm.password">
  <button @click="login">登录</button>
</template>

<script>

export default {
  name: "LoginPage",
  data() {
    return {
      loginForm: {
        username: 'liwei',
        password: 'lw1234'
      }
    }
  },
  methods: {
    login() {
      // 1、拿到username和password
      // 2、使用axios发送登录请求给后端（SpringBoot）
      //this.$router.push("/index");
      this.$api.login.login("/login", this.loginForm)
          .then(res => {
            sessionStorage.setItem("token",res.token)
            console.log("登录后服务器返回的数据:",res.token)
            this.$api.menu.findNavTree("menu/findNavTree",{'userName':this.loginForm.username})
              .then(res => {
                console.log(res)
                this.$store.commit('setNavTree',res)
              })
            this.$api.menu.findChildren("menu/findChildrenTree",{'userName':this.loginForm.username})
              .then(res =>{
                console.log(res)
                this.$store.commit('setChildrenTree',res)
              })
            this.$router.push("/index");
          }).catch(err => {
        console.log(err);
        this.$router.push("/");//跳到登录页面
      })
    }
  }
}
</script>

<style scoped>

</style>