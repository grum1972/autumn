import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


// import works from './components/pages/works.vue';
// import about from './components/pages/about.vue';
// import reviews from './components/pages/reviews.vue';

const routes =[
  {
    path: '/login',
    component : () => import('./components/pages/login.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/works',
    component : () => import('./components/pages/works.vue'),
    meta: {
      title: 'Блок Работы'
    }
  },
  {
    path: '/',
    component : () => import('./components/pages/about.vue'),
    meta: {
      title: 'Блок Обо мне'
    }
  },
  {
    path: '/reviews',
    component : () => import('./components/pages/reviews.vue'),
    meta: {
      title: 'Блок Отзывы'
    }
  }
];


export default new VueRouter({base:'/admin/', routes });