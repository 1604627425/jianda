<template>
    <div>
         <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="error">{{uname}}</div>
         <div class="prompt_text">
          <span id="num">{{count}}</span>
           秒后跳转至首页
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            uname:"404页面正在开发",
            count:5
        }
    },
     created(){
        //根据需求确定在哪里调用
        this.goGrdoupRecor()
    },
    methods:{
        goGrdoupRecor(){
            const TIME_COUNT = 5;
            if(!this.timer){
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(()=>{
                if(this.count > 0 && this.count <= this.count){
                    this.count--;
                }else{
                    this.show = true;
                    clearInterval(this.timer);
                    this.timer = null;
                    //跳转的页面写在此处
                    this.$router.push("/shopp");    
                }
            },1000)
          }
        },
        onClickLeft(){
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
    .error{
        text-align:center;
        font-size:30px;
        color:#f00;
        margin-top:350px;
    }
    .prompt_text{
        text-align:center;
        color:#f00;
    }
</style>