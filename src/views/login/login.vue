<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-30 10:07:20
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-08 14:21:00
 * @FilePath: \vue-admin-template\src\views\login\login.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="login-container">
    <el-form :model="data" class="from">
      <p>用户名</p>
      <el-input v-model="data.username" placeholder="请输入用户名"></el-input>
      <p>密码</p>
      <el-input
        v-model="data.password"
        type="password"
        placeholder="请输入密码"
      ></el-input>
      <el-button type="primary" @click="handleSubmit" class="button"
        >登录</el-button
      >
      <div class="logonGet" @click="getRegister">
        <p>没有账号？立即注册>></p>
      </div>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { login } from "@/api/user";
import { useRouter } from "vue-router";
const router = ref(useRouter());
const data = ref({
  username: "北极熊",
  password: "123456",
});
const handleSubmit = async () => {
  console.log(data.value);
  const loginData = await login(data.value);
  console.log(loginData);
  localStorage.setItem("token", loginData.data.token);
  if (loginData.status == 200) {
    router.value.push("/bookList");
  }
};
const getRegister = () => {
  router.value.push("/register");
};
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 30%;
  max-width: 500px;
  margin: 0 auto;
  margin-top: 10%;
  border: 4px solid rgba(201, 201, 201, 1);
  .from {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    .button {
      margin-top: 1rem;
    }
  }
  .logonGet {
    font-size: 0.5rem;
    cursor: pointer;

    p {
      float: right;
    }
  }
}
</style>
