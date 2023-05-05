<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-05-04 17:37:48
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-05 09:54:06
 * @FilePath: \admin-vue-template\src\components\Pagination.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="example-pagination-block">
    <el-pagination
      layout="prev, pager, next"
      :current-page="currentPage"
      :total="total"
      :pager-count="5"
      @current-change="handleChange"
      :page-size="pageSize"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  emits: ["change"],
  methods: {
    handleChange(currentPage) {
      this.$emit("change", { currentPage });
      console.log(currentPage);
    },
  },
});
</script>
<style lang="scss" scoped>
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
