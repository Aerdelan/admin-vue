/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-30 12:25:24
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-04 15:06:30
 * @FilePath: \vue-admin-template\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from "@/utils/request";

// 登录
export const login = (data) => {
    return request({
        url: '/login',
        method: 'POST',
        data
    })
}

// 登录
export const register = (data) => {
    return request({
        url: '/register',
        method: 'POST',
        data
    })
}

// 返回图书列表
export const bookList = (token,data) => {
    return request({
        url: '/articles',
        method: 'GET',
        params:data,
        headers: { "Authorization": `${token}` }
    })
}