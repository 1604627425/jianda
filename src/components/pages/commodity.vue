<template>
    <div class="product-app">
      <div  class="goods-item" v-for="(item,i) of list" :key="i">
        <router-link :to="'/details?Gid='+item.Gid">
          <img :src="'http://127.0.0.1:5050/'+item.GPic" />
          <div class="product-nm">{{item.GName}}</div>
          <div class="product-pc">{{item.GSpec}}</div>
          <div class="product-rc">￥{{item.GPrice}}</div>
        </router-link>
        <van-button class="product-btn" type="primary"
          @click="addCart"
          :data-gid="item.Gid"
          :data-gname="item.GName"
          :data-gprice="item.GPrice"
          :data-gpic="item.GPic"
        >加入购物车</van-button>
      </div> 
      <van-button type="danger" class="btn" @click="loadMore">加载更多</van-button>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            list:[],
            pno:0
        }
    },
    created() {
        this.loadMore();
    },
    methods:{
    loadMore(){
       //1:创建url
       var url = "product"
       //2:创建obj参数 保存多页
       this.pno++;
       var obj = {pno:this.pno};
       //3:发送axios请求
       this.axios.get(url,{params:obj}).then(res=>{
         //console.log(res);
         //4:接收返回结果并且显示
         //concat
         //this.list = res.data.data;
         //拼接上一页和下一页数组
         var rows = this.list.concat(res.data.data);
         //赋值
         this.list = rows;
       })
     },
     addCart(event){
       var gid=event.target.dataset.gid
       var gpic=event.target.dataset.gpic;
       var gname = event.target.dataset.gname;
       var gprice =event.target.dataset.gprice;
      //  console.log(gpic,gname,gprice);
       var url = "addcart";
       var obj = {gid,gname,gprice,gpic};
       this.axios.get(url,{params:obj}).then(res=>{
         if(res.data.code==-1){
           Toast.fail('请登录');
         }else{
          Toast.success('添加成功');
         }
       })
     }
    },
}
</script>
<style scoped>
.btn{
  width:100%;
  font-size:15px;
  margin-bottom:50px;
}

.product-app{
  display: flex;
  justify-content: space-between;
  flex-wrap:wrap;
  padding:4px;
}
.goods-item{
 width:49%;
 border:1px solid #ccc;
 border-radius: 5px;
 margin:2px 0;
 padding:2px;
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 min-height:230px;
}
.goods-item img{
  width:100%;
}
.product-nm{
    color:#ab813a;
    font-size:15px;
    text-align:center;
}
.product-pc{
    color:#f00;
    font-size:15px;
    text-align:center;
}
.product-rc{
    color:#f36404;
    font-size:15px;
    text-align:center;
}
.product-btn{
  width:100%;
  font-size:15px;
}
</style>