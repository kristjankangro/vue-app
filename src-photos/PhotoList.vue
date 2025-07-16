<script lang="ts" setup>
import {usePhotosStore} from "./photos/photoStore";
import {computed, watchEffect} from "vue";
import {useRoute} from "vue-router";

const route = useRoute();
const photosStore = usePhotosStore();

const photos = computed(() => {
  return photosStore.getForAlbum(albumId.value);
});
const albumId = computed(
    () => Number(route.params.id) || 0
);

watchEffect(async () => {
  await photosStore.fetchBy(albumId.value);
});


</script>

<template>
  <div class="photo-gallery">
    <div v-for="x in photos" :key="x.id"
         class="photo-fake">
      {{ x.url }}
      {{ x.albumId }}
    </div>
  </div>
</template>

<style scoped>
.photo-gallery {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;
}

.photo-fake {
  width: 10rem;
  height: 10rem;
  word-wrap: anywhere;
  border: 1px solid silver;
}
</style>