<script lang="ts" setup>
defineProps<{
  hashtag: string
}>();
</script>

<template>
  <div class="hashtag">
    #{{ hashtag }}
  </div>
</template>

<style scoped>
.hashtag {
  display: inline-block;
  padding: 0 0.5em;
  background-color: #f0f0f0;
  border-radius: 4px;
  font-size: 0.9em;
  color: #333;
  margin-right: 0.5em;
  cursor: pointer;
}
</style>