<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-04 17:37:20
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-05 17:03:18
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
        <el-button link type="primary" size="small" @click="putData(row)"
          >编辑</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-dialog v-model="isShow" title="Tips" width="30%" draggable>
    <el-form-item
      label="标题"
      prop="标题"
      :rules="[{ required: true, message: '请填写内容' }]"
    >
      <el-input v-model="from.title" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item
      label="内容"
      prop="内容"
      :rules="[{ required: true, message: '请填写内容' }]"
    >
      <el-input v-model="from.body" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item
      label="介绍"
      prop="介绍"
      :rules="[{ required: true, message: '请填写内容' }]"
    >
      <el-input v-model="from.content" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item
      label="类型"
      prop="类型"
      :rules="[{ required: true, message: '请填写内容' }]"
    >
      <el-input v-model="from.type" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item
      label="标签"
      prop="标签"
      :rules="[{ required: true, message: '请填写内容' }]"
    >
      <el-input v-model="from.tags" type="text" autocomplete="off" />
    </el-form-item>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="noPut">取消修改</el-button>
        <el-button type="primary" @click="goPut"> 提交修改 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent } from "vue";
import { putBook } from "@/api/user";
export default defineComponent({
  data() {
    return {
      id: "",
      isShow: false,
      from: {
        title: "",
        content: "",
        type: "",
        tags: [],
        body: "",
      },
    };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  emits: ["delete"],
  methods: {
    handleDelete(book) {
      this.$emit("delete", book);
    },
    putData(data) {
      console.log(data);
      this.isShow = true;
      this.from.body = data.body;
      this.from.content = data.content;
      this.from.title = data.title;
      this.from.type = data.type;
      this.from.tags = data.tags;
      this.id = data._id;
      console.log(this.from);
    },
    // 清除全局定义
    clear() {
      this.from.body = "";
      this.from.content = "";
      this.from.title = "";
      this.from.type = "";
      this.from.tags = [];
      this.id = "";
    },
    // 提交表单
    async goPut() {
      const putData = await putBook(this.from, this.id);
      console.log(putData);
    },
    // 取消编辑并清除
    noPut() {
      this.clear();
      this.isShow = false;
    },
  },
});
</script>
