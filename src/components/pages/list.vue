<template>
    <div>
        <div class="list">
            <van-nav-bar left-arrow @click-left="onClickLeft"/>
            <input type="text" class="list_input" placeholder="输入商品"  @click="list_input">
            <img src="../../assets/img/搜索.png" alt="" class="list_img" >
        </div>
        <div class="sum">
            <van-sidebar v-model="activeKey">
                <div v-for="(item,i) of zfl" :key="i" class="sum_div">
                <van-sidebar-item :title="item.gdname" @click="zs(item.gdid)"/>
                </div>
             </van-sidebar>
            <div class="xfl">
                <ul>
                <li v-for="(item,i) of ej" :key="i">
                    <span class="xfl_span">
                      <img class="xfl_img" :src="'http://127.0.0.1:5050/'+item.Gimgs" >
                      <span class="xfl_name">{{item.GCName}}</span>
                    </span>
                </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data(){
      return{
        show:false,
        activeKey: 0,
        zfl:[],
        ej:[],
        list:[],
      }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    list_input(){
        this.$router.push("/search");
    },
     prev(){
      this.$router.go(-1)
    },
    showCont(){
      this.show=!this.show;
    },
    //商品总分类
    loadClass(){
      var url="class";
      this.axios.get(url).then(res=>{
        this.zfl=res.data;
        // console.log(this.zfl)
      }).then(this.zs(1))
    },
    //二级分类
    zs(e){
      var url="classify?gdid="+e;
      // console.log(url) 
      this.axios.get(url).then(res=>{
        this.ej=res.data;
      })
    },
  },
  created(){
    this.loadClass();
  }
}
</script>
<style  scoped>
    .list{
        position:relative;
    }
    .list_input{
        position:absolute;
        left:40px;
        top:8px;
        z-index:1;
        height:30px;
        width:85%;
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
    .sum{
      display: flex;
      flex-grow: row;
      width: 100%;
      background: #fff;
    }
    .sum_div{
      width:80px;
    }
    .xfl{
      width: 100%;
    }
   .xfl>ul{
     padding: 10px 0;
   }
   .xfl li{
    margin-bottom: 8px;
    width: 32%;
    float: left;
    text-align: center;
   }
   .xfl li a{
     display: flex;
    flex-direction: column;
    align-items: center;
   }
   .xfl_img{
    width: 100px;
    height:100px;
   }
   .xfl{
    color: #333;
    margin-top: 5px;
    font-size: 15px;
   }
   .xfl_name{
     color:#e48d0b;
   }
</style>