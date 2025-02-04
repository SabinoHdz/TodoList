import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/components',
      name: 'components',
      component: () => import('@/views/ComponentsExamples.vue'),
    },
    {
      path: '/about',
      name: 'about ',
      component: () => import('@/views/AboutProyect.vue'),
    },
  ],
})

export default router
