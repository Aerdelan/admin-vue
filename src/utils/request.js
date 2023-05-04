/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-30 12:26:15
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-01 18:19:49
 * @FilePath: \vue-admin-template\src\utils\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'

const request = axios.create({
    baseURL: 'http://www.gd-buy.cloud:5000'
})
export { request }