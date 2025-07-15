<script lang="ts" setup>
import type {Post} from './types/post';
import {reactive} from "vue";
import {usePosts} from "./usePosts";

const postsStore = usePosts();
const post = reactive<Post>({
  id: 0,
  title: '',
  content: ''
});

const submit = () => {
  postsStore.addPost(
      {
        id: postsStore.posts.value.length + 1,
        title: post.title,
        content: post.content
      }
  );
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