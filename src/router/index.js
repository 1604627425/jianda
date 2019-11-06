import Vue from 'vue'
import Router from 'vue-router'
import ShoppingWill from '@/components/ShoppingWill'
import login from '@/components/pages/login'
import list from '@/components/pages/list'
import search from '@/components/pages/search'
import cart from '@/components/pages/cart'
import details from '@/components/pages/details'
import mydemo from '@/components/pages/mydemo'
import success from '@/components/pages/success'
import error from '@/components/pages/404.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',name: 'ShoppingWill',component: ShoppingWill},
    {path:'/shopp',name: 'ShoppingWill',component: ShoppingWill},
    {path:'/login',name:'login',component:login},
    {path:'/list',name:'list',component:list},
    {path:'/search',name:'search',component:search},
    {path:'/cart',name:'cart',component:cart},
    {path:'/details',name:'details',component:details},
    {path:'/mydemo',name:'mydemo',component:mydemo},
    {path:'/success',name:'success',component:success},
    {path:'*',name:"error",component:error}
  ]
})
