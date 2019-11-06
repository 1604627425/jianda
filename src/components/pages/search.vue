<template>
    <div>
        <div class="list">
            <van-nav-bar left-arrow @click-left="onClickLeft"/>
            <input type="text" class="list_input" placeholder="输入商品" v-model="put"  @keyup.13="search">
            <img src="../../assets/img/搜索.png" alt="" class="list_img">
            <button class="list-btn" 
            @click="search">搜索</button>
        </div>
        <div class="search">
            <span >热门搜索</span>
        </div>
        <div class="rm" v-for="(item,i) of list" :key="i"> 
            <img :src="'http://127.0.0.1:5050/'+item.gpic" class="rm_img" />
            <div class="rm_gg">
                <div class="rm_gspec">{{item.gspec}}</div>
                <div class="rm_gname">{{item.gname}}</div>
                <div class="rm_gprice">￥{{item.gprice}}</div>
                <router-link :to="'/details?gid='+item.gid">
                    <button class="rm_button">查看详情</button>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            list:[],
            put:""
        }
    },
    methods:{
       onClickLeft(){
           this.$router.go(-1);
       },
       search(){
        var put=this.put;
        if(put==""){
            Toast.fail("请输入商品名称")
            return;
        }
        if(put.trim()==""){
            Toast.fail("请输入商品名称")
            return;
        }
        var url = "mhsearch?keyword="+put;
        this.axios.get(url).then(res=>{
            this.list=res.data.data;
        })
        .catch(err=>{
            console.log(err);
        })
       }
    }
}
</script>
<style scoped>
        .list{
        position:relative;
    }
    .list_input{
        position:absolute;
        left:40px;
        top:8px;
        z-index:1;
        height:30px;
        width:70%;
        border:1px solid #ccc;
        border-radius:5px;
        text-align:center;
    }
    .list_img{
        position:absolute;
        left:40px;
        top:10px;
        height:30px;
        z-index:2;
    }
    .list-btn{
        background-color:#fff;
        height:30px;
        border:0;
        font-size:18px;
        position:absolute;
        right:10px;
        top:10px;
        width:60px;
        z-index:3;
    }
    .search{
        color:#ccc;
        font-size:15px;
        margin:20px 0 0 20px;
    }
    .rm{
        display:flex;
        margin-top:10px;
        font-size:15px;
        padding:10px;
    }
    .rm_gg{
        width:100%;
        border-bottom:1px solid #d6d2d2;
        background-color:#e8eeee;
    }
   .rm_img{
       width:130px;
       height:130px;
       border:1px solid #dfb031;
       padding:18px;
       box-shadow:-10px -10px 100px 5px #ccc;
       border-radius:5%;
   }
   .rm_gspec{
       color:#555;
       margin:10px 0 0 10px;
   }
   .rm_gname{
       margin:10px 0 0 10px;
       color:#eb9a04;
   }
   .rm_gprice{
       color:#F60;
       margin:10px 0 0 10px;
   }
   .rm_button{
       background-color:#F60;
       border:0;
       width:170px;
       margin:5px 0 5px 10px;
       color:#fff;
       font-size:15px;
       height:30px;
       border-radius:5%;
   }
</style>
