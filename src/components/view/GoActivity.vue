<template>
  <el-main>
    <el-breadcrumb separator="/" >
      <el-breadcrumb-item :to="{ path: '/IndexList/pano'}">活动</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="title">
      <h1>{{activity.title}} </h1>
    </div>
  </el-main>
</template>

<script>
export default {
  name: 'GoActivity',
  data () {
    return {
      activity: ''
    }
  },
  mounted: function () {
    this.loadActivity()
  },
  methods: {
    loadActivity () {
      var _this = this
      this.$axios.post('/activitygetById', {id: this.$route.params.id}).then(resp => {
        if (resp && resp.status === 200) {
          _this.activity = resp.data
        }
      })
      return _this.activity
    }
  }
}
</script>

<style scoped>
  .title{
    text-align: center;
    margin-top: 30px;
  }
</style>
