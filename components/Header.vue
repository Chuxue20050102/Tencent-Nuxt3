<template>
  <transition name="header-fade">
    <div v-show="navBgVisible" class="nav-bg"></div>
  </transition>
    <header
      v-show="showHeader" 
      class="header"
      :class="{ 'changeHeaderBg': navAddClass }"
    >
      <div class="header-container">
        <!-- 左侧 Logo -->
        <div class="logo-container">
          <a v-show="showHeader" :class="['TClogo', { 'TClogo-hover': navBgVisible } , { 'TClogo-hover': navLogoColor }]"/>
        </div>
        <!-- 中间导航菜单 -->
        <nav
          class="nav-menu" 
          @mouseenter="navBgVisible = true"
          @mouseleave="navBgVisible = false"
        >
          <a href="https://www.tencent.com/zh-cn/about.html" class="nav-link">
            <span class="nav-link-title">简介</span>
            <div class="nav-link-text">
              <div>公司简介</div>
              <div>愿景及使命</div>
              <div>发展历程</div>
              <div>业务架构</div>
              <div>管理团队</div>
              <div>董事会成员</div>
              <div>企业文化</div>
              <div>办公地点</div>
            </div>
          </a>
          <a href="https://www.tencent.com/zh-cn/business.html" class="nav-link">
            <span class="nav-link-title">业务</span>
            <div class="nav-link-text">
              <div>面向用户</div>
              <div>面向企业</div>
              <div>创新科技</div>
            </div>
          </a>
          <a href="https://www.tencent.com/zh-cn/employees.html" class="nav-link">
            <span class="nav-link-title">员工</span>
            <div class="nav-link-text">
              <div>人才发展</div>
              <div>腾讯学堂</div>
              <div>工作环境</div>
              <div>员工活动</div>
            </div>
          </a>
          <a href="https://www.tencent.com/zh-cn/esg.html" class="nav-link">
            <span class="nav-link-title">ESG</span>
            <div class="nav-link-text">
              <div>环境</div>
              <div>社会</div>
              <div>治理</div>
              <div>ESG评级</div>
              <div>报告</div>
            </div>
          </a>
          <a href="https://www.tencent.com/zh-cn/investors.html" class="nav-link">
            <span class="nav-link-title">投资者</span>
            <div class="nav-link-text">
              <div>季度业绩及投资者新闻</div>
              <div>公告及财务报告</div>
              <div>业绩电话会及投资者日历</div>
              <div>投资者工具包</div>
              <div>证券及债券信息</div>
              <div>环境、社会及管治</div>
              <div>股东资讯</div>
            </div>
          </a>
          <a href="https://www.tencent.com/zh-cn/media.html" class="nav-link">
            <span class="nav-link-title">媒体</span>
            <div class="nav-link-text">
              <div>企业动态</div>
              <div>财务新闻</div>
              <div>腾讯视角</div>
              <div>媒体资料库</div>
            </div>
          </a>
        </nav>
        <!-- 右侧语言切换 -->
        <div class="lang-switch">
          <button class="lang-switch-btn">简</button>
          <span>/</span>
          <button class="lang-switch-btn2">繁</button>
          <span>/</span>
          <button class="lang-switch-btn2">EN</button>
        </div>
      </div>
    </header>
</template>

<script setup lang="ts">
const navBgVisible = ref(false)//控制大白色背景
const showHeader = ref(true)//控制导航栏（上滑显示，下滑隐藏）
const navAddClass = ref(false)//控制导航栏背景颜色
const navLogoColor = ref(false)//控制导航栏logo颜色

let lastScrollTop = 0
function handleScroll() {
  const scrollTop = document.body.scrollTop
  // 到顶部时让 header 透明
  if (scrollTop === 0) {
    showHeader.value = true
    navAddClass.value = false 
    navLogoColor.value = false
    lastScrollTop = 0
    return
  }
  //判断上滑/下滑
  if (scrollTop > lastScrollTop && scrollTop > 40) {
    // 向下滚动且滚动距离大于40px，隐藏
    showHeader.value = false
    navAddClass.value = false
    navLogoColor.value = false
  } else {
    // 向上滚动，显示
    showHeader.value = true
    navAddClass.value = true
    navLogoColor.value = true
  }
  lastScrollTop = scrollTop
}

onMounted(() => {
  document.body.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  document.body.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* ||整体 */
.header {
  position: fixed;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 5;
  background: transparent;
}
.header-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 16px;
  height: 72px;
  position: relative;
}
.changeHeaderBg {
  background: #fff;
  z-index: 5;
  color: #4b5563; 
}

/* ||左侧 */
.logo-container {
  display: flex;
}
.TClogo {
  display: block;
  height: 18px;
  width: 137px;
  background: url("https://www.tencent.com/img/index/menu_logo.png") no-repeat 0 0;
  background-size: contain;
  z-index: 3;
}
.TClogo-hover {
  background-image: url("https://www.tencent.com/img/index/menu_logo_hover.png");
}

/* ||中间+悬浮背景 */
.nav-menu {
  display: block;
  height: 72px;
  position: absolute;
  right: 120px;
  top: 0px;
  cursor: pointer;
  opacity: 1;
}
.nav-bg {
  display: block;
  pointer-events: none;
  transition: opacity 0.3s;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 485px;
  background: rgba(255, 255, 255, 1);
  z-index: 5;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
}
.nav-link {
  display: inline-block;
  margin-right: 72px;
  position: relative;
  z-index: 3;
  padding-top: 25px;
  height: 72px;
  font-size: 16px;
}
.nav-link-title{
  font-weight: bold;
}
/* 下拉菜单显示时，文字缓慢变色 */
.nav-menu:hover{
  color: #2b2e2e;
  transition: color 0.6s;
}
/* 文本下方横线动画，透明度控制显示 */
.nav-link-title::after{
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  background: #2563eb;
  width: 20%;
  height: 4px;
  left: 50%;
  transform: translate(-50%);
  transition: all 0.3s cubic-bezier(.4,0,.2,1);
}
.nav-link:hover .nav-link-title::after{
  width: 100%;
  opacity: 1;
}
/* 导航栏下拉菜单 */
.nav-link > div{
  display: none;
  flex-direction: column;
  gap: 25px;
  padding-top: 10px;
  position: absolute;
  left: 50%; 
  top: 100%; 
  transform: translateX(-50%);
  width: 150px;
  text-align: center;
}
.nav-link:hover > div{
  display: flex;
}
.nav-link-text div{
  color: #4b5563;
}
.nav-link-text div:hover{
  color: black;
}

/* ||右侧 */
.lang-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  cursor: pointer;
  z-index: 3;
}
.lang-switch-btn2{
  color: #ccc;
}
.nav-menu:hover+.lang-switch{
  color: #4b5563; 
  transition: color 0.6s;
}

/* ||导航栏下拉菜单栏白色背景展开动画 */
.header-fade-enter-active,
.header-fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.header-fade-enter-from,
.header-fade-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}
.header-fade-enter-to,
.header-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 820px) {
  .nav-link-title , .lang-switch{
    display: none;
  }
  .TClogo , .TClogo-hover{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .nav-bg{
    opacity: 0;
  }
}
</style>