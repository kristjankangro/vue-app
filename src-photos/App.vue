<script lang="ts" setup>
import Layout from "./Layout.vue";
import {computed, onMounted} from "vue";
import AlbumComponent from "./albums/AlbumComponent.vue";
import {useAlbumsStore} from "./albums/albumStore";

const albumsStore = useAlbumsStore();

const albums = computed(() => {
  return albumsStore.all;
});

onMounted(
    async () => {
      await albumsStore.fetch();
    }
)
</script>

<template>
  <layout>
    <template v-slot:title>
      Photo Gallery
    </template>
    <template v-slot:side-menu>
      <nav>
        <h1>Albums</h1>
        <album-component
            v-for="album in albums"
            :key="album.id"
            :album="album"
            class="menu-item"/>
      </nav>
      <!--      <div v-for="x in albums" :key="x.id">{{ x.title }}</div>-->
    </template>
    <template v-slot:content>
      <div class="photo-gallery">
        <!-- Photo gallery content goes here -->
        <p>Welcome to the photo gallery!</p>
      </div>
    </template>
  </layout>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  height: 100%;
  gap: 5px;
}

h1 {
  font-size: 18px;
  color: #333;
}

.menu-item {
  padding: 0.5rem;
  cursor: pointer;
  border-bottom: 1px solid #ccc;
  list-style: none;
  width: 100%;
}
</style>
