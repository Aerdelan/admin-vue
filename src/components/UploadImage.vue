<template>
  <el-upload
    action="#"
    list-type="picture-card"
    :auto-upload="false"
    :on-change="pushList"
    v-model:file-list="list"
  >
    <p>点击上传</p>
    <template #file="{ file }">
      <div>
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <p>查看大图</p>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <p>返回文件信息</p>
          </span>
          <span
            v-if="!disabled"
            class="el-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <p>删除</p>
          </span>
        </span>
      </div>
    </template>
  </el-upload>
  <el-dialog v-model="dialogVisible">
    <img :src="dialogImageUrl" alt="Preview Image" />
  </el-dialog>
</template>
<script setup>
import { ref } from "vue";
const dialogImageUrl = ref("");
const list = ref([]);
const dialogVisible = ref(false);
const disabled = ref(false);
// 添加进数组
const pushList = (file) => {
  list.value.push(file.url);
};
const handleRemove = (file) => {
  const num = list.value.indexOf(file);
  list.value.splice(num, 1);
};
const handlePictureCardPreview = (file) => {
  dialogImageUrl.value = file.url;
  dialogVisible.value = true;
};
const handleDownload = (file) => {
  console.log(file);
};
</script>
