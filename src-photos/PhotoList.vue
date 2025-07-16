<script lang="ts" setup>
import {usePhotosStore} from "./photos/photoStore";
import {computed} from "vue";

const photosStore = usePhotosStore();
const photos = computed(() => {
  return photosStore.all;
});
</script>

<template>
  <div class="photo-gallery">
    photos here
    <div v-for="x in photos" :key="x.id"
         class="photo-fake">
      {{ x.url }}
      {{ x.albumId }}
    </div>
  </div>
</template>

<style scoped>

</style>