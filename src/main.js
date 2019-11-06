// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from 'axios'

//添加第二个参数，请求服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:5050/";
Vue.prototype.axios=axios;
//配置保存session信息
axios.defaults.withCredentials=true;
Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
