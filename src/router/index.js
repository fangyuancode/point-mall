import Vue from 'vue'
import VueRouter from 'vue-router'

// 把这段代码直接粘贴到router/index.js中的Vue.use(VueRouter)之前
// 把原先的push方法改成新的。对每一个push方法，进行catch。
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function (location) {
  return originalPush.call(this, location).catch(err => { })
};

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: "/home",
  },
  {
    path: '/home',
    name: 'home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import("@/views/goods.vue")
  },
  {
    path: '/user',
    name: 'user',
    component: () => import("@/views/user.vue")
  },
  {
    path: '/order',
    name: 'order',
    component: () => import("@/views/order.vue")
  },
  {
    path: '/free',
    name: 'free',
    component: () => import("@/views/free.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
