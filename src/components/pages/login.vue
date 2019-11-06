<template>
    <div>
        <h1>欢迎登录健大大商城</h1>
        <router-link to="shopp">
            <span>返回首页</span>
        </router-link>
        <van-tabs v-model="active">
        <van-tab title="登录">
            <input type="text" placeholder="请输入用户" v-model="uname" class="uname">
            <input type="password" placeholder="请输入密码" v-model="upwd" class="upwd">
            <button  style="width:100%;" class="login" @click="login">登录</button>
        </van-tab>
        <van-tab title="注册">
            <input type="text" placeholder="填写手机号/用户" v-model="uname" class="uname">
            <input type="password" placeholder="填写密码" v-model="upwd" class="upwd">
            <button  style="width:100%;" class="login" @click="reg">注册</button>
        </van-tab>
</van-tabs>
    </div>
</template>
<script>
import { Toast } from 'vant';
export default {
    data(){
        return{
            active:0,
            uname:"",
            upwd:""
        }
    },
    methods:{
        login(){
             //功能:完成用户登录操作
            //1.获取用户输入的用户名
            var u=this.uname;
            //2.获取用户输入密码
            var p=this.upwd;
            //3.创建正则表达式  3~12字母数字
            var reg=/^[a-z0-9]{3,12}$/i;
            //4.验证用户名
            if(reg.test(u)==false){
                //5.验证不成功  提示消息
               Toast.fail('用户格式不正确');
                return;
            }
            //6.验证密码
            if(reg.test(p)==false){
                //7.验证不成功  提示消息
              Toast.fail('密码格式不正确');
               return;
            }
            //8.发送ajax请求
            var url="login";
            var obj={uname:u,upwd:p};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res.data.code);
                if(res.data.code>0){
                    sessionStorage.setItem("unames",u)
                    Toast.success('登陆成功');
                    this.$router.push("/shopp");
                }else{
                    Toast.fail("登陆失败");
                }
            })
        },
        reg(){
             //功能:完成用户登录操作
            //1.获取用户输入的用户名
            var u=this.uname;
            //2.获取用户输入密码
            var p=this.upwd;
            //3.创建正则表达式  3~12字母数字
            var reg=/^[a-z0-9]{3,12}$/i;
            //4.验证用户名
            if(reg.test(u)==false){
                //5.验证不成功  提示消息
               Toast.fail('用户格式不正确');
                return;
            }
            //6.验证密码
            if(reg.test(p)==false){
                //7.验证不成功  提示消息
              Toast.fail('密码格式不正确');
               return;
            }
            //8.发送ajax请求
            var url="reg";
            var obj={uname:u,upwd:p};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res.data.code);
                if(res.data.code>0){
                    Toast.success('注册成功');
                    this.$router.go("/login");
                }else{
                    Toast.fail('账号密码重复');
                   return;
                }
            })
        }
    },
    created() {
     if(sessionStorage.unames){
         Toast.success("您以登录，请不要重复登录")
        this.$router.push("/shopp");
        }
    },
}
</script>
<style  scoped>
    *{
        margin:0;
        padding:0;
    }
    h1{
        font-size:30px;
        margin-top:3rem;
        display:inline-block;
    }
    .uname{
        border:0;
        width:100%;
        height:3rem;
        line-height:3rem;
        margin-top:1rem;
        text-align:center;
    }
    .upwd{
        border:0;
        width:100%;
        height:3rem;
        line-height:3rem;
        text-align:center;
    }
    span{
        font-size:12px;
        color:#ccc;
        margin-left:2rem;
    }
    .login{
        height:40px;
        line-height:40px;
        text-align:center;
        color:#fff;
        background-color:#f00;
        border:0;
    }
</style>