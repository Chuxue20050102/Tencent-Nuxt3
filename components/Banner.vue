<template>
  <div class="banner">
    <div ref="bannerRef"  class="banner-container">
      <transition-group name="slide-fade">
        <div v-if="banners[currentIndex]" :key="currentIndex" class="banner-item">
          <a
            :href="banners[currentIndex].link"
            target="_blank"
          >
            <img class="banner-img" :src="banners[currentIndex].img" >
            <div class="banner-mask"></div>
            <div class="banner-text">
              <div class="banner-text1">{{ banners[currentIndex].text }}
                <div class="banner-text2">{{ banners[currentIndex].text2 }}</div>
              </div>
            </div>
          </a>
          <div class="banner-btm">
            <div class="change-bg-btn">
                <div class="change-arrow">
                    <div class="white-left-arrow" @click="prevBanner"></div>
                    <div class="white-right-arrow" @click="nextBanner"></div>
                </div>
                <div class="change-point">
                    <div
                        v-for="(item, index) in banners"
                        :key="index"
                        class="point-white"
                        :class="{ 'point-blue': currentIndex == index}"
                        @click="nextImg(index)"
                    >
                    </div>
                </div>
            </div>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const banners = [
  {
    img: 'https://static.www.tencent.com/uploads/2025/05/14/7aef4cbb6361e2d280a101c9e4dc2268.jpg',
    text: '腾讯公布二零二五年第一季业绩',
    link: 'https://www.tencent.com/zh-cn/investors.html#investors-con-1',
  },
  {
    img: 'https://static.www.tencent.com/uploads/2025/05/14/27d92563279535fd2ce6944f70f4f65f.jpg',
    text: '腾讯启动2025全球实习生招聘',
    link: 'https://join.qq.com/post.html?query=p_2',
  },
  {
    img: 'https://static.www.tencent.com/uploads/2025/05/14/aeab2fb400c72bd782767ca4e3f74de0.jpg',
    text: '有朋自远方来， 欢迎使用微信支付!',
    text2: '腾讯正全面提升外籍人士在华支付体验，以促进国际旅游进一步蓬勃发展和国际人文交流。',
    link: 'https://www.tencent.com/zh-cn/media/weixin-pay.html',
  },
]
const currentIndex = ref(0)
function prevBanner() {
  currentIndex.value = (currentIndex.value - 1 + banners.length) % banners.length
}
function nextBanner() {
  currentIndex.value = (currentIndex.value + 1) % banners.length
}
// 右边 点 切换
const nextImg = (index:number) =>{
    currentIndex.value = index;
}
// 复用自动切换
useAutoSwitch(nextBanner, 8000)
// 鼠标拖拽切换
// import { useDragSwitch } from '~/composables/useDragSwitch'
const bannerRef = ref<HTMLElement | null>(null)
useDragSwitch(bannerRef, prevBanner, nextBanner)
</script>



<style scoped>
.banner {
  width: 100%;
  height: 720px;
}
.banner-container {
  position: relative;
  width: 100%;
  display: block;
  height: 720px;
}
.banner-item {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
}
.banner-img {
  width: 100%;
  display: block;
  height: 720px;
  object-fit: cover;
}
.banner-mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 0;
  pointer-events: none;
}
.banner-text {
  position: absolute;
  top: 0px;
  padding-bottom: 120px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1200px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
}
.banner-text1{
  color: #FFF;
  font-size: 3em;
}
.banner-text2{
  margin-top: 8px;
  font-size: 18px;
  width: 56%;
}
.banner-btm{
  position: absolute;
  height: 100px;
  width: 100%;
  max-width: 1200px;
  top: 69%;
  border-bottom: 2px solid #fff;
  z-index: 3;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%);
}
.banner-arrows {
  position: absolute;
  bottom: 37px;
  display: flex;
  gap: 35px;
  z-index: 10;
  background: none;
  width: auto;
}
.arrow-btn {
  color: #fff;
  width: 48px;
  height: 48px;
  font-size: 3em;
  cursor: pointer;
  display: flex;
}
.arrow-btn:hover {
  background: rgba(0,0,0,0.8);
}
/* 右侧滑入动画，两张图片滑动时像一个整体滑块 */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.slide-fade-enter-from {
  opacity: 1;
  transform: translateX(100%);
}
.slide-fade-enter-to {
  opacity: 1;
  transform: translateX(0%);
}
.slide-fade-leave-from {
  opacity: 1;
  transform: translateX(0%);
}
.slide-fade-leave-to {
  opacity: 1;
  transform: translateX(-100%);
}

@media (max-width: 820px) {
  .banner-text{
    padding: 0 24px;
  }
  .banner-btm{
    width: 93%;
  }
}
</style> 