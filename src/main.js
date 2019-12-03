// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import {RollNotice, RollNoticeItem} from 'vue-ydui/dist/lib.rem/rollnotice'
import '../static/style/index.css'
import '../static/style/swiper.css'
import 'jquery'
import '../static/js/index'
import '../static/js/swiper'
import {LightBox, LightBoxImg, LightBoxTxt} from 'vue-ydui/dist/lib.rem/lightbox'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

Vue.use(ElementUI)
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)

var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.component(RollNotice.name, RollNotice)
Vue.component(RollNoticeItem.name, RollNoticeItem)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
