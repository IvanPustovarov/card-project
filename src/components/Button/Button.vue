<script setup lang="ts">
import { computed } from "vue";

interface Props {
  type: "success" | "warning" | "error" | "info" | "default" | "back";
  text: string;
}

interface Emits {
  (e: "click"): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const handleButtonClick = () => {
  emit("click");
};

const tagClass = computed(() => {
  return `tag--${props.type}`;
});
</script>

<template>
  <button
    type="button"
    @click="handleButtonClick"
    :class="['button', tagClass]"
  >
    <slot />
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  padding: 20px 0;
  border-radius: 20px;
  color: rgba(255, 255, 255, 1);
  background-color: rgba(140, 82, 255, 1);
  font-size: 25px;

  &.tag--back {
    font-size: 20px;
    padding: 0px;
    border: none;
    color: rgba(138, 131, 151, 1);
    background-color: transparent;
    width: fit-content;
    display: flex;
  }

  &.tag--default {
    background-color: rgba(140, 82, 255, 1);
  }

  &.tag--success {
    background-color: #28a745;
  }

  &.tag--warning {
    background-color: #ffc107;
    color: #212529;
  }

  &.tag--error {
    background-color: #dc3545;
  }

  &.tag--info {
    background-color: #17a2b8;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
