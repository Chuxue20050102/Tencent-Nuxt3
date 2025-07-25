<template>
  <div class="company">
    <div class="company-content">
        <div class="co-card co-card-1">
            <a href="https://www.tencent.com/zh-cn/about.html#about-con-1">
                <img class="co-card-img" src="https://www.tencent.com/data/index/index_detail_1.jpg">
                <div class="co-card-mask"></div>
                <div class="co-card-text">公司简介
                  <span class="co-card-underline"></span>
                </div>
            </a>
        </div>
        <div class="co-card co-card-2">
            <a href="https://www.tencent.com/zh-cn/about.html#about-con-6">
                <img class="co-card-img" src="https://www.tencent.com/data/index/index_detail_2.jpg">
                <div class="co-card-mask"></div>
                <div class="co-card-text">企业文化
                  <span class="co-card-underline"></span>
                </div>
            </a>
        </div>
        <div class="co-card co-card-3">
            <a href="https://www.tencent.com/zh-cn/about.html#about-con-7">
                <img class="co-card-img" src="https://www.tencent.com/data/index/index_detail_3.jpg">
                <div class="co-card-mask"></div>
                <div class="co-card-text">办公地点
                  <span class="co-card-underline"></span>
                </div>
            </a>
        </div>
    </div>
  </div>
</template>

<style scoped>
.company{
  width: 100%;
  height:auto;
}
.company-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  gap: 20px;
  padding: 80px 0px 80px 0px;
  align-items: stretch;
  top: -5px;
}
.co-card {
  position: relative;
}
.co-card-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
  z-index: 1;
}
.co-card-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  padding: 12px 32px;
  text-align: center;
  z-index: 3;
  font-style: italic;
  font-weight: bold;
  letter-spacing: 2px;
}
.co-card-underline {
  display: block;
  height: 2px;
  background: #fff;
  margin: 8px auto 0 0; /* 靠左 */
  width: 30px; /* 下划线初始宽度 */
  transition: width 0.2s cubic-bezier(0,0,1,1);
  opacity: 0;
}
.co-card:hover .co-card-underline {
  width: 100%; /* 动画变为和文字一样宽 */
  opacity: 1;
}
.co-card-mask{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 82, 217, 0.5);
  opacity: 0;
  z-index: 2;
  top: 0;
}
.co-card:hover .co-card-mask{
  opacity: 1;
}

@media (max-width: 820px) {
  .company-content{
    display: flex;
    flex-direction: column;
    padding: 72px 24px 48px 24px;
  }
}
</style>
