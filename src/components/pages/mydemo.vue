<template>
    <div>
        <div class="mydemo_header">
            <div class="mydemo_tx">
                <img :src="images" >
                <p>{{unames}}</p>
            </div>
            <span class="logins" v-if="show">
                <router-link to="/login">登录</router-link> 
            </span>
        </div>
        
        <van-collapse v-model="activeName" accordion>
            <van-collapse-item title="我的收藏" name="1">
            </van-collapse-item>
            <van-collapse-item title="我的客服" name="2"></van-collapse-item>
            <van-collapse-item title="推荐有奖" name="3"></van-collapse-item>
            <van-collapse-item title="商务合作" name="4"></van-collapse-item>
            <van-collapse-item title="修改信息" name="5"></van-collapse-item>
            <van-collapse-item title="设置" name="6"></van-collapse-item>
        </van-collapse>
        <van-button type="danger" style="width:100%;" @click="Loginzx">注销</van-button>
        <Footer></Footer>
    </div>
</template>
<script>
import Footer from "./footer"
import {Toast} from "vant"
export default {
    data(){
        return{
            activeName: '1',
            show:false,
            images:require("@/assets/img/wyz.jpg"),
            unames:"tyj"
        }
    },
    methods:{
       Loginzx(){
        this.axios.get("LoginZx").then(res => {
        if (res.data.code == 1) {
            sessionStorage.removeItem("unames");
            sessionStorage.removeItem("uid");
            this.show=true;
            this.images=require("@/assets/img/wdl.png");
            this.unames="";
            Toast.success("注销成功");
        }
      });
       }
    },
    components:{
        Footer
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.mydemo_header{
    width:100%;
    height:250px;
    background-image:linear-gradient(left,#f0f,#ff0);
}
.mydemo_tx>img{
    width:120px;
    height:120px;
    border-radius:50%;
    margin-top:70px;
    margin-left:140px;
}
.mydemo_tx>p{
    margin-left:50%;
    color:#f00;
}
.logins>a{
    font-size:15px;
    color:#fff;
    width:120px;
    height:30px;
    line-height: 30px;
    text-align:center;
    display:inline-block;
    margin-left:37%;
    background-image:linear-gradient(left,#f00,#f0f);
    border-radius:5%;
}
</style>