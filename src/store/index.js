/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-04 16:55:42
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-08 11:34:09
 * @FilePath: \admin-vue-template\src\store\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createStore } from 'vuex'
import config from './modules/config'
import user from './modules/user'
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {

  },
  actions: {
  },
  modules: {
    config,
  }
})
