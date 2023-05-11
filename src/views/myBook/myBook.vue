<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-04 16:55:43
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-10 15:46:01
 * @FilePath: \admin-vue-template\src\views\myBook\myBook.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <UploadImage />
  </div>
  <div class="editor">
    <wangEditor />
  </div>
</template>
<script>
import UploadImage from "../../components/UploadImage.vue";
import wangEditor from "../../components/wangEditor.vue";
export default {
  components: { UploadImage, wangEditor },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 500px;
}
</style>
