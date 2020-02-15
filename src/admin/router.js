import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import login from './components/pages/login.vue';
import works from './components/pages/works.vue';
import about from './components/pages/about.vue';
import reviews from './components/pages/reviews.vue';

const routes =[
  {
    path: '/admin',
    component : login,
    meta: {
      public: true
    }
  },
  {
    path: '/works',
    component : works,
  },
  {
    path: '/about',
    component : about
  },
  {
    path: '/reviews',
    component : reviews
  }
];


export default new VueRouter({routes, mode: 'history' });