<script lang="ts" setup>
import {store} from './store/store';
import Card from "../src-pokemon/components/Card.vue";
import Controls from "./controls.vue";
import {ref} from "vue";

const storeState = store;
const currentTag = ref('')
const setHashtag = (hashtag: string) => {

  currentTag.value = hashtag;
  console.log(hashtag);
};

</script>

<template>
  current tag is: {{ currentTag }}
  <card v-for="x in storeState.state.posts" :key="x.id" class="post">
    <template v-slot:title>{{ x.title }}</template>
    <template v-slot:content>{{ x.content }}</template>
    <template v-slot:desc>
      <controls :post="x" @setHashtag="setHashtag"/>
    </template>
  </card>
</template>

<style scoped>
</style>
