<template>
  <el-main>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item :to="{ path: '/IndexList/pano'}">全景列表</el-breadcrumb-item>
      <el-breadcrumb-item>全景详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">
      <h1>{{pano.title}} </h1>
    </div>
    <iframe :src="pano.panourl"  width="100%" height="500px">
    </iframe>
  </el-main>
</template>

<script>
export default {
  name: 'GoPano',
  data () {
    return {
      pano: ''
    }
  },
  mounted: function () {
    this.loadPano()
  },
  methods: {
    loadPano () {
      var _this = this
      this.$axios.post('/panogetById', {id: this.$route.params.id}).then(resp => {
        if (resp && resp.status === 200) {
          _this.pano = resp.data
        }
      })
      return _this.pano
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
    margin-top: 30px;
  }
  .video-player{
    height: 790px;
    overflow: hidden;
  }
</style>
