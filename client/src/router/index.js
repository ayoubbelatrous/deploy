import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ProductPage from '@/views/ProductPage.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Cart from '@/views/Cart.vue'
import Admin from "@/views/Admin.vue";


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'ProductPage',
    component: ProductPage
  },
  {
    path: '/register',
    name: 'Register',
    component:Register
  },
  {
    path: '/login',
    name: 'Login',
    component:Login
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/admin/:page',
    name: 'Admin',
    component:Admin
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
