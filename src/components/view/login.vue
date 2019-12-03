<template>
  <div class="login-contain login-bg">
    <div class="login-header">
      <p>欢迎登录</p>
    </div>
    <div class="login-logo" align="center">
      <img src="http://virtto.cn/virtto-mobile/image/7.jpeg" alt="">
      <p>划过美好生活</p>
    </div>
    <div class="form-group">
      <div class="form-item">
        <label for="phone">
          <img src="http://virtto.cn/virtto-mobile/image/phone.png" alt="">
        </label>
        <input id="phone" type="text" placeholder="请输入手机号">
      </div>
      <div class="form-item">
        <label for="code">
          <img src="http://virtto.cn/virtto-mobile/image/code.png" alt="">
        </label>
        <input id="code" type="text" placeholder="请输入验证码">
        <button>发送验证码</button>
      </div>
    </div>
    <div class="button-group">
      <button class="login-btn">登录</button>
      <button v-on:click="register()" class="login-register">注册</button>
    </div>
    <div class="casual">
      <a href="/">随便逛逛</a>
    </div>
    <div class="order-login">
      <p>使用第三方账号登录</p>
      <ul>
        <li>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/QQ.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/WeChat.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/blog.png" alt="">
          </a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      该技术由VIRTTO提供
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  methods: {
    register () {
      this.$router.push('/register')
    }
  }
}
</script>

<style scoped>

</style>
