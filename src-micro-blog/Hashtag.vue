<script lang="ts" setup>
const props = defineProps<{
  hashtag: string
}>();
const setHashtagEmit = defineEmits<{
  (e: 'setHashtag', hashtag: string): void
}>();

</script>

<template>
  <div class="hashtag" @click="setHashtagEmit('setHashtag', hashtag)">
    #{{ hashtag }}
  </div>
</template>

<style scoped>
.hashtag {
  font-size: 0.9em;
  margin-right: 0.5em;
  cursor: pointer;
}

.hashtag:hover {
  color: #535bf2;
}
</style>