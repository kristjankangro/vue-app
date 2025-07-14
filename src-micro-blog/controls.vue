<script lang="ts" setup>
import {Post} from "./types/post";
import Hashtag from "./Hashtag.vue";

defineProps<{
  post: Post;
}>();

</script>

<template>
  <button>Like</button>
  {{ post.likes }}
  <hashtag v-for="x in post.hashtags" :key="x" :hashtag="x"/>
</template>

<style scoped>

</style>