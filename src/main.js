/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-29 22:07:09
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-06 11:22:19
 * @FilePath: \vue-admin-template\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/styles/index.scss'
import '@/assets/styles/index.scss'
createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
