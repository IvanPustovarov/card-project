<script setup lang="ts">
import { ref } from "vue";

interface Props {
  placeholder: string;
}

const text = ref<string>("");
defineProps<Props>();
</script>

<template>
  <input
    v-model="text"
    type="text"
    :placeholder="placeholder"
    class="default-input"
  />
</template>

<style scoped lang="scss">
.default-input {
  padding: 25px;
  color: rgba(27, 10, 64, 1);
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(185, 185, 185, 1);
  border-radius: 20px;
  font-size: 22px;

  ::placeholder {
    font-size: 25px;
    color: rgba(27, 10, 64, 1);
    font-weight: 400;
  }
}
</style>
