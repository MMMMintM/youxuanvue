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

      this.$api.login.login("/login", this.loginForm)
          .then(res => {
            // vuex（状态管理）
            sessionStorage.setItem("token", res.token);
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