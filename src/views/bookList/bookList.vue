<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-02 15:11:00
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-04 15:21:59
 * @FilePath: \vue-admin-template\src\views\bookList\bookList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-table :data="bookLists.data" style="width: 100%" v-if="bookLists.data">
    <el-table-column fixed prop="createdAt" label="时间" width="150" />
    <el-table-column prop="title" label="书名" width="120" />
    <el-table-column prop="content" label="作者" width="120" />
    <el-table-column prop="body" label="简介" width="120" />
    <el-table-column prop="tags" label="标签" width="600" />
    <el-table-column prop="type" label="类型" width="120" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default>
        <el-button link type="primary" size="small" @click="handleClick"
          >删除</el-button
        >
        <el-button link type="primary" size="small">Edit</el-button>
      </template>
    </el-table-column>
  </el-table>
  <div class="example-pagination-block">
    <el-pagination
      layout="prev, pager, next"
      :current-page="page"
      :page-size="pageSize"
      :total="total"
      :pager-count="5"
      @prev-click="prev"
      @next-click="next"
    >
    </el-pagination>
  </div>
</template>

<script setup>
import { bookList } from "@/api/user";
import { ref, onMounted } from "vue";
const bookLists = ref({});
const total = ref();
const page = ref(1);
const pageSize = ref(5);
const dataFrom = ref({
  page: 1,
});
const handleClick = () => {
  console.log("click");
};
const getBookList = async () => {
  const data = await bookList(localStorage.getItem("token"));
  bookLists.value = data.data;
  total.value = data.data.meta.total;
};
// 下一页
const next = async () => {
  dataFrom.value.page = page.value + 1;
  const data = await bookList(localStorage.getItem("token"), dataFrom.value);
  bookLists.value = data.data;
  page.value = data.data.meta.page;
};
// 上一页
const prev = async () => {
  dataFrom.value.page = page.value - 1;
  const data = await bookList(localStorage.getItem("token"), dataFrom.value);
  bookLists.value = data.data;
  page.value = data.data.meta.page;
};
onMounted(() => {
  getBookList();
});
</script>

<style lang="scss" scoped>
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
