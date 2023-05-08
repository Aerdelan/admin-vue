<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-29 22:19:13
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-08 11:37:54
 * @FilePath: \vue-admin-template\src\layout\layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <p>图书管理系统</p>
        <div class="headerLeft">
          <div
            v-for="(item, index) in color"
            :key="index"
            class="size"
            @click="getColor(item)"
          >
            {{ item }}
            <!-- <div
              style="background-color: {{item}};width: 20px;height: 20px;"
            ></div> -->
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="10%">
          <el-tabs
            tab-position="left"
            style="height: 200px"
            class="demo-tabs"
            @tab-click="active"
            v-model="bookList"
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
const color = ref(["red", "black", "yellow", "orange", "blue", "green"]);
const router = ref(useRouter());
const bookList = ref("bookList");
const active = (name) => {
  console.log(name.props.name);
  if (name.props.name == "bookList") {
    router.value.push("/bookList");
  }
  if (name.props.name == "myBook") {
    router.value.push("/myBook");
  }
};
const getColor = (color) => {
  // console.log(store.state.color);
  store.commit("config/getColor", color);
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  width: 100%;
  height: 3rem;
  border-bottom: 4px solid rgb(196, 197, 197);
  margin-bottom: 1rem;
  align-items: center;
  justify-content: space-between;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.headerLeft {
  display: flex;
  align-items: center;
  .size {
    margin: 1rem;
    cursor: pointer;
  }
}
.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
</style>
