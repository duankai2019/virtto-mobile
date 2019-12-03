<template>
  <div class="register-contain bg-register">
    <div class="register-header">
      <a href="javascript:back();">  <span>注册</span> </a>
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
      <div class="form-item">
        <label for="password">
          <img src="http://virtto.cn/virtto-mobile/image/key.png" alt="">
        </label>
        <input id="password" type="password" placeholder="请填写密码">
      </div>
      <div class="form-item">
        <label for="respassword">
          <img src="http://virtto.cn/virtto-mobile/image/key.png" alt="">
        </label>
        <input id="respassword" type="password" placeholder="请确认密码">
      </div>
    </div>
    <div class="button-group">
      <button class="login-btn">注册</button>
    </div>
    <div class="authorization">
      <input type="checkbox">
      <span class="ml-5">注册使用即表示同意</span>
      <span class="protocol">用户协议及版权声明</span>
    </div>
    <div class="go-login">
      <a href="/login">已经有账号？去登录</a>
    </div>
    <div class="tourism">
      <img src="http://virtto.cn/virtto-mobile/image/tourism.png" alt="">
      <img src="http://virtto.cn/virtto-mobile/image/tourism2.png" alt="">
      <img src="http://virtto.cn/virtto-mobile/image/tourism3.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style scoped>
  .bg-register{
    height: 100%;
  }
</style>
