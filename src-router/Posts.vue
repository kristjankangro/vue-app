<script lang="ts" setup>
import {useRoute} from "vue-router";
import {usePosts} from "./usePosts";

const route = useRoute();
const postStore = usePosts();
</script>

<template>
  <router-link to="/posts/new">Create Post</router-link>
  <ul class="posts-list">
    <li v-for="x in postStore.posts.value" :key="x.id">
      <router-link :to="`/posts/${x.id}`">{{ x.title }}</router-link>
    </li>
  </ul>

  <router-view/>
</template>

<style scoped></style>