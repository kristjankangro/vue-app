<script lang="ts" setup>
import {Post} from "./types/post";
import Hashtag from "./Hashtag.vue";

const props = defineProps<{
  post: Post;
}>();

const emit = defineEmits<{
  (e: 'setHashtag', hashtag: string): void;
}>();

const setHashtag = (hashtag: string) => {
  emit("setHashtag", hashtag);
};

</script>

<template>
  <button>Like</button>
  {{ post.likes }}
  <hashtag v-for="x in post.hashtags" :key="x" :hashtag="x"
           @setHashtag="setHashtag"/>
</template>

<style scoped>

</style>