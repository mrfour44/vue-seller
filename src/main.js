// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.config.productionTip = false;
const routes = [
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/ratings',
    component: ratings
  },
  {
    path: '/seller',
    component: seller
  }
];
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});
router.push('/goods');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  router,
  render: h => h(App)
});
