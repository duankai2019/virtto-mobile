<template>
  <el-main>
    <el-breadcrumb separator="/"   >
      <el-breadcrumb-item :to="{ path: '/IndexList/video'}">视频列表</el-breadcrumb-item>
      <el-breadcrumb-item>视频详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">
      <h1>{{video.title}}</h1>
    </div>
    <div class="outContainer" >
      <div class="video-box">
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions"></video-player>
      </div>
      <comment></comment>
    </div>

  </el-main>
</template>

<script>
import comment from '@/components/view/Comment'
export default {
  name: 'GoVideo',
  data () {
    return {
      video: '',
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        aspectRatio: '16:9',
        fluid: true,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true
        }
      }
    }
  },
  components: {
    comment
  },
  mounted: function () {
    this.loadVideo()
  },
  methods: {
    loadVideo () {
      var _this = this
      let myPlayer = this.$refs.videoPlayer.player
      this.$axios.post('/videogetById', {id: this.$route.params.id}).then(resp => {
        if (resp && resp.status === 200) {
          myPlayer.src(resp.data.videosrc)
          myPlayer.poster(resp.data.src)
          _this.video = resp.data
        }
      })
      return _this.video
    }
  }
}
</script>

<style scoped>
.title{
  text-align: center;
}
.video-player{
  height: 200px;
  overflow: hidden;
}
</style>
