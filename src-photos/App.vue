<script lang="ts" setup>
import Layout from "./Layout.vue";
</script>

<template>
  <layout>
    <template v-slot:title>
      Photo Gallery
    </template>
    <template v-slot:side-menu>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
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
h1 {
  font-size: 18px;
  color: #333;
}
</style>
