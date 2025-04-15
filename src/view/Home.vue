<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

function goToCard(type: string) {
  router.push(`/card/${type}`);
}
</script>

<template>
  <div>
    home page
    <button @click="goToCard('wb')">go to wb</button>
    <button @click="goToCard('ozon')">go to ozon</button>
  </div>
</template>

<style scoped>
.button {
  background-color: rgba(140, 82, 255, 1);
  padding: 20px;
  border-radius: 20px;
  color: rgba(255, 255, 255, 1);
}
</style>
