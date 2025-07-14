<script lang="ts" setup>
import {store} from './store/store';
import Card from "../src-pokemon/components/Card.vue";
import Controls from "./controls.vue";
import {computed} from "vue";


const filterPosts = computed(() => {
  if (store.state.currentTag === '') {
    return store.state.posts;
  }
  return store.state.posts.filter(post => post.hashtags.includes(store.state.currentTag));
})

</script>

<template>
  current tag is: {{ store.state.currentTag }}
  <card v-for="x in filterPosts" :key="x.id" class="post">
    <template v-slot:title>{{ x.title }}</template>
    <template v-slot:content>{{ x.content }}</template>
    <template v-slot:desc>
      <controls :post="x"/>
    </template>
  </card>
</template>

<style scoped>
</style>
