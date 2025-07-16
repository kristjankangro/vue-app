<script lang="ts" setup>

import {Album} from "./album";

const props = defineProps<{
  album: Album;
}>();

</script>

<template>
  <button @click="">{{ props.album.title }}</button>
</template>

<style scoped>
button {
  width: 100%;
  text-align: left;
  padding: 0.5rem;
  background-color: #f0f0f0;
  color: #242424;
  border: none;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
}
</style>