<template>
    <div>
        <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div >
            <div v-for="(item,i) of p" :key="i">
                <div class="details_img">
                    <img :src="'http://127.0.0.1:5050/'+item.GPic" >
                </div>
                <div class="details_price">
                    <span>￥{{item.GPrice}}</span>
                    <span>爆款售卖2332件</span>
                </div>
                <div class="details_spec">
                    <span>{{item.GSpec}}</span>
                </div>
            </div>
            <div v-for="(item,i) of z" :key="i">
                <div class="details_img">
                    <img :src="'http://127.0.0.1:5050/'+item.GPic" >
                </div>
                <div class="details_price">
                    <span>￥{{item.GPrice}}</span>
                    <span>爆款售卖2332件</span>
                </div> 
                <div class="details_spec">
                    <span>{{item.GSpec}}</span>
                </div>
            </div>
            <div class="details_yh">
                <div>
                <van-coupon-cell
                :coupons="coupons"
                :chosen-coupon="chosenCoupon"
                @click="showList = true"
                />
                <van-popup v-model="showList" position="bottom">
                    <van-coupon-list
                    :coupons="coupons"
                    :chosen-coupon="chosenCoupon"
                    :disabled-coupons="disabledCoupons"
                    @change="onChange"
                    @exchange="onExchange"
                    />
                </van-popup>
                </div>
            </div>
            <div class="details_gg">
                <span>规格</span>
                <span>选择套餐类型,颜色分类</span>
                <van-icon name="arrow"  class="icon"/>
            </div>
            <van-notice-bar
            color="#1989fa"
            background="#ecf9ff"
            left-icon="info-o"
            >
            双11来临，本店全部商品满300减200,,更多商品等你来购买还在等什么!
            </van-notice-bar>
        </div>
        <div>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
            <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />
            <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
        </van-goods-action>
        </div>
    </div>
</template>
<script>
import { Icon } from 'vant';
import {Toast} from 'vant'
const coupon = {
  available: 1,
  condition: '无使用门槛\n最多优惠400元',
  reason: '',
  value: 15000,
  name: '优惠券',
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: '150',
  unitDesc: '元'
};
export default {
    data(){
        return{
            chosenCoupon: -1,
            coupons: [coupon],
            disabledCoupons: [coupon],
            showList:false,
            p:[],
            z:[]
        }
    },
    methods: {
    onClickIcon() {
      this.$router.push("/cart");
    },
    onClickButton() {
      Toast.success('购买成功');
      this.$router.push("/success");
    },
    onClickLeft(){
        this.$router.go(-1);
    },
    onChange(index){
        this.index=index;
    },
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
     onExchange(code) {
      this.coupons.push(coupon);
    },
    LoadProudct(){
        var gid=this.$route.query.Gid
        var url="details?gid="+gid;
        this.axios.get(url).then(res=>{
           this.p=res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
     LoadProudct(){
        var gid=this.$route.query.Gid
        var url="details?gid="+gid;
        this.axios.get(url).then(res=>{
           this.p=res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
    LoadSearch(){
       var gid=this.$route.query.gid;
       var url="details?gid="+gid;
        this.axios.get(url).then(res=>{
           this.z=res.data;
        })
        .catch(err=>{
            console.log(err);
        })
    },
  },
    created() {
        this.LoadProudct(),
        this.LoadSearch()
    },
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.details_img>img{
    width:300px;
    height:300px;
}
.details_img{
   position:absolute;
   top:50px;
   left:0;
   width:100%;
   height:300px;
   text-align:center;
}
.details_price{
    width:100%;
    height:74px;
    background-image:linear-gradient(left,#f00,#e61978);
    margin-top:350px;
}
.details_price>span{
    color:#fff;
    font-size:25px;
    display:inline-block;
    padding:20px 0px 20px 20px;
}
.details_price>span+span{
    font-size:10px;
    padding-left:10px;
}
.details_spec{
    width:100%;
    height:100px;
    background-color:#f5ecec;
    display:flex;
}
.details_spec>span{
    font-size:18px;
    color:#000;
    font-weight:bold;
    display:inline-block;
    padding-top:20px;
}
.details_yh{
    margin-top:10px;
}
.details_gg{
    margin-top:20px;
    position:relative;
    margin-bottom:
}
.details_gg>span{
    color:#323233;
    font-size:15px;
}
.details_gg>span+span{
    margin-left:70px;
}
.icon{
    position:absolute;
    right:0;
    top:7px;
}
</style>