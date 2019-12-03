<template>
  <div class="like-content">
    <vueheader></vueheader>
    <nav class="swiper-container">
      <div class="swiper-wrapper">
        <a href="#" class="swiper-slide s-active" onclick="select2(this);">猜你喜欢</a>
        <a href="#" class="swiper-slide" onclick="select2(this);">国内游</a>
        <a href="#" class="swiper-slide" onclick="select2(this);">出国游</a>
        <a href="#" class="swiper-slide" onclick="select2(this);">周边游</a>
        <a href="#" class="swiper-slide" onclick="select2(this);">情侣双人</a>
        <a href="#" class="swiper-slide" onclick="select2(this);">徒步西藏</a>
      </div>
    </nav>
    <div class="customized">
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour1.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour4.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour3.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour5.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour1.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour4.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour3.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour5.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour1.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour4.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour3.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
      <div class="commodity-list">
        <div class="commodity-img">
          <img src="http://virtto.cn/virtto-mobile/image/tour5.png" alt="">
        </div>
        <div class="commodity-intro">
          上海旅游3天2夜自由行，上海外滩、东方明珠、免费接送
        </div>
        <div class="commodity-price">
          <p>￥689</p>
          <p>优惠价</p>
        </div>
        <div class="commodity-hot">
          <p>3127人购买</p>
          <p>2223人评价</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueheader from '@/components/view/vueHeader'
export default {
  name: 'destination',
  components: {
    vueheader
  }
}
</script>

<style scoped>

</style>
