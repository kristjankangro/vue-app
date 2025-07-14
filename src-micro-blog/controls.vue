<script lang="ts" setup>
import {Post} from "./types/post";
import Hashtag from "./Hashtag.vue";
import {store} from "./store/store";

const props = defineProps<{
  post: Post;
}>();

const clickLike = () => {
  store.incrementLikes(props.post);
  // Emit an event to notify the parent component if needed
  // emit('like', props.post);
};

</script>

<template>
  <button @click="clickLike">Like</button>
  {{ post.likes }}
  <hashtag v-for="x in post.hashtags" :key="x" :hashtag="x"/>
</template>

<style scoped>

</style>