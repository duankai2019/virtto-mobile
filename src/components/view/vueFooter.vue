<template>
  <footer>
    <ul>
      <li index="1" :class="{ active:'1'==isActive }" v-on:click="go('1')">
        <img src="http://virtto.cn/virtto-mobile/image/home-select.png" alt="">
        <p>首页</p>
      </li>
      <li index="2" :class="{ active:'2'==isActive }" v-on:click="go('2')">
        <img src="http://virtto.cn/virtto-mobile/image/address.png" alt="">
        <p>频道</p>
      </li>
      <li index="3" :class="{ active:'3'==isActive }" v-on:click="go('3')">
        <img src="http://virtto.cn/virtto-mobile/image/look.png" alt="">
        <p>发现</p>
      </li>
      <li index="4" :class="{ active:'4'==isActive }" v-on:click="go('4')">
        <img src="http://virtto.cn/virtto-mobile/image/suitcase.png" alt="">
        <p>广播</p>
      </li>
      <li index="5" :class="{ active:'5'==isActive }" v-on:click="go('5')">
        <img src="http://virtto.cn/virtto-mobile/image/mine.png" alt="">
        <p>我的</p>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    changeValue (index) {

    },
    go (key) {
      this.isActive = key
      switch (key) {
        case '1':
          this.$router.push('/index')
          break
        case '2':
          this.$router.push('/Trip')
          break
        case '3':
          this.$router.push('/Hot')
          break
        case '4':
          this.$router.push('/Find')
          break
        case '5':
          this.$router.push('/Mine')
          break
        default:
          console.log(123456)
      }
    }
  }
}
</script>

<style scoped>

</style>
