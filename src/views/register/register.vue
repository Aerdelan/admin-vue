<!--
 * @Author: Aerdelan 1874863790@qq.com
 * @Date: 2023-04-30 10:07:20
 * @LastEditors: Aerdelan 1874863790@qq.com
 * @LastEditTime: 2023-05-01 22:34:54
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
        >注册</el-button
      >
      <div class="logonGet" @click="getLogin"><p>有账号？立即登录>></p></div>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { register } from "@/api/user";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
const flag = ref(true);
const router = ref(useRouter());
const data = ref({
  username: "北极熊",
  password: "123456",
});
const handleSubmit = async () => {
  if (flag.value) {
    flag.value = false;
    const time = setTimeout(async () => {
      const registerData = await register(data.value).catch((err) => {
        console.log(err, "err");
        if (err.response.data == "用户名已被注册") {
          console.log(111);
          ElMessage({
            message: "用户名已被注册",
            type: "error",
          });
        } else if (err.response.data == "请求过于频繁，请稍后再试") {
          ElMessage({
            message: "请求过于频繁，请稍后再试",
            type: "error",
          });
        }
      });
      console.log(registerData.response.data, "registerData.response.data");
      if (registerData.response.data == "注册成功") {
        ElMessage({
          message: "注册成功!",
          type: "success",
        });
      }
    }, 1000);
    flag.value = true;
  }
};
const getLogin = () => {
  router.value.push("/login");
};
</script>

<style scoped lang="scss">
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width: 30%;
  margin: 0 auto;
  margin-top: 10%;
  border: 2px solid rgba(192, 187, 187, 0.9);
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
