<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-04 16:55:43
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-05 10:00:49
 * @FilePath: \admin-vue-template\src\views\bookList\bookList.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <BookTable :data="bookLists.data" @delete="handleDelete" />
    <Pagination
      :current-page="page"
      :page-size="pageSize"
      :total="total"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import BookTable from "@/components/BookTable.vue";
import Pagination from "@/components/Pagination.vue";
import { bookList, deleteBook } from "@/api/user";
import { ref, onMounted } from "vue";

const bookLists = ref({});
const total = ref(0);
const page = ref(1);
const pageSize = ref(5);
const fromData = ref({
  page: page.value,
});
const loadBookList = async () => {
  const { data, meta } = await bookList(
    localStorage.getItem("token"),
    fromData.value
  );
  console.log(data);
  bookLists.value = data;
  total.value = data.meta.total;
};

const handleDelete = async (book) => {
  await deleteBook(book.id);
  await loadBookList();
};

const handleChange = async ({ currentPage }) => {
  page.value = currentPage;
  fromData.value.page = currentPage;
  const { data, meta } = await bookList(
    localStorage.getItem("token"),
    fromData.value
  );
  console.log(currentPage);
  bookLists.value = data;
  total.value = data.meta.total;
};

onMounted(loadBookList);
</script>
