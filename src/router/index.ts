import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/HomeView.vue'),
      children: [
        {
          path: '/employee',
          component: () => import('@/views/home/EmployeeView.vue')
        },
        {
          path: '/category',
          component: () => import('@/views/home/CategoryView.vue')
        },
        {
          path: '/dish',
          component: () => import('@/views/home/DishView.vue')
        },
        {
          path: '/setmeal',
          component: () => import('@/views/home/SetMealView.vue')
        },
        {
          path: '/order',
          component: () => import('@/views/home/OrderView.vue')
        }
      ]
    }
  ]
})

export default router
