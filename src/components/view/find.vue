<template>
    <div>
      <vueHeader></vueHeader>
      <section class="find-container">
        <div class="real-time">
          <div class="time-list" v-for="(ac,index) in activitys" :key="'v'+index" v-on:click="goActivity(ac.id)">
            <div class="author">
              <div class="author-info">
                <div class="author-avatar">
                  <img src="http://virtto.cn/virtto-mobile/image/7.jpeg" alt="">
                </div>
                <div class="author-name">
                  <p>
                    {{ac.title}}
                    <span>活动</span>
                  </p>
                  <p>2019-09-28 09:34:12</p>
                </div>
              </div>
              <div class="follow-it">
                <button>+关注</button>
              </div>
            </div>
            <div class="time-title">
              <p>一方水土养一方人，上海周边很多适合短途旅行的地方。新天地既保留了昔日的石库门、老洋房，又展示着最新的流行元素</p>
            </div>
            <div class="time-image">
              <img src="http://virtto.cn/virtto-mobile/image/source1.jpg" alt="">
              <img src="http://virtto.cn/virtto-mobile/image/source2.png" alt="">
              <img src="http://virtto.cn/virtto-mobile/image/source3.png" alt="">
              <img src="http://virtto.cn/virtto-mobile/image/source4.png" alt="">
            </div>
            <div class="time-record">
              <div class="user-like">
                <img src="http://virtto.cn/virtto-mobile/image/avatar1.jpeg" alt="">
                <img src="http://virtto.cn/virtto-mobile/image/avatar3.jpeg" alt="">
                <img src="http://virtto.cn/virtto-mobile/image/avatar2.jpeg" alt="">
                <p>
                  83人觉得好赞
                </p>
              </div>
              <div class="like-info">
                <a href="#">
                  <img src="http://virtto.cn/virtto-mobile/image/evaluate2.png" alt="">
                  <p>88评论</p>
                </a>
                <a href="#">
                  <img src="http://virtto.cn/virtto-mobile/image/good.png" alt="">
                  <p>50赞</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="journal">
          <div class="journal-list" v-for="(infor,index) in informations" :key="'infor'+index" v-on:click="goInformation(infor.id)">
            <div class="journal-explain">
              <p>{{infor.title}}</p>
              <div>
                <p>资讯</p>
                <p>记录这一刻的每一个点滴</p>
              </div>
            </div>
            <div class="author">
              <div class="author-info">
                <div class="author-avatar">
                  <img src="http://virtto.cn/virtto-mobile/image/7.jpeg" alt="">
                </div>
                <div class="author-name">
                  <p>
                    {{infor.createuser}}
                    <span>#上海哪些地方好玩#</span>
                  </p>
                  <p>黄浦区</p>
                </div>
              </div>
              <div class="follow-it">
                <button>+关注</button>
              </div>
            </div>
            <div class="journal-content">
              <div class="journal-msg">
                <p>六月的魔都必去，小仙女巡游上海有一次新体验</p>
                <div class="like-info">
                  <div>
                    <img src="http://virtto.cn/virtto-mobile/image/evaluate2.png" alt="">
                    <p>83讨论</p>
                  </div>
                  <div>
                    <img src="http://virtto.cn/virtto-mobile/image/good.png" alt="">
                    <p>50赞</p>
                  </div>
                </div>
              </div>
              <div class="journal-image">
                <img src="http://virtto.cn/virtto-mobile/image/source5.png" alt="">
                <img src="http://virtto.cn/virtto-mobile/image/source6.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class="read">
          <div class="read-explain">
            <p>旅行阅读</p>
            <div>
              <p>旅行心得</p>
              <p>行万里路读万卷书</p>
            </div>
          </div>
          <div class="read-image">
            <img src="http://virtto.cn/virtto-mobile/image/source5.png" alt="">
            <img src="http://virtto.cn/virtto-mobile/image/source3.png" alt="">
            <img src="http://virtto.cn/virtto-mobile/image/source4.png" alt="">
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
  name: 'find',
  components: {
    vuefooter,
    vueHeader
  },
  data () {
    return {
      activitys: '',
      informations: ''
    }
  },
  mounted: function () {
    this.loadActivity()
    this.loadInformation()
  },
  methods: {
    // 活动
    loadActivity () {
      var _this = this
      this.$axios.get('/activitys').then(resp => {
        if (resp && resp.status === 200) {
          _this.activitys = resp.data
        }
      })
      return _this.activitys
    },
    goActivity (id) {
      this.$router.push({
        path: `/goActivity/${id}`
      })
    },
    // 资讯
    loadInformation () {
      var _this = this
      this.$axios.get('/informations').then(resp => {
        if (resp && resp.status === 200) {
          _this.informations = resp.data
        }
      })
      return _this.informations
    },
    goInformation (id) {
      this.$router.push({
        path: `/goInformation/${id}`
      })
    }

  }
}
</script>

<style scoped>

</style>
