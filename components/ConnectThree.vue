<template>
    <transition ref="ctrRef" name="fade-center" mode="out-in">
        <div 
            v-if="ctrImg[currentNumber]"
            class="connect-three" 
            :style="{ backgroundImage: `url(${ctrImg[currentNumber].img})` }"
            :key="currentNumber"
        >
            <div class="ctr-text">
                <div class="ctr-2text1">
                    <div class="ctr-text1">连接</div>
                    <div class="ctr-text1">人才与发展</div>
                </div>
                <div class="ctr-text2">激发活力，助力成长</div>
                <div class="right-arrow"></div>
            </div>
            <div class="ctr-change-img">
                <div class="change-bg-btn">
                    <div class="change-arrow">
                        <div class="white-left-arrow" @click="ctrPreImg"></div>
                        <div class="white-right-arrow" @click="ctrNextImg"></div>
                    </div>
                    <div class="change-point">
                        <div
                            v-for="(item, index) in ctrImg"
                            :key="index"
                            class="point-white"
                            :class="{ 'point-blue': currentNumber == index}"
                            @click="nextImg(index)"
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const currentNumber = ref(0);
const ctrImg =[
    { img: "https://www.tencent.com/data/index/index_develop_bg1.jpg"},
    { img: "https://www.tencent.com/data/index/index_develop_bg2.jpg"},
    { img: "https://www.tencent.com/data/index/index_develop_bg3.jpg"}
]
const ctrPreImg = () =>{currentNumber.value=(currentNumber.value+ctrImg.length-1)%ctrImg.length}
const ctrNextImg= () =>{currentNumber.value=(currentNumber.value+1)%ctrImg.length}

const nextImg = (index:number) =>{
    currentNumber.value = index;
}

// 复用自动换图函数
useAutoSwitch(ctrNextImg, 8000)
// 复用鼠标拖拽切换函数
const ctrRef = ref<HTMLElement | null>(null)
useDragSwitch(ctrRef, ctrPreImg, ctrNextImg)
</script>



<style scoped>
.connect-three {
    width: 100%;
    height: 70vh; /* 高度等于视口高度 */
    background-size: cover; /* 让图片填满容器，保持比例 */
    position: relative;
}
.ctr-img {
    width: 100%;
    height: 100%;
    object-fit: contain; /* 完整显示图片，保持比例 */
    left: 0;
    top: 0;
    z-index: 1;
}
.ctr-text {
    position: absolute;
    z-index: 2;
    color: #555;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    width: 100%;
    padding-left: 6%;
    margin-top: 7%;
    font-style: italic;
}
.ctr-text:hover .ctr-text1{
    color:  #007aff;
}
.ctr-text1 {
    font-size: 45px;
    font-weight: 800;
}
.ctr-text2 {
    font-size: 18px;
    margin: 25px 0;
}
.ctr-change-img{
    width: 100%;
    padding: 35px 90px;
    display: flex;
    justify-content: center; 
    height: auto;
    position: absolute;
    bottom: 0;
}
</style>