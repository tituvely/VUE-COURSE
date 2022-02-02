import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';

Vue.use(VueRouter);

const router = new VueRouter({
  // '#'을 제거하기 때문에 서버에는 추가적인 url 설정을 해줘야 함
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/add',
      component: () => import('@/views/PostAddPage.vue'),
      meta: { auth: true },
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostEditPage.vue'),
      meta: { auth: true },
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  // 인증이 필요한 페이지이고, 사용자가 로그인 하지 않았을 때
  if (to.meta.auth && !store.getters.isLogin) {
    next('/login');
    return;
  }
  next();
});

export default router;
