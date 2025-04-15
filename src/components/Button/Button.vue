<script setup lang="ts">
import { ref } from "vue";

defineProps<{ text: string }>();
// const count = ref(0);

const handleButtonClick = (url: string) => {
  console.log(url);
};
</script>

<template>
  <button type="button" @click="handleButtonClick('11')">
    {{ text }}
  </button>
</template>

<style scoped>
.button {
  background-color: rgba(140, 82, 255, 1);
  padding: 20px;
  border-radius: 20px;
  color: rgba(255, 255, 255, 1);
}
</style>
