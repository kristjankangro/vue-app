<script lang="ts" setup>
import {ref} from "vue";

const count = ref<number>(0);

const increment = () => {
  count.value++;
};
</script>

<template>
  <button @click="increment">{{ count }}</button>
</template>

<style scoped>
</style>
