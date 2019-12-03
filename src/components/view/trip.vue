<template>
    <div>
      <vueHeader></vueHeader>
      <section class="trip-content index-content">
        <div class="content">
          <div class="recommend">
            <div class="recommend-nav">
              <button class="bg1" v-on:click="indexcontent('video')">视频</button>
              <button class="bg2" v-on:click="indexcontent('album')">相册</button>
              <button class="bg3" v-on:click="indexcontent('pano')">全景</button>
            </div>
          </div>
        </div>
        <div class="guess-like">
          <div class="guess-head">
            <a href="#" class="a-active">猜你喜欢</a>
            <a href="#">
              <p>综合</p>
              <img src="http://virtto.cn/virtto-mobile/image/down-more.png" alt="">
            </a>
            <a href="#">
              <p>最新</p>
              <img src="http://virtto.cn/virtto-mobile/image/down-more.png" alt="">
            </a>
            <a href="#">
              <p>最热</p>
              <img src="http://virtto.cn/virtto-mobile/image/down-more.png" alt="">
            </a>
          </div>
          <div class="guess-like-content">
            <div class="guess-like-list" v-for="(o,index) in indexcontents" :key="index" v-on:click="load(o.id)">
              <div class="img-show">
                <img src="http://virtto.cn/virtto-mobile/image/my.jpg" alt="">
              </div>
              <div class="good-intro">
                {{o.title}}
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
  name: 'trip',
  components: {
    vuefooter,
    vueHeader
  },
  data () {
    return {
      indexcontents: '',
      sign: 'video'
    }
  },
  mounted: function () {
    this.loadVideo()
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    load (id) {
      console.log(this.sign)
      if (this.sign === 'video') {
        this.goVideo(id)
      }
      if (this.sign === 'pano') {
        this.goPano(id)
      }
      if (this.sign === 'album') {
        this.goAlbum(id)
      }
    },
    goindex (signs) {
      this.$router.push({
        path: '/IndexList/' + signs
      })
    },
    indexcontent (str) {
      var _this = this
      _this.sign = str
      if (str === 'video') {
        this.loadVideo()
        return _this.sign
      }
      if (str === 'pano') {
        this.loadPano()
        return _this.sign
      }
      if (str === 'album') {
        this.loadAlbum()
        return _this.sign
      }
    },
    // 视频
    loadVideo () {
      var _this = this
      this.$axios.get('/videos').then(resp => {
        if (resp && resp.status === 200) {
          _this.indexcontents = resp.data
        }
      })
      return _this.indexcontents
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
          _this.indexcontents = resp.data
        }
      })
      return _this.indexcontents
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
          _this.indexcontents = resp.data
        }
      })
      return _this.indexcontents
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
  .index-content{
    background: #ffffff;
  }
</style>
