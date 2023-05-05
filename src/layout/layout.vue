<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-29 22:19:13
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-04 11:35:35
 * @FilePath: \vue-admin-template\src\layout\layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">图书管理系统</el-header>
      <el-container>
        <el-aside width="10%">
          <el-tabs
            tab-position="left"
            style="height: 200px"
            class="demo-tabs"
            @tab-click="active"
          >
            <el-tab-pane label="bookList" name="bookList"></el-tab-pane>
            <el-tab-pane label="myBook" name="myBook"></el-tab-pane>
          </el-tabs>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = ref(useRouter());
const active = (name) => {
  console.log(name.props.name);
  if (name.props.name == "bookList") {
    router.value.push("/bookList");
  }
  if (name.props.name == "myBook") {
    router.value.push("/myBook");
  }
};
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  border-bottom: 4px solid rgb(196, 197, 197);
  margin-bottom: 1rem;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
