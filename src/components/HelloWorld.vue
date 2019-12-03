<template>
  <div class="hello">
    <div style="padding: 5px;">
    </div>
    <section class="index-sty">
      <vueHeader></vueHeader>
      <section class="index-content">
        <nav>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/team.png" alt="">
            <p>跟团游</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/box.png" alt="">
            <p>自由行</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/airplane.png" alt="">
            <p>机票</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/ticket.png" alt="">
            <p>汽车票</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/hotel.png" alt="">
            <p>酒店</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/train.png" alt="">
            <p>火车</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/ship.png" alt="">
            <p>游轮</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/play.png" alt="">
            <p>当地游</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/fee.png" alt="">
            <p>门票</p>
          </a>
          <a href="/goError">
            <img src="http://virtto.cn/virtto-mobile/image/passport.png" alt="">
            <p>签证</p>
          </a>
        </nav>
        <div class="news swiper-container">
          <yd-rollnotice autoplay="2000" >
            <yd-rollnotice-item v-for="(site,index) in advertisements" :key="index"><span style="color:#F00;"> 荐 {{site.content}}</span></yd-rollnotice-item>
          </yd-rollnotice>
        </div>
        <div class="content">
          <div class="recommend">
            <div class="recommend-profile">
              <h5>资源推荐</h5>
              <p>资源推荐旅游想去哪玩去哪玩</p>
              <span v-on:click="goindex(sign)">查看更多</span>
            </div>
            <div class="recommend-nav">
              <button class="bg1" v-on:click="indexcontent('video')">视频</button>
              <button class="bg2" v-on:click="indexcontent('album')">相册</button>
              <button class="bg3" v-on:click="indexcontent('pano')">全景</button>
            </div>
          </div>
          <div class="recommend-image">
            <div class="image-left" v-for="(o,index) in indexcontents" v-if='index<1' :key="index" v-on:click="load(o.id)">
              <div class="float-msg" >
                <p>{{o.title}}</p>
                <p>亮点340+</p>
              </div>
              <img src="http://virtto.cn/virtto-mobile/image/source1.jpg" alt="">
            </div>
            <div class="image-right">
              <div v-for="(o,index) in indexcontents" v-if='0<index&&index<5' :key="index" v-on:click="load(o.id)">
                <div class="float-msg" >
                  <p>{{o.title}}</p>
                  <p>亮点340+</p>
                </div>
                <img src="http://virtto.cn/virtto-mobile/image/source2.png" alt="">
              </div>
            </div>
          </div>
          <div class="hot">
            <div class="recommend-profile">
              <h5>热门地点</h5>
              <p>人气旅游胜地想去的都在这里</p>
            </div>
            <div class="hot-nav">
              <a href="">
                <p>23.8万人喜欢</p>
                <img src="http://virtto.cn/virtto-mobile/image/hot1.png" alt="">
                <p>上海</p>
              </a>
              <a href="">
                <p>2万人喜欢</p>
                <img src="http://virtto.cn/virtto-mobile/image/hot2.png" alt="">
                <p>北京</p>
              </a>
              <a href="">
                <p>2.8万人喜欢</p>
                <img src="http://virtto.cn/virtto-mobile/image/hot3.png" alt="">
                <p>大理</p>
              </a>
              <a href="">
                <p>23.8万人喜欢</p>
                <img src="http://virtto.cn/virtto-mobile/image/hot4.png" alt="">
                <p>成都</p>
              </a>
            </div>
            <div class="theEnd">
              我是尽头
            </div>
          </div>
        </div>
      </section>
      <vuefooter></vuefooter>
    </section>
    </div>

</template>

<script>
import vuefooter from '@/components/view/vueFooter'
import vueHeader from '@/components/view/vueHeader'
export default {
  name: 'HelloWorld',
  components: {
    vuefooter,
    vueHeader
  },
  data () {
    return {
      advertisements: '',
      indexcontents: '',
      sign: 'video'
    }
  },
  mounted: function () {
    this.loadadvertisements()
    this.loadVideo()
  },
  methods: {
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
    loadadvertisements () {
      var _this = this
      this.$axios.get('/advertisements').then(resp => {
        if (resp && resp.status === 200) {
          _this.advertisements = resp.data
        }
      })
      return _this.advertisements
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yd-rollnotice{
  margin-left: 5px;
}
</style>
