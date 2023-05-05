<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-04 17:37:20
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-04 17:56:12
 * @FilePath: \admin-vue-template\src\components\BookTable.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <el-table :data="data" style="width: 100%" v-if="data">
    <el-table-column fixed prop="createdAt" label="时间" width="150" />
    <el-table-column prop="title" label="书名" width="120" />
    <el-table-column prop="content" label="作者" width="120" />
    <el-table-column prop="body" label="简介" width="120" />
    <el-table-column prop="tags" label="标签" width="600" />
    <el-table-column prop="type" label="类型" width="120" />
    <el-table-column fixed="right" label="操作" width="120">
      <template #default="{ row }">
        <el-button link type="primary" size="small" @click="handleDelete(row)"
          >删除</el-button
        >
        <el-button link type="primary" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    data: {
      //   type: Array,
      required: true,
    },
  },
  emits: ["delete"],
  methods: {
    handleDelete(book) {
      this.$emit("delete", book);
    },
  },
});
</script>
