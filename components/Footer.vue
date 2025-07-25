<template>
    <div class="footer-container">
        <div class="footer-content">
            <div class="ft-top">
                <div>关注我们</div>
                <div class="ft-icon">
                    <a ref="\" class="Wechat">
                        <img class="ft-icon-tu" src="https://www.tencent.com/img/index/icon_wechat.png">
                        <div class="Wechat-QR">
                            <img src="https://www.tencent.com/img/index/wechat-code.jpg" >
                        </div>
                    </a>
                    <a href="https://weibo.com/tencent">
                        <img class="ft-icon-tu" src="https://www.tencent.com/img/index/icon_weibo.png">
                    </a>
                    <a href="https://x.com/TencentGlobal">
                        <img class="ft-icon-tu" src="https://www.tencent.com/img/index/icon_x.png">
                    </a>
                    <a href="https://www.linkedin.com/company/tencent/">
                        <img class="ft-icon-tu" src="https://www.tencent.com/img/index/icon_in.png">
                    </a>
                    <a href="https://www.youtube.com/@TencentGlobal">
                        <img class="ft-icon-tu" src="https://www.tencent.com/img/index/icon_youtube.png">
                    </a>
                </div>
            </div>
            <div class="ft-center">
                <div class="ft-center-1">
                    <div class="ft-center-title">加入我们</div>
                    <a class="ft-center-text" href="https://careers.tencent.com/" target="_blank">社会招聘</a>
                    <a class="ft-center-text" href="https://join.qq.com/" target="_blank">校园招聘</a>
                    <a class="ft-center-text" href="https://careers.tencent.com/en-us/home.html" target="_blank">国际招聘</a>
                </div>
                <div class="ft-center-2">
                    <div class="ft-center-title">联系我们</div>
                    <a class="ft-center-text" href="https://www.tencent.com/zh-cn/customer-service.html" target="_blank">客户服务</a>
                    <a class="ft-center-text" href="https://www.tencent.com/zh-cn/partnership.html" target="_blank">合作洽谈</a>
                    <a class="ft-center-text" href="https://spd.tencent.com/portal" target="_blank">腾讯采购</a>
                    <a class="ft-center-text" href="https://www.tencent.com/zh-cn/compliance.html" target="_blank">诚信合规</a>
                    <a class="ft-center-text" href="https://www.tencent.com/zh-cn/enquiry.html" target="_blank">媒体及投资者</a>
                </div>
                <div class="ft-center-3">
                    <div class="ft-center-title">法律信息</div>
                    <a class="ft-center-text" href="https://www.tencent.com/zh-cn/service-agreement.html" target="_blank">服务协议</a>
                    <a class="ft-center-text" href="https://www.tencent.com/zh-cn/privacy-policy.html" target="_blank">隐私政策</a>
                    <a class="ft-center-text" href="https://ipr.tencent.com/" target="_blank">知识产权</a>
                </div>
                <img class="ft-center-logo" src="https://www.tencent.com/img/index/tencent_logo.png">
            </div>
            <div class="ft-bottom">
                <div class="ft-bottom-row1">
                    <a href="https://www.tencent.com/zh-cn/statement.html" target="_blank">法律声明</a>
                    <a href="https://www.tencent.com/zh-cn/integrity-policy.html" target="_blank">阳光准则</a>
                    <a href="https://www.tencent.com/zh-cn/sitemap.html" target="_blank">网站地图</a>
                    <a href="https://h5.news.qq.com/static/culture.shtml" target="_blank">粤网文[2023]2882-203号</a>
                    <a href="https://beian.tencent.com/" target="_blank">粤B2-20090059-1</a>
                    <a href="https://beian.mps.gov.cn/#/query/webSearch" target="_blank">粤公网安备 44030502008569号</a>
                </div>
                <div class="ft-bottom-row2">
                    Copyright © 1998-2025 Tencent. All Rights Reserved. 腾讯公司 版权所有
                </div>
            </div>
        </div>
    </div>
</template>
      

<style scoped>
/* ||整体 */
.footer-container{
    width: 100%;
    height: 100%;
}
.footer-content{
    height: 480px;
    width: 1200px;
    margin: 0 auto;
    color: #5f6464;
}

/* ||顶部 */
.ft-top{
    display: flex;
    gap:30px;
    width: 100%;
    height: auto;
    border-bottom: 1px solid #f2f3f5;
    margin: 20px 0;
    padding: 20px 0 30px 0;
    font-size: 20px;
}
.ft-icon {
  display: flex;
  align-items: center;
  gap: 20px; 
}
.ft-icon-tu {
  width: 28px;
  height: 28px;
  object-fit: contain;
  display: block;
}
.Wechat {
    position: relative;
}
.Wechat-QR {
    display: none;
    position: absolute;
    left: 15%;
    bottom: 150%;
    width: 200px;
    height: 200px;
    z-index: 10;
    background: #fff;
    object-fit: contain;
}
.Wechat:hover .Wechat-QR {
    display: block;
}

/* ||中心部分 */
.ft-center {
  display: flex;
  flex-direction: row;      /* 横向排列 */
  justify-content: space-between;
  margin-top: 20px;
  gap: 60px;
}
.ft-center-1,
.ft-center-2,
.ft-center-3 {
  display: flex;
  flex-direction: column;   /* 纵向 */
  gap: 20px;
}
.ft-center-title {
  margin-bottom: 8px;
  font-size: 20px;
}
.ft-center-text {
  font-size: 17px;
  cursor: pointer;
}
.ft-center-logo{
    width: 336px;
    height: 44px;
    object-fit: contain; /* 保证图片完整显示且不变形 */
    margin-left: 240px;
    margin-right: 80px;
}

/* ||底部 */
.ft-bottom {
    margin-top: 20px;
    color: #888;
    line-height: 4;
}
.ft-bottom-row2 {
    font-size: 14px;
}
.ft-bottom-row1 a {
    margin: 0 12px 0 0;
    color: #888;
    text-decoration: none;
    font-size: 15px;
}

@media (max-width: 820px) {
    .footer-container{
        padding: 0 24px;
    }
}
</style>