// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Button,
  Row,
  Col,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  List,
  Field,
  NavBar,
  Tab,
  Tabs,
  PullRefresh,
  Stepper,
  Tabbar,
  TabbarItem,
} from 'vant'

Vue.config.productionTip = false
Vue.use(Tabbar).use(TabbarItem).use(Stepper).use(PullRefresh).use(Tab).use(Tabs).use(Field).use(Button).use(Row).use(Col).use(Search).use(Swipe).use(SwipeItem).use( Lazyload).use(List).use(NavBar);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
