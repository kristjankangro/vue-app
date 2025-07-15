<script lang="ts" setup></script>

<template>
  <router-link to="/hell-no">Hell No World</router-link>
  <router-link to="/posts">Posts</router-link>
  <router-link to="/posts/new">Create Post</router-link>
  <div>
    <router-view/>
  </div>

</template>

<style scoped>

a {
  margin-right: 20px;
  text-decoration: none;
  color: #42b983;
}

a.router-link-active {
  font-weight: bold;
  color: #35495e;
}
</style>
