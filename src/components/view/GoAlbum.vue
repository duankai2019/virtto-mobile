<template>
  <el-main>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item :to="{ path: '/IndexList/album'}">相册列表</el-breadcrumb-item>
      <el-breadcrumb-item>相册详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">
      <h1>相册</h1>
    </div>
    <el-row>
      <el-col :span="12" v-for="(o, index) in albums" :key="index" >
        <el-card :body-style="{ padding: '0px' }">
          <el-image
            style="width: 500px; height: 120px"
            :src="o.url"
            :preview-src-list="srcList">
          </el-image>
        </el-card>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
export default {
  name: 'GoAlbum',
  data () {
    return {
      albums: '',
      srcList: [
        'http://virtto.cn/dk/virttolibiary/微信图片_20190810100252.jpg',
        'http://virtto.cn/dk/virttolibiary/1.jpg'
      ]
    }
  },
  mounted: function () {
    this.loadPhoto()
    this.loadPhotourl()
  },
  methods: {
    loadPhoto () {
      var _this = this
      this.$axios.post('/photogetByToid', {toid: this.$route.params.id}).then(resp => {
        if (resp && resp.status === 200) {
          console.log(resp.data)
          _this.albums = resp.data
        }
      })
      return _this.albums
    },
    loadPhotourl () {
      var _this = this
      this.$axios.post('/photogetByToids', {toid: this.$route.params.id}).then(resp => {
        if (resp && resp.status === 200) {
          console.log(resp.data)
          _this.srcList = resp.data
        }
      })
      return _this.srcList
    }
  }
}
</script>

<style scoped>

  .title{
    text-align: center;
    padding-bottom: 10px;
  }
  .el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
