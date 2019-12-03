import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Destination from '@/components/view/destination'
import Deatail from '@/components/view/detail'
import Find from '@/components/view/find'
import Hot from '@/components/view/hot'
import Login from '@/components/view/login'
import Mine from '@/components/view/mine'
import News from '@/components/view/news'
import Order from '@/components/view/order'
import Register from '@/components/view/register'
import Trip from '@/components/view/trip'
import Visa from '@/components/view/visa'
import IndexList from '@/components/view/indexList'
import goVideo from '@/components/view/GoVideo'
import goAlbum from '@/components/view/GoAlbum'
import goPano from '@/components/view/GoPano'
import goActivity from '@/components/view/GoActivity'
import goInformation from '@/components/view/GoInformation'
import goError from '@/components/view/error'
import comment from '@/components/view/Comment'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', name: 'HelloWorld', component: HelloWorld},
    {path: '/index', name: 'HelloWorld', component: HelloWorld},
    {path: '/Destination', name: Destination, component: Destination},
    {path: '/Deatail', name: Deatail, component: Deatail},
    {path: '/Find', name: Find, component: Find},
    {path: '/Hot', name: Hot, component: Hot},
    {path: '/Login', name: Login, component: Login},
    {path: '/Mine', name: Mine, component: Mine},
    {path: '/News', name: News, component: News},
    {path: '/Order', name: Order, component: Order},
    {path: '/Register', name: Register, component: Register},
    {path: '/Trip', name: Trip, component: Trip},
    {path: '/Visa', name: Visa, component: Visa},
    {path: '/IndexList/:id', name: IndexList, component: IndexList},
    {path: '/goVideo/:id', component: goVideo, name: '视频详情 '},
    {path: '/goPano/:id', component: goPano, name: '全景详情 '},
    {path: '/goAlbum/:id', component: goAlbum, name: '相册详情 '},
    {path: '/goActivity/:id', component: goActivity, name: '活动详情'},
    {path: '/goInformation/:id', component: goInformation, name: '资讯详情'},
    {path: '/goError', component: goError, name: '功能开发'},
    {path: '/comment', component: comment, name: '评论查看'}
  ]
})
