<template>
  <div class="connect-section" >
    <div class="cs-content">
      <!-- 左侧 -->
      <div class="section-btn">
        <div
          class="scetion-btn-1"
          :class="activeIndex === 1 ? 'btn-active' : 'btn-blur'"
          @mouseenter="activeIndex = 1"
        >
          <div class="section-btn-text1">连接用户与生活</div>
          <div class="section-btn-text2">让生活更便捷更多彩</div>
          <div v-if="activeIndex === 1" class="sec-btn-arrow">
            <div>&#8594;</div>
          </div>
        </div>
        <div
          class="scetion-btn-2"
          :class="activeIndex === 2 ? 'btn-active' : 'btn-blur'"
          @mouseenter="activeIndex = 2"
        >
          <div class="section-btn-text1">连接企业与科技</div>
          <div class="section-btn-text2">数字化助手，助力产业升级</div>
          <div v-if="activeIndex === 2" class="sec-btn-arrow">
            <div>&#8594;</div>
          </div>
        </div>
        <div
          class="scetion-btn-3"
          :class="activeIndex === 3 ? 'btn-active' : 'btn-blur'"
          @mouseenter="activeIndex = 3"
        >
          <div class="section-btn-text1">连接现在与未来</div>
          <div class="section-btn-text2">探索面向未来的创新科技</div>
          <div v-if="activeIndex === 3" class="sec-btn-arrow">
            <div>&#8594;</div>
          </div>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="section-card-content">
        <div v-show="activeIndex === 1" class="sec-card-group cs-1group">
          <div class="cs-card sec-card-1-1">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_1_1.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html#business-con-1">
                <div class="cs-img-text1">通信与社交</div>
                <div class="cs-img-text2">连接人与人，提供功能丰富的即时通信和社交平台，让沟通更便捷。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-1-2">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_1_2.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html#business-con-2">
                <div class="cs-img-text1">数字内容</div>
                <div class="cs-img-text2">基于优质内容，以技术为驱动引擎，探索社交和内容融合的下一代形态。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-1-3">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_1_3.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html#business-con-3">
                <div class="cs-img-text1">金融科技服务</div>
                <div class="cs-img-text2">连接用户、商户和金融机构，提供安全、专业、便捷的金融产品与服务。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-1-4">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_1_4.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html#business-con-4">
                <div class="cs-img-text1">工具</div>
                <div class="cs-img-text2">提供多种工具性软件，项具体需求。帮助用户快速直接解决各</div>
              </a>
            </div>
          </div>
        </div>
        <div v-show="activeIndex === 2" class="sec-card-group cs-2group">
          <div class="cs-card sec-card-2-1">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_2_1.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-5">
                <div class="cs-img-text1">腾讯广告营销</div>
                <div class="cs-img-text2">大数据营销平台，汇聚腾讯全量应用场景，提供一体化数字化营销方案。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-2-2">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_2_2.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-6">
                <div class="cs-img-text1">腾讯云</div>
                <div class="cs-img-text2">提供领先的云产品与云服务，辅助企业走向数字化和全球化。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-2-3">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_2_3.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-7">
                <div class="cs-img-text1">智慧产业</div>
                <div class="cs-img-text2">通过云、A1、大数据分析、安全、支付、小程序、LB5等互联网前沿技术和产品打造智慧产业方案，助力产业数字化升级。</div>
              </a>
            </div>
          </div>
        </div>
        <div v-show="activeIndex === 3" class="sec-card-group cs-3group">
          <div class="cs-card sec-card-3-1">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_3_1.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-8">
                <div class="cs-img-text1">人工智能</div>
                <div class="cs-img-text2">运用多种技术资产，提升人工智能实力，惠及人类和世界。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-3-2">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_3_2.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-9">
                <div class="cs-img-text1">物联网</div>
                <div class="cs-img-text2">通过腾讯云物联网，致力提供10T全栈产品和解决方案。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-3-3">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_3_3.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html?page-active=to-b#business-con-10">
                <div class="cs-img-text1">多媒体</div>
                <div class="cs-img-text2">腾讯多媒体实验室专注音视频通信技术的前跨性研究。</div>
              </a>
            </div>
          </div>
          <div class="cs-card sec-card-3-4">
            <img class="cs-img"src="https://www.tencent.com/data/index/index_link_3_4.jpg">
            <div class="cs-img-bottom">
              <a href="https://www.tencent.com/zh-cn/business.html#business-con-11">
                <div class="cs-img-text1">腾讯探索</div>
                <div class="cs-img-text2">携手合作伙伴探索未来和相关技术，帮助解决全球在食物、能源和水源方面的挑战。</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <!-- 响应式专用卡片组 -->
   <div class="sec-card-group-mobile">
      <div class="cs-card sec-card-1-1">
        <img class="cs-img"src="https://www.tencent.com/data/index/index_link_1_1.jpg">
        <div class="cs-img-bottom">
          <div class="cs-img-text1">连接用户与生活</div>
          <div class="cs-img-text2">让生活更便捷更多彩</div>
        </div>
      </div>
      <div class="cs-card sec-card-2-3">
        <img class="cs-img"src="https://www.tencent.com/data/index/index_link_2_3.jpg">
        <div class="cs-img-bottom">
          <div class="cs-img-text1">连接企业与科技</div>
          <div class="cs-img-text2">数字化助手，助力产业升级</div>
        </div>
      </div>
      <div class="cs-card sec-card-3-1">
        <img class="cs-img"src="https://www.tencent.com/data/index/index_link_3_1.jpg">
        <div class="cs-img-bottom">
          <div class="cs-img-text1">连接现在与未来</div>
          <div class="cs-img-text2">探索面向未来的创新科技</div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
const activeIndex = ref(1)
const isMobile = ref(false)
function checkMobile() {
  isMobile.value = window.innerWidth <= 820
}
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.connect-section{
  width: 100%;
  height: auto;
  background: #1B1F25;
  color: #FFF;
}
.cs-content{
  width: 1200px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;  /*居中*/
  padding: 0 0 0 20px;
}


/* ||左侧 */
.section-btn{
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center; 
}
.section-btn-text1{
  font-size: 32px;
  line-height: 1.2em;
  margin: 12px 0px;
  padding: 0px;
  font-style: italic;
  transition: color 0.2s;
}
.section-btn-text2{
  font-size: 16px;
  line-height: 1.5em;
  margin: 12px 0px 0px 0px;
  padding: 0px;
  font-weight: normal;
  font-style: italic;
  transition: color 0.2s;
}
.btn-blur .section-btn-text1,
.btn-blur .section-btn-text2 {
  color: #bbb;
}
.btn-active .section-btn-text1,
.btn-active .section-btn-text2 {
  color: #fff;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
  margin-left: 30px;
}

/* 高亮按钮左侧蓝色竖条 */
.btn-active {
  position: relative;
}
.btn-active::before {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  left: -16px;
  height: 30%;
  width: 8px;
  background: #0052D9;
  border-radius: 3px;
}

/* 高亮按钮下侧箭头 */
.sec-btn-arrow {
  margin-left: 30px;
  font-size: 40px;
}


/* ||右侧 */
.section-card-content{
  width: 800px;
}
.sec-card-group{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}
.sec-card-2-3{
  grid-column: span 2;
  width: 100%;
}
.cs-card{
  position: relative;
  height: 300px;
  overflow: hidden;     /* 防止内容溢出 */
}
.cs-img{
  height: 100%;
  width: 100%;
  object-fit: cover;  /* 保证图片不变形填满容器 */
}
.cs-img-bottom{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
  font-style: italic;
  padding: 30px 20px;
}
.cs-img-text1{
  font-size: 24px;
  line-height: 1.2em;
  margin: 12px 0px;
  padding: 0px;
}
.cs-img-text1::after{
  content: "";
  position: absolute;
  width: 36px;
  height: 24px;
  opacity: 0;
  top: 30%;
  right: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("https://www.tencent.com/img/index/icon_arrow_r.png");
}
.cs-img-bottom:hover .cs-img-text1::after {
  opacity: 1;
}
.cs-img-text2{
  font-size: 16px;
  display: none;
}
.cs-card:hover .cs-img-text2{
  display: block;
}
.cs-card:hover .cs-img-text1{
  margin-right: 20px;
}


/* 响应式布局专用 */
.sec-card-group-mobile{
  display: none;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  background-color: #1B1F25;
}
.sec-card-group-mobile .cs-img-text2{
  display: block;
}
.sec-card-group-mobile .cs-img-text1::after{
  display: none;
}
@media (max-width: 820px) {
  .section-btn, .sec-card-group {
    display: none;
  }
  .sec-card-group-mobile {
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 24px;
  }
}


</style>