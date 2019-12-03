<template>
  <header class="bg-04">
    <div class="search">
      <img src="http://virtto.cn/virtto-mobile/image/serach.png" alt="">
      <input type="text" placeholder="请输入关键词">
    </div>
  </header>
</template>

<script>
export default {
  name: 'vueHeader'
}
</script>

<style scoped>
  .bg-04{
    background-color: #ffffff;
  }
  header .search{
    border: 1px black solid;
    width: 100%;
  }
  header .search img{
    margin-top:1.5%;
  }
</style>
