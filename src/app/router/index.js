import { createRouter, createWebHistory } from 'vue-router'
import {MainView, BookView} from '@/pages'

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainView
  },
  {
    path: '/book/:id',
    name: 'book',
    component: BookView,
    props: true,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
