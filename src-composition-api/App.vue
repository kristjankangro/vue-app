<script lang="ts" setup>
import {computed, reactive, ref} from "vue";
// reactive is used for objects, ref is used for primitive values
const count = ref<number>(0);
const numbers = reactive({a: 0, b: 0})

const increment = () => {
  count.value++;
};
const increase = (key: 'a' | 'b') => {
  numbers[key]++;
};

// Computed property to calculate the total
const total = computed(() => {
  return count.value + numbers.a + numbers.b;
});
</script>

<template>
  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <p>{{ total }}</p>
</template>

<style scoped>
</style>
