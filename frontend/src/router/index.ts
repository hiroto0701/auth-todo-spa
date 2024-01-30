import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // ページ遷移のタイミングで一律最上部にスクロール
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/view/:id',
      name: 'viewer',
      component: () => import('@/components/TaskViewer.vue')
    },
    {
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
})

export default router
