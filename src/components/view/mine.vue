<template>
    <div>
      <div class="head">
        <div class="avatar">
          <img src="http://virtto.cn/virtto-mobile/image/7.jpeg" alt="">
        </div>
        <div class="profile">
          <p>畅想旅游的乐趣</p>
          <button v-on:click="logingo()">登录/注册</button>
        </div>
      </div>
      <div class="order">
        <div class="order-icon">
          <img src="http://virtto.cn/virtto-mobile/image/order.png" alt="">
          <p>我的订单</p>
        </div>
        <div class="order-more">
          <a href="#">查看全部订单 <span> > </span></a>
        </div>
      </div>
      <div class="mine-nav">
        <a href="#">
          <img src="http://virtto.cn/virtto-mobile/image/pay.png" alt="">
          <p>待付款</p>
        </a>
        <a href="#">
          <img src="http://virtto.cn/virtto-mobile/image/go.png" alt="">
          <p>待出行</p>
        </a>
        <a href="#">
          <img src="http://virtto.cn/virtto-mobile/image/evaluate.png" alt="">
          <p>待评价</p>
        </a>
        <a href="order.html">
          <img src="http://virtto.cn/virtto-mobile/image/money.png" alt="">
          <p>我的订单</p>
        </a>
      </div>
      <div class="signIn">
        <div class="signIn-icon">
          <img src="http://virtto.cn/virtto-mobile/image/signIn.png" alt="">
          <p>2019-08-23今日已签</p>
        </div>
        <div class="signIn-record">
          <a>我的签到记录 <span> > </span></a>
        </div>
      </div>
      <div class="myPhoto">
        <div class="photo-icon">
          <img src="http://virtto.cn/virtto-mobile/image/camera.png" alt="">
          <p>我的旅行</p>
        </div>
        <p>随时随地分享我的旅游游记</p>
        <button onclick="photo();">开启分享我的旅行</button>
      </div>
      <div class="moreFeatures">
        <div class="feature-icon">
          <img src="http://virtto.cn/virtto-mobile/image/feature.png" alt="">
          <p>更多功能</p>
        </div>
        <div class="feature-list">
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/wallet.png" alt="">
            <p>我的钱包</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/box.png" alt="">
            <p>旅行必备</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/coupon.png" alt="">
            <p>卡券包</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/fight.png" alt="">
            <p>超值拼团</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/member.png" alt="">
            <p>会员中心</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/chosen.png" alt="">
            <p>精挑细选</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/consultant.png" alt="">
            <p>旅行顾问</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/gift.png" alt="">
            <p>旅行特产</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/question.png" alt="">
            <p>帮助中心</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/safety.png" alt="">
            <p>账号安全</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/customer.png" alt="">
            <p>在线客服</p>
          </a>
          <a href="">
            <img src="http://virtto.cn/virtto-mobile/image/follow.png" alt="">
            <p>关于我们</p>
          </a>
        </div>
      </div>
      <vuefooter></vuefooter>
    </div>
</template>

<script>
import vuefooter from '@/components/view/vueFooter'
export default {
  name: 'mine',
  methods: {
    logingo () {
      this.$router.push('/login')
    }
  },
  components: {
    vuefooter
  }
}
</script>

<style scoped>

</style>
