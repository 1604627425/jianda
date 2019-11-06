<template>
    <div>
        <van-nav-bar
            title="购物车"
            left-text="返回"
            left-arrow
            @click-left="onClickLeft"
        />
        <div class="cart-item" v-for="(item,i) of list1" :key="i">
            <div class="leftText">
                <input type="checkbox" v-model="item.cd" @click="itemchange"/>
                <img :src="'http://127.0.0.1:5050/'+item.Cpics" class="cpics">
                <div class="lname">{{item.Cname}}</div>
                <div class="price">￥{{item.CPrice}}</div>   
                <div class="count">数量:{{item.Count}}</div>
            </div>
           <button class="del"  @click="del" :data-uids="item.Cid">删除</button>
        </div>
        <van-submit-bar
            :price="sumtotal"
            button-text="提交订单"
            @submit="onSubmit"
            >
           <input type="checkbox" v-model="put" @click="selectAll">全选
        </van-submit-bar>
    </div>
</template>
<script>
import { Toast } from 'vant'
import axios from "axios"
export default {
    data(){
        return{
         list1:[],
         put:false
        }
    },
    methods: {
        onClickLeft() {
            this.$router.push("/shopp");
        },
        shopp(){
            this.$router.push("/shopp");
        },
        list(){
            this.$router.push("/list");
        },
        search(){
            this.$router.push("/search");
        },

        onSubmit(event){
             Toast.success("购买成功成功");
            this.$router.push("/success");
        },
        del(event){
            var cid=event.target.dataset.uids;
            console.log(cid);
            var url="del?cid="+cid
            this.axios.get(url).then(res=>{
                  if(res.data.code>0){
                      Toast.success('删除成功');
                      this.cart(); 
                  }
            })
            .catch(err=>{
                console.log(err);
            })
        },
      cart(){
       var url = "findcart";
       this.axios.get(url).then(res=>{
         if(res.data.code==-1){
           Toast.fail('请登录');
           return;
         }else{
           this.list1=res.data.data;
         }
       })
      },
      itemchange(){
            var sum=0;
            for(var item of this.list1){
                if(item.cd){
                    sum++;
                }
            }
            if(sum==this.list1.length){
                this.put = true;
            }else{
                this.put= false;
            }
      },
      selectAll(event){
           var all=event.target.checked;
            for(var item of this.list1){
                item.cd=all;
            }
      }
    },
    created() {
        this.cart()
    },
    computed:{
        sumtotal(){
            var sum=0;
            for(var s of this.list1){
                sum+=s.CPrice*s.Count*100;
            }
            return sum;
        }
    }
}
</script>
<style scoped>
    .cart-item{
        display:flex;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #ccc;
        margin-top:25px;
    }
    .leftText{
        display:flex;
        align-items:center;
        margin-bottom:50px;
    }
    .lname{
    color:#333;
    font-size:15px;
}
/*4.修饰商品价格*/
.price{
    margin-left:10px; 
    font-size:15px; /*与名称间距*/
    color:red;
}
.count{
    margin-left:30px;
    color:#555;
    font-size:10px;
}
.cpics{
    width:100px;
    height:100px;
}
.del{
    font-size:10px;
    width:50px;
    height:30px;
    background-color:#f00;
    border:0;
    color:#fff;
    border-radius:7px;
    margin-bottom:40px;
}
</style>