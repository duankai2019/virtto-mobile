<template>
<div>
  <div id="first" class="detail-header">
    <a v-on:click="back()" >
      <img src="http://virtto.cn/virtto-mobile/image/back2.png" alt="">
    </a>
    <h5>{{title}}</h5>
  </div>
  <div id="last" class="detail-header headShow" style="display: none">
    <a v-on:click="back()">
      <img src="http://virtto.cn/virtto-mobile/image/back.png" alt="">
    </a>
    <h5>{{title}}</h5>
  </div>
  <div class="detail-bg">
    <img src="http://virtto.cn/virtto-mobile/image/source5.png" alt="">
  </div>
  <div class="detail-message">
<!--    <div class="message-head">-->
<!--      <h5>【上海送签】</h5>-->
<!--      <p>日本签证个人旅游</p>-->
<!--      <p class="message-font ml-mt" style="font-size: 3vw;">超值优惠</p>-->
<!--      <img src="http://virtto.cn/virtto-mobile/image/call.png" alt="">-->
<!--    </div>-->
<!--    <div class="message-hot">-->
<!--      <div class="hot-star">-->
<!--        <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">-->
<!--        <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">-->
<!--        <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">-->
<!--        <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">-->
<!--        <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">-->
<!--        <p class="message-font" href="#">4.8分</p>-->
<!--        <p class="message-font" href="#">已售4069</p>-->
<!--        <p class="message-font" href="#">2484评价</p>-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="message-label">-->
<!--      <p class="message-font">出签率99.9%</p>-->
<!--      <p class="message-font">进度透明</p>-->
<!--      <p class="message-font">拒签全退</p>-->
<!--      <p class="message-font">免交担保金</p>-->
<!--      <p class="message-font">免费拍照</p>-->
<!--    </div>-->
<!--    <div class="message-other">-->
<!--      <div class="speed">-->
<!--        <h5>签证完成时间5-12天【可加急】</h5>-->
<!--        <p class="message-font">承诺规定时间内返回签证结果</p>-->
<!--      </div>-->
<!--      <div class="price">-->
<!--        ￥90-1200-->
<!--      </div>-->
<!--    </div>-->
  </div>
  <div class="detail-contain">
    <div class="description">
<!--      <div class="production">-->
<!--        <h5>产品说明</h5>-->
<!--        <a href="#"> > </a>-->
<!--      </div>-->
      <div class="pro-nav">
        <div class="pro-list">
          <p>单次</p>
          <p class="message-font">入境次数</p>
        </div>
        <div class="pro-list">
          <p>15天</p>
          <p class="message-font">停留天数</p>
        </div>
        <div class="pro-list">
          <p>90天</p>
          <p class="message-font">有效期</p>
        </div>
        <div class="pro-list">
          <p>暂无</p>
          <p class="message-font">面试录指纹</p>
        </div>
      </div>
    </div>
    <div class="advertisement"  v-for="(site,index) in indexcontents" :key="index" v-on:click="load(site.id)">
      <div class="landscape-img">
        <img src="http://virtto.cn/virtto-mobile/image/hot4.png" alt="">
      </div>
      <div class="landscape-detail">
        <div class="detail-h">
          <h5>{{site.title}}</h5>
          <p class="message-font">在线预订</p>
        </div>
        <div class="hot-star">
          <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">
          <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">
          <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">
          <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">
          <img src="http://virtto.cn/virtto-mobile/image/star.png" alt="">
          <p class="message-font">推荐指数5颗星</p>
        </div>
        <div class="fee">
          <p class="message-font">签证费</p>
          <p class="message-font">服务费</p>
          <p class="message-font">拒签退款</p>
          <p class="message-font">加急费</p>
          <h5>￥238起</h5>
        </div>
        <div class="welfare">
          <p class="message-font">上海送签</p>
          <p class="message-font">新人福利</p>
          <a class="message-font" href="#">
            详情 <span> > </span>
          </a>
        </div>
      </div>
    </div>
  </div>
  <vueFooter></vueFooter>
</div>
</template>

<script>
import vueFooter from '@/components/view/vueFooter'
$(function () {
  var winHeight = $(document).scrollTop()
  $(window).scroll(function () {
    var scrollY = $(document).scrollTop()
    if (scrollY > winHeight) {
      if (scrollY > 100) {
        $('#first').hide()
        $('#last').show()
      } else {
        $('#last').hide()
        $('#first').show()
      }
    } else {
      $('#last').hide()
      $('#first').show()
    }
  })
})
export default {
  name: 'detail',
  data () {
    return {
      indexcontents: '',
      title: ''
    }
  },
  components: {
    vueFooter
  },
  mounted: function () {
    this.changeTitle()
  },
  methods: {
    changeTitle () {
      if (this.$route.params.id === 'video') {
        this.title = '视频'
        this.loadVideo()
      }
      if (this.$route.params.id === 'album') {
        this.title = '相册'
        this.loadAlbum()
      }
      if (this.$route.params.id === 'pano') {
        this.title = '全景'
        this.loadPano()
      }
      return this.title
    },
    load (id) {
      console.log(this.$route.params.id)
      if (this.$route.params.id === 'video') {
        this.goVideo(id)
      }
      if (this.$route.params.id === 'pano') {
        this.goPano(id)
      }
      if (this.$route.params.id === 'album') {
        this.goAlbum(id)
      }
    },
    // 视频
    loadVideo () {
      console.log('loadvideo')
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
      console.log('loadpano')
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
      console.log('loadAlbum')
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
    },
    back () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
