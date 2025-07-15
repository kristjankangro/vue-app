<script lang="ts" setup>
import {testPosts} from "../src-micro-blog/seed/testPosts";
import {Post} from "../src-micro-blog/types/post";
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <ul v-if="route.path === '/posts'" class="posts-list">
    <li v-for="x in testPosts as Post[]" :key="x.id">
      <router-link :to="`/posts/${x.id}`">{{ x.title }}</router-link>
    </li>
  </ul>

  <router-view/>
</template>

<style scoped></style>