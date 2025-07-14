<script lang="ts" setup>
import {store} from './store/store';
import Card from "../src-pokemon/components/Card.vue";
import Controls from "./controls.vue";
import {computed} from "vue";

const currentTag = computed(() => store.state.currentTag);

const setHashtag = (event: Event) => {
  const input = event.target as HTMLInputElement;
  store.setHashtag(input.value);
}
const filteredPosts = computed(() => store.filteredPosts);
</script>

<template>
  <input :value="currentTag" placeholder="Filter by hashtag" @input="setHashtag"/>
  <card v-for="x in filteredPosts" :key="x.id" class="post">
    <template v-slot:title>{{ x.title }}</template>
    <template v-slot:content>{{ x.content }}</template>
    <template v-slot:desc>
      <controls :post="x"/>
    </template>
  </card>
</template>

<style scoped>
</style>
