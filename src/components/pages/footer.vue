<template>
    <div>
    <van-tabbar v-model="active" class="tabbar">
        <van-tabbar-item @click="like">
        <span>猜你喜欢</span>
            <img
            slot="icon"
            slot-scope="props"
            :src="props.active ? icon.active : icon.normal"
            >
        </van-tabbar-item>
        <van-tabbar-item @click="fication">
            <span>分类</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon1.active : icon1.normal">
        </van-tabbar-item>        
         <van-tabbar-item @click="error">
            <span>必抢清单</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon2.active : icon2.normal">
          </van-tabbar-item>
         <van-tabbar-item @click="cart">
            <span>购物车</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon3.active : icon3.normal">
        </van-tabbar-item>
        <van-tabbar-item @click="mydemo">
            <span>我的</span>
            <img
                slot="icon"
                slot-scope="props"
                :src="props.active ? icon4.active : icon4.normal">
        </van-tabbar-item>
    </van-tabbar>
    </div>
</template>
<script>
import { Toast } from 'vant'
import axios from "axios"
export default {
  data() {
    return {
      list:{},
      active: 0,
      icon: {
        normal:require('@/assets/img/xh.png'),
        active:require('@/assets/img/xh1.png'),
      },
       icon1: {
        normal:require('@/assets/img/location.png'),
        active:require('@/assets/img/location1.png'),
      },
      icon2:{
        normal:require('@/assets/img/清单.png'),
        active:require('@/assets/img/清单1.png'),
      },
       icon3:{
        normal:require('@/assets/img/购物车-23.png'),
        active:require('@/assets/img/购物车1.png'),
      },
       icon4:{
        normal:require('@/assets/img/我的.png'),
        active:require('@/assets/img/我的1.png'),
      }
    }
  },
  methods:{
    cart(){
      this.$router.push("/cart");
    },
    fication(){
        this.$router.push("/list")
    },
    mydemo(){
       this.$router.push("/mydemo")
    },
    like(){
      this.$router.push("/shopp");
    },
    error(){
      this.$router.push("*");
    }
  }
} 
</script>
<style  scoped>
    .tabbar{
        height:50px;
        position:fixed;
        left:0;
        bottom:0;
    }
</style>
