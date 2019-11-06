<template>
  <div>
    <div class="search-bar" style="width:100%;">
      <van-row>
        <van-col span="3">
          <router-link to="/list">
            <img :src="location" width="100%" class="location-icon" />
          </router-link>
        </van-col>
        <van-col span="16">
          <input type="text" class="search-input" icon="search" @click="search_input"/>
          <van-icon name="search" />
        </van-col>
        <van-col span="5">
          <router-link to="login" v-if="show" class="login">登录</router-link>
          <router-link to="mydemo" v-else  class="login">{{uname}}</router-link>
        </van-col>
      </van-row>
    </div>
       <!--轮播图-->
    <Caousel></Caousel>
    <div class="tabbar">
      <router-link to="*">
        <div v-for="(item,i) of tabbar" :key="i" class="tabbar-img">
          <img :src="item.bar" />
          <span>{{item.sn}}</span>
        </div>
      </router-link>
      <router-link to="*">
        <div v-for="(item,i) of tabbar1" :key="i" class="tabbar-img">
          <img :src="item.tar" />
          <span>{{item.sn}}</span>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/shopp">
       <img :src="ggt" alt="" width="100%">
      </router-link>
    </div>
    <commodity></commodity>
    <Footer></Footer>
  </div>
</template>
<script>
import Footer from './pages/footer'
import Caousel from './pages/caousel'
import commodity from './pages/commodity'
export default {
  data() {
    return {
      show:false,
      uname:sessionStorage.getItem("unames"),
      location: require("../assets/img/location.png"),
      tabbar: [
        { bar: require("../assets/img/01.png"), sn: "母婴玩具" },
        { bar: require("../assets/img/02.png"), sn: "苏宁拼购" },
        { bar: require("../assets/img/03.png"), sn: "签到有礼" },
        { bar: require("../assets/img/04.png"), sn: "生活家电" },
        { bar: require("../assets/img/05.png"), sn: "爆款手机" },
      ],
      tabbar1:[
        { tar: require("../assets/img/06.png"), sn: "赚钱投资" },
        { tar: require("../assets/img/07.png"), sn: "苏宁超市" },
        { tar: require("../assets/img/08.png"), sn: "苏宁生鲜" },
        { tar: require("../assets/img/09.png"), sn: "苏宁家电" },
        { tar: require("../assets/img/10.png"), sn: "限时抢购" }
      ],
      ggt:require("../assets/img/gg.jpg"),
    }
  },
  methods:{
    search_input(){
      this.$router.push("/search");
    },
  },
  components:{
    Footer,
    Caousel,
    commodity
  },
  created() {
    if(!sessionStorage.unames){
      this.show=true
    }
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.search-bar {
  height: 2.2rem;
  background-color: #f00;
  line-height: 2.2rem;
  overflow: hidden;
  position:fixed;
  left:0;
  top:0;
  z-index:1;
}
.search-input {
  width: 100%;
  height: 1.3rem;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-bottom: 1px solid #fff !important;
  background: #f00;
  color: #fff;
}
.location-icon {
  width: 80%;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.tabbar a{
    margin:.5rem .3rem .3rem .3rem;
    font-size:12px;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-around;
    color:#000;
}
.tabbar-img{
  width:50px;
}
.tabbar-img>img{
    width:42px;
    height:42px;
}
.login{
  width:60px;
  height:30px;
  text-align:center;
  line-height:30px;
  font-size:17px;
  color:#fff;
  display:inline-block;
  background:#0bdbae;
  border:0;
  margin-left:10px;
  border-radius:7%;
}
</style>