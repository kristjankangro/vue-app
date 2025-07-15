<script lang="ts" setup>

import {useRoute} from "vue-router";
import {computed} from "vue";
import {testPosts} from "./seed/testPosts";

const route = useRoute();

console.log('route', route);

console.log('testPosts', testPosts);

const post = computed(() => {
  const postId = parseInt(route.params.id as string);
  return testPosts.find(p => p.id === postId);
})
</script>

<template>
  <div class="title">{{ post.title }}</div>
  <div class="content">{{ post.content }}</div>

</template>

<style scoped>

.title {
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 1em;
}

.content {
  font-size: 1.2em;
  line-height: 1.5;
}
</style>