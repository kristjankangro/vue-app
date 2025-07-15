<script lang="ts" setup>
import type {Post} from './types/post';
import {reactive} from "vue";
import {usePosts} from "./usePosts";
import {useRouter} from "vue-router";

const router = useRouter();
console.log(router);

const postsStore = usePosts();
const post = reactive<Post>({
  id: 0,
  title: '',
  content: ''
});

const submit = () => {
  const id = postsStore.posts.value.length + 1;
  postsStore.addPost(
      {
        id: id,
        title: post.title,
        content: post.content
      }
  );
  router.push(`/posts/${id}`);
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