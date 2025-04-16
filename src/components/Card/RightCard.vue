<script setup lang="ts"></script>

<template>
  <div class="card-right">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.card-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 1 1 50%;
}
</style>
