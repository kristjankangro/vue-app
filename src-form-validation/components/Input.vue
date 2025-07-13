<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <input :id="name" :name="name"/>
  </div>
</template>

<style scoped>

</style>