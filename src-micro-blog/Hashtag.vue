<script lang="ts" setup>
import {store} from "./store/store";

const props = defineProps<{
  hashtag: string
}>();

const setHashtag = () => {
  store.setHashtag(props.hashtag);
};

</script>

<template>
  <div class="hashtag" @click="setHashtag">
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