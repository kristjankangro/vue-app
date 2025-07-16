<script lang="ts" setup>

import {Album} from "./album";
import {usePhotosStore} from "../photos/photoStore";

const photoStore = usePhotosStore();
const props = defineProps<{
  album: Album;
}>();

const click = async () => {
  await photoStore.getByAlbum(props.album.id);
};

</script>

<template>
  <button @click="click">{{ props.album.title }}</button>
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