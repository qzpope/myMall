 /* jshint esversion: 6 */
import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import ShoppingMall from '@/components/pages/ShoppingMall';
import Register from '@/components/pages/Register'
import Login from '@/components/pages/Login'
import Goods from '@/components/pages/Goods'
import CategoryList from '@/components/pages/CategoryList'
import Cart from '@/components/pages/Cart'
import Main from '@/components/pages/Main'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShoppingMall',
      component: ShoppingMall
    },
    {
      path: '/register',
      name:'Register',
      component:Register
    },
    {
      path: '/login',
      name:'Login',
      component:Login
    },
    {
      path: '/Goods',
      name:'Goods',
      component:Goods
    },
    {
      path: '/categoryList',
      name:'CategoryList',
      component:CategoryList
    },
    {
      path: '/cart',
      name:'Cart',
      component:Cart
    },
    {
      path: '/main',
      name:'Main',
      component:Main,
      children:[
        {path: '/',name: 'ShoppingMall',component: ShoppingMall},
        {path: '/categoryList',name: 'CategoryList',component: CategoryList},
        {path: '/cart',name: 'Cart',component: Cart},
      ]
    },
  ]
});
