import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import SignInPage from '@/views/SignInPage.vue'

const routes = [
  { path: '/', name: 'home', component: HomePage },
  { path: '/signin', name: 'signin', component: SignInPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
