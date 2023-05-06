/*
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-29 22:07:09
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-06 14:41:53
 * @FilePath: \vue-admin-template\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// 设定path包
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      // 哪些文件自动引入，使用绝对路径
      // 需要是path.join来拼接完整路径
      patterns: [path.join(__dirname, './src/assets/styles/main.scss')]
    }
  }
})
