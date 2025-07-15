<script lang="ts" setup>
import { vAutofocus } from "./directives/vAutofocus";
</script>

<template>
  posts
  <input v-autofocus type="text">
  <input v-autofocus type="text">
  <router-view />
</template>

<style scoped></style>