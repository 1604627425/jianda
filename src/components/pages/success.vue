<template>
    <div class="big">
        <van-nav-bar
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
        <div class="success">购买成功!</div>   
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
            count:10,//倒计时
        }
    },
    created(){
        //根据需求确定在哪里调用
        this.goGrdoupRecor()
    },
    methods:{
        onClickLeft(){
            this.$router.push('/shopp');
        },
          goGrdoupRecor(){
            const TIME_COUNT = 10;
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
    }
}
</script>
<style scoped>
*{
    margin:0;
    padding:0;
}
.big{
    text-align:center;
    
}
.success{
    color:#69a3e6;
    font-size:40px;
    font-weight: bold;
    margin-top:300px;
}
.prompt_text{
    color:#f00;
    font-size:15px;
}
</style>