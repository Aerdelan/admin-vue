<template>
  <div :class="color ? $store.state.config.color : color">
    <router-view />
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const color = ref(localStorage.getItem("configColor"));
console.log(color);
</script>
<style lang="scss" scoped>
.red {
  color: $TERedColor !important ;
}
.green {
  color: $TEGreenColor !important ;
}
.blue {
  color: $TEBlueColor !important ;
}
.black {
  color: $TEBlackColor !important ;
}
.yellow {
  color: $TEYellowColor !important ;
}
.orange {
  color: $TEOrangeColor !important ;
}
</style>
