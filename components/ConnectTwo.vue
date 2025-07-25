<template>
    <div class="connect-two">
        <div class="ct-content">
            <div ref="ctLeftRef"  class="ct-left">
                <transition name="fade-center" mode="out-in">
                    <div v-if="ctLeftItems[currentNum]" :key="currentNum">
                        <img class="ct-left-img" :src="ctLeftItems[currentNum].img"/>
                        
                        <div class="ct-left-mask"></div>
                        <div class="ct-left-text">
                            <div class="ct-left-text1">{{ ctLeftItems[currentNum].title }}</div>
                            <div class="ct-left-text2">{{ ctLeftItems[currentNum].desc }}</div>
                        </div>
                        <div class="ct-left-arrow">
                            <button class="ct-arrow-btn" @click="ctPreItem"> &lt; </button>
                            <button class="ct-arrow-btn" @click="ctNextItem"> &gt; </button>
                        </div>
                    </div>
                </transition>
            </div>
            <div class="ct-right">
                <a href="https://www.tencent.com/zh-cn/esg.html">
                    <div class="ct-right-2text1">
                        <div class="ct-right-text1">连接</div>
                        <div class="ct-right-text1">责任与信任</div>
                    </div>
                    <div class="ct-right-text2">聚合微小善行，以科技让世界更美好</div>
                    <div class="right-arrow"></div>
                </a>
            </div>
        </div>
    </div>
</template>



<script setup lang="ts">
const currentNum = ref(0);
const ctLeftItems = [
    {
        img: "https://www.tencent.com/data/index/index_resp_bg4.jpg",
        title: '碳中和',
        desc: '腾讯宣布2030年实现碳中和'
    },
    {
        img: 'https://www.tencent.com/data/index/index_resp_bg1.jpg',
        title: '99公益日',
        desc: '每年一度于9月举行的全民公益活动，透过网上平台特大众在活动期间网上作出的捐款进行匹配。'
    },
    {
        img: 'https://www.tencent.com/data/index/index_resp_bg2.jpg',
        title: '腾讯长城保护项目',
        desc: '腾讯公益慈苦基金会与中国文物保护基金会共同台作，吸引公众关注和参与长城保护的文化遗产类公益项目。'
    }
]
const ctPreItem = () =>{
    currentNum.value = (currentNum.value + ctLeftItems.length - 1) % ctLeftItems.length
}
const ctNextItem = () =>{
    currentNum.value = (currentNum.value + 1) % ctLeftItems.length
}
// 自动切换
useAutoSwitch(ctNextItem, 8000)
// 鼠标拖拽切换
const ctLeftRef = ref<HTMLElement | null>(null)
useDragSwitch(ctLeftRef, ctPreItem, ctNextItem)
</script>



<style scoped>
/* ||整体 */
.connect-two{
    width: 100%;
    height: 700px;
}
.ct-content{
    display: flex;
    margin: 80px auto;
    justify-content: space-between;
    width: 1200px;
    height: auto;
}

/* ||左侧 */
.ct-left{
    position: relative;
    width: 50%;
    height: 620px;
    clip-path: polygon(0 0, 100% 0, 93% 100%, 0 100%);    /* clip-path 定义倒直角梯形 */
}
.ct-left-img{
    z-index: 2;
    height: 700px;
    width: 100%;
    object-fit: cover; 
    clip-path: inherit;
    z-index: 2;
}
.ct-left-mask {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 3;  
    background: linear-gradient(to top, rgba(0,0,0,0.38) 18%, rgba(0,0,0,0) 80%);    /* 自下而上的灰色渐变 */
    /* clip-path: inherit;    */
}
.ct-left-text{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 50px;
    color: #fff;
    font-style: italic;
    padding: 30px 20px;
    z-index: 4;
    margin-left: 30px;
    font-size: 16px;
    width: 80%;
}
.ct-left-text1{
    font-size: 25px;
    margin-bottom: 10px;
}
.ct-left-arrow{
    position: absolute;
    right: 50px;
    bottom: 20px;
    z-index: 5;
    display: flex;
    gap: 20px;
    opacity: 0;
}
.ct-left:hover .ct-left-arrow{
    opacity: 1;
}
.ct-arrow-btn{
    border: none;
    font-weight: bold;
    color: #fff;
    font-size: 22px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
}

/* ||右侧 */
.ct-right{
    width: 50%;
    padding-left: 80px;
    font-style: italic;
    color: #555;
    padding-top: 250px;
}
.ct-right-text1{
    font-size: 40px;
    line-height: 1.1;
}
.ct-right-2text1:hover .ct-right-text1{
    color: #007aff;
}
.ct-right-text2{
    font-size: 20px;
    margin: 15px 0;
}

/* ||响应式布局 */
@media (max-width: 820px) {
    .connect-two{
        height: auto;
    }
    .ct-content{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: auto;
        margin: 24px;
        position: relative;
    }
    .ct-right{
        width: 100%;
        order: 1;
        padding-left: 0;
        padding-top: 40px;
    }
    .ct-left-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        z-index: 3;  
    }
    .ct-left{
        width: 100%;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        order: 2;
        position: relative;
    }
    .ct-left-img {
        width: 90%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        margin: 0 auto;
        padding: 0;
        left: 45%;
        top: 0;
        transform: translateX(-50%);
    }
    .ct-left-mask {
        position: absolute;
        left: 40%;
        top: 0;
        transform: translateX(-50%);
        width: 100%;
        height: 100%;
        z-index: 3;
        background: linear-gradient(to top, rgba(0,0,0,0.38) 18%, rgba(0,0,0,0) 80%);
    }
    .ct-left-arrow{
        position: absolute;
        right: 45%;
        bottom: 16px;
        transform: translateX(175px); 
        z-index: 5;
        display: flex;
        gap: 20px;
        opacity: 1;
    }
    .ct-right-text1{
        font-size: 30px;
    }
}
</style>