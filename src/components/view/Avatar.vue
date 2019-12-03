<template>
 <div class="user">
  <div class="user-img"><img :src="avatar?avatar:require('./img/icon/avatar.jpg')"/></div>
 </div>
</template>
<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      comment: ''
    }
  }
}
</script>

<style type="text/css" scoped>
.user{
 height: 30px;
 width: 30px;
}
.user-img img{
 height: 25px;
 width: 25px;
 border-radius:50%;
}

</style>
