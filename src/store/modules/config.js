/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-08 11:16:24
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-08 11:51:15
 * @FilePath: \admin-vue-template\src\store\components\color.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const config = ({
    namespaced: true,
    state: {
        color:localStorage.getItem('configColor')?localStorage.getItem('configColor'): 'black',
    },
    getters: {
    },
    mutations: {
        getColor(state, data) {
            console.log(state, data);
            state.color = data
            localStorage.setItem('configColor', data)
            state.color = localStorage.getItem('configColor')
            console.log(state.color);
        }
    },
    actions: {
    },
    modules: {
    }
})
export default config