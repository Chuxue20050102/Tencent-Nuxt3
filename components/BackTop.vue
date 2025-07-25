<template>
  <transition name="backtop-fade">
    <div
      v-show="showBackTopBtn"
      class="backTopBtn"
      @click="scrollToTop"
    >
      ^
    </div>
  </transition>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 点击按钮回到页面顶部
function scrollToTop() {
  // 直接跳到顶部，一句：document.body.scrollTop = 0;
  // 同时设置 document.body.scrollTop 和 document.documentElement.scrollTop，可兼容所有浏览器。
  // 动画效果回到顶部如下：
  const interval = setInterval(() => {
    // 每次减少的距离
    const step = 40;
    // 当前滚动距离
    const current = document.body.scrollTop;
    if (current > 0) {
      document.body.scrollTop = Math.max(current - step, 0);
    } else {
      clearInterval(interval);
    }
  }, 3); // 每3ms执行一次
}

// 当网页下滑超过50px时，悬浮球才会显示
const showBackTopBtn = ref(false)
function handleScroll() {
  const scrollTop = document.body.scrollTop;
  showBackTopBtn.value = scrollTop > 50;
}
onMounted(() => {
  document.body.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  document.body.removeEventListener('scroll', handleScroll)
})
</script>


<style scoped>
.backTopBtn {
  position: fixed;
  right: 80px;
  bottom: 50px;
  z-index: 999;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  border: 2px solid #2563eb;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  background-color: #fff;
  color: #2563eb;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 7px;
}
.backTopBtn:hover {
  background-color: #2563eb;
  color: #fff;
}

/* ||悬浮球显示/隐藏动画 */
.backtop-fade-enter-active,
.backtop-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.backtop-fade-enter-from {
  opacity: 0;
  transform: translateY(40px); /* 初始在下方 */
}
.backtop-fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.backtop-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.backtop-fade-leave-to {
  opacity: 0;
  transform: translateY(40px); /* 离开时下沉 */
}
</style> 
