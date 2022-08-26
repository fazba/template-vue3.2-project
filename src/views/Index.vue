<template>
  <div class="index">主页</div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";

const token = localStorage.getItem("token");
if (!token) {
  useRouter().push("/Login");
}
</script>
<style scoped>
.index {
  background: black;
  color: white;
  flex-grow: 1;
}
</style>
