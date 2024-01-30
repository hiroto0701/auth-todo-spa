import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/store';
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // ページ遷移のタイミングで一律最上部にスクロール
    return { top: 0 };
  },
  routes: [
    {
      meta: { title: 'タスク一覧', requiresAuth: true },
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      meta: { title: 'タスク詳細', requiresAuth: true },
      path: '/view/:id',
      name: 'viewer',
      component: () => import('@/components/TaskViewer.vue')
    },
    {
      meta: { title: 'タスク登録', requiresAuth: true },
      path: '/register',
      name: 'register',
      component: () => import('@/components/TaskRegister.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/components/LoginForm.vue')
    }
  ]
});

router.beforeEach((to, from, next) => {
  document.title = (to.meta.title ? to.meta.title + ' | ' : '');
  const authStore = useAuthStore();
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!authStore.isAuthenticated) {
      // 未ログインならばログインページにリダイレクト
      next({ name: 'login' });
    } else {
      // ログイン済みならばそのまま進む
      next();
    }
  } else {
    // requiresAuth メタフィールドがない場合はそのまま進む
    next();
  }
});

export default router
