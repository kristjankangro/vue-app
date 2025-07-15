<script lang="ts" setup>
import type {Post} from './types/post';
import {reactive} from "vue";
import {getNextId} from "./utils/globalId";

const post = reactive<Post>({
  id: 0,
  title: '',
  content: ''
});

const submit = () => {
  // Here you would typically send the post to your backend or store it in a state management solution
  console.log('Post submitted:', post);
  // Reset the form after submission
  post.id = getNextId(); // Resetting ID to 0 for new post
  post.title = '';
  post.content = '';
};
</script>

<template>
  <div class="new-post">
    <h2>Create a New Post</h2>
    <form @submit.prevent="submit">
      <div>
        <label for="title">Title:</label>
        <input id="title" v-model="post.title" required type="text"/>
      </div>
      <div>
        <label for="content">Content:</label>
        <textarea id="content" v-model="post.content" required></textarea>
      </div>
      <button>Submit</button>
    </form>
  </div>
</template>

<style scoped>

</style>