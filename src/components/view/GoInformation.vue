<template>
  <el-main>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item :to="{ path: '/IndexList/pano'}">资讯</el-breadcrumb-item>
      <el-breadcrumb-item>资讯详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">
      <h1>{{information.title}} </h1>
    </div>

  </el-main>
</template>

<script>
export default {
  name: 'GoInformation',
  data () {
    return {
      information: ''
    }
  },
  mounted: function () {
    this.loadInformation()
  },
  methods: {
    loadInformation () {
      var _this = this
      this.$axios.post('/informationgetById', {id: this.$route.params.id}).then(resp => {
        if (resp && resp.status === 200) {
          _this.information = resp.data
        }
      })
      return _this.information
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
