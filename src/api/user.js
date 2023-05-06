/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-30 12:25:24
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-05 15:58:49
 * @FilePath: \vue-admin-template\src\api\user.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { request } from "@/utils/request";
const token = localStorage.getItem('token')
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
export const bookList = (data) => {
    return request({
        url: '/articles',
        method: 'GET',
        params: data,
        headers: { "Authorization": `${token}` }
    })
}

// 删除图书
export const deleteBook = (id) => {
    return request({
        url: `/articles/delete/${id}`,
        method: 'DELETE',
        headers: { "Authorization": `${token}` }
    })
}

// 修改图书
export const putBook = (data, id) => {
    return request({
        url: `/articles/edit/${id}`,
        method: 'PUT',
        data,
        headers: { "Authorization": `${token}` }
    })
}