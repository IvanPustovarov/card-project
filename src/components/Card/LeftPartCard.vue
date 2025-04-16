<script setup lang="ts"></script>

<template>
  <div class="card-left">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-left {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 50%;
}
</style>
