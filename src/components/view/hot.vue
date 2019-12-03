<template>
    <div>
      <vueHeader></vueHeader>
      <section class="hot-container trip-content">
        <div class="status">
          <img src="http://virtto.cn/virtto-mobile/image/tour2.png" alt="">
          <div class="status-msg">
            <p>当前游玩人数 <span>8330</span></p>
          </div>
          <div class="status-label">
            <p>美食美景</p>
            <p>江南风光</p>
          </div>
          <div class="status-weather">
            <p>28~30°</p>
          </div>
        </div>
        <div class="hot-nav">
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/hotel2.png" alt="">
            <p>酒店+景点</p>
          </a>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/strategy.png" alt="">
            <p>旅游攻略</p>
          </a>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/navigation.png" alt="">
            <p>地图导航</p>
          </a>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/delicacy.png" alt="">
            <p>美食推荐</p>
          </a>
          <a href="#">
            <img src="http://virtto.cn/virtto-mobile/image/answer.png" alt="">
            <p>问大家</p>
          </a>
        </div>
        <div class="guess-like">
          <div class="guess-like-content">
            <div class="guess-like-list" v-for="(v,index) in videos" :key="'v'+index" v-on:click="goVideo(v.id)">
              <div class="img-show">
                <img src="http://virtto.cn/virtto-mobile/image/my.jpg" alt="">
              </div>
              <div class="good-intro">
                {{v.title}}
              </div>
              <div class="time">
                3天两晚 含酒店+门票
              </div>
              <div class="like-price">
                <p>￥689</p>
                <p>优惠价</p>
                <img src="http://virtto.cn/virtto-mobile/image/car.png" alt="">
              </div>
            </div>
            <div class="guess-like-list" v-for="(p,index) in panos" :key="'p'+index" v-on:click="goPano(p.id)">
              <div class="img-show">
                <img src="http://virtto.cn/virtto-mobile/image/my.jpg" alt="">
              </div>
              <div class="good-intro">
                {{p.title}}
              </div>
              <div class="time">
                3天两晚 含酒店+门票
              </div>
              <div class="like-price">
                <p>￥689</p>
                <p>优惠价</p>
                <img src="http://virtto.cn/virtto-mobile/image/car.png" alt="">
              </div>
            </div>
            <div class="guess-like-list" v-for="(a,index) in albums" :key="'a'+index" v-on:click="goAlbum(a.id)">
              <div class="img-show">
                <img src="http://virtto.cn/virtto-mobile/image/my.jpg" alt="">
              </div>
              <div class="good-intro">
                {{a.title}}
              </div>
              <div class="time">
                3天两晚 含酒店+门票
              </div>
              <div class="like-price">
                <p>￥689</p>
                <p>优惠价</p>
                <img src="http://virtto.cn/virtto-mobile/image/car.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </section>
      <vuefooter></vuefooter>
    </div>
</template>

<script>
import vuefooter from '@/components/view/vueFooter'
import vueHeader from '@/components/view/vueHeader'
export default {
  name: 'hot',
  components: {
    vuefooter,
    vueHeader
  },
  data () {
    return {
      videos: '',
      panos: '',
      albums: '',
      contentlist: ''
    }
  },
  mounted: function () {
    this.loadVideo()
    this.loadAlbum()
    this.loadPano()
  },
  methods: {
    // 视频
    loadVideo () {
      var _this = this
      this.$axios.get('/videos').then(resp => {
        if (resp && resp.status === 200) {
          _this.videos = resp.data
        }
      })
      return _this.videos
    },
    goVideo (id) {
      this.$router.push({
        path: `/goVideo/${id}`
      })
    },
    // 全景
    loadPano () {
      var _this = this
      this.$axios.get('/panos').then(resp => {
        if (resp && resp.status === 200) {
          _this.panos = resp.data
        }
      })
      return _this.panos
    },
    goPano (id) {
      this.$router.push({
        path: `/goPano/${id}`
      })
    },
    // 相册
    loadAlbum () {
      var _this = this
      this.$axios.get('/albums').then(resp => {
        if (resp && resp.status === 200) {
          _this.albums = resp.data
        }
      })
      return _this.albums
    },
    goAlbum (id) {
      this.$router.push({
        path: `/goAlbum/${id}`
      })
    }
  }
}
</script>

<style scoped>
.hot-nav{
  background: #ffffff;
}
</style>
