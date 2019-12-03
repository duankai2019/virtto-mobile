<template>
  <section class="index-sty">
    <header>
      <div class="location">
        <img src="image/location.png" alt="">
        <p>上海</p>
      </div>
      <div class="search">
        <img src="image/serach.png" alt="">
        <input type="text" placeholder="请输入关键词">
      </div>
      <div class="right-icon">
        <div class="scan">
          <img src="image/scan.png" alt="">
        </div>
        <div class="message">
          <img src="image/news.png" alt="">
        </div>
      </div>
    </header>
    <section class="index-content">
      <nav>
        <a href="view/destination.html">
          <img src="image/team.png" alt="">
          <p>跟团游</p>
        </a>
        <a href="view/destination.html">
          <img src="image/box.png" alt="">
          <p>自由行</p>
        </a>
        <a href="view/destination.html">
          <img src="image/airplane.png" alt="">
          <p>机票</p>
        </a>
        <a href="view/destination.html">
          <img src="image/ticket.png" alt="">
          <p>汽车票</p>
        </a>
        <a href="view/destination.html">
          <img src="image/hotel.png" alt="">
          <p>酒店</p>
        </a>
        <a href="view/destination.html">
          <img src="image/train.png" alt="">
          <p>火车</p>
        </a>
        <a href="view/destination.html">
          <img src="image/ship.png" alt="">
          <p>游轮</p>
        </a>
        <a href="view/destination.html">
          <img src="image/play.png" alt="">
          <p>当地游</p>
        </a>
        <a href="view/destination.html">
          <img src="image/fee.png" alt="">
          <p>门票</p>
        </a>
        <a href="view/visa.html">
          <img src="image/passport.png" alt="">
          <p>签证</p>
        </a>
      </nav>
      <div class="news swiper-container">
        <div class="swiper-wrapper">
          <p class="swiper-slide">【抢购大额优惠券】<span>大额优惠券专场每天12点记得来抢</span></p>
          <p class="swiper-slide">【3.5折自由行】<span>大额优惠券专场每天12点记得来抢</span></p>
          <p class="swiper-slide">【抢购大额优惠券】<span>大额优惠券专场每天12点记得来抢</span></p>
          <p class="swiper-slide">【3.5折自由行】<span>大额优惠券专场每天12点记得来抢</span></p>
        </div>
      </div>
      <div class="content">
        <div class="recommend">
          <div class="recommend-profile">
            <h5>定制推荐</h5>
            <p>定制推荐旅游想去哪玩去哪玩</p>
            <span>查看更多</span>
          </div>
          <div class="recommend-nav">
            <button class="bg1">避暑圣地</button>
            <button class="bg2">出进游玩</button>
            <button class="bg3">境内游玩</button>
            <button class="bg4">假日组团</button>
          </div>
        </div>
        <div class="recommend-image">
          <div class="image-left">
            <div class="float-msg">
              <p>布吉岛</p>
              <p>亮点340+</p>
            </div>
            <div class="float-msg-img">
              <img src="image/hot3.png" alt="">
              <p>布吉岛7天6晚</p>
            </div>
            <img src="image/source1.jpg" alt="">
          </div>
          <div class="image-right">
            <div>
              <div class="float-msg">
                <p>日本</p>
                <p>亮点340+</p>
              </div>
              <img src="image/source2.png" alt="">
            </div>
            <div>
              <div class="float-msg">
                <p>巴厘岛</p>
                <p>亮点340+</p>
              </div>
              <img src="image/source3.png" alt="">
            </div>
            <div>
              <div class="float-msg">
                <p>云南</p>
                <p>亮点34+</p>
              </div>
              <img src="image/source4.png" alt="">
            </div>
            <div>
              <div class="float-msg">
                <p>周边游</p>
                <p>亮点40+</p>
              </div>
              <img src="image/source5.png" alt="">
            </div>
          </div>
        </div>
        <div class="hot">
          <div class="recommend-profile">
            <h5>热门地点</h5>
            <p>人气旅游胜地想去的都在这里</p>
            <span>查看更多</span>
          </div>
          <div class="hot-nav">
            <a href="">
              <p>23.8万人喜欢</p>
              <img src="image/hot1.png" alt="">
              <p>上海</p>
            </a>
            <a href="">
              <p>2万人喜欢</p>
              <img src="image/hot2.png" alt="">
              <p>北京</p>
            </a>
            <a href="">
              <p>2.8万人喜欢</p>
              <img src="image/hot3.png" alt="">
              <p>大理</p>
            </a>
            <a href="">
              <p>23.8万人喜欢</p>
              <img src="image/hot4.png" alt="">
              <p>成都</p>
            </a>
          </div>
          <div class="theEnd">
            我是尽头
          </div>
        </div>
      </div>
    </section>
    <footer>
      <ul>
        <li class="active">
          <img src="image/home-select.png" alt="">
          <p>首页</p>
        </li>
        <li onclick="go(2)">
          <img src="image/address.png" alt="">
          <p>目的地</p>
        </li>
        <li onclick="go(3)">
          <img src="image/look.png" alt="">
          <p>发现</p>
        </li>
        <li onclick="go(4)">
          <img src="image/suitcase.png" alt="">
          <p>行程</p>
        </li>
        <li onclick="go(5)">
          <img src="image/mine.png" alt="">
          <p>我的</p>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped>

</style>
