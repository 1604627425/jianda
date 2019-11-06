<template>
    <div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(item,index) in swipe_img" :key="index">
          <img :src="item.lbt" width="95%" />
        </van-swipe-item>
      </van-swipe>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swipe_img: [
                { lbt: require("../../assets/img/lbt1.png") },
                { lbt: require("../../assets/img/lbt2.png") },
                { lbt: require("../../assets/img/lbt3.png") }
            ],
        }
    }
}
</script>
<style scoped>
.swiper-area {
  background:#f00;
  clear: both;
  text-align: center;
  max-height: 8rem;
  overflow: hidden;
  margin-top:2.2rem;
}
</style>