/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-29 22:07:09
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-04 10:20:48
 * @FilePath: \vue-admin-template\src\router\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout/layout.vue'),
    children: [
      {
        path: '/bookList',
        name: 'bookList',
        component: () => import('../views/bookList/bookList.vue')
      },{
        path: '/myBook',
        name: 'myBook',
        component: () => import('../views/myBook/myBook.vue')
      }
    ]
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  }, {
    path: '/register',
    name: 'register',
    component: () => import('../views/register/register.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
