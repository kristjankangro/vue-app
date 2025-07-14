<script lang="ts" setup>
import {useNumbers} from "./useNumbers";
import {usePointer} from '@vueuse/core';

const {x, y} = usePointer();

const {count, numbers, increment, increase, total} = useNumbers();
</script>

<template>
  <div class="tracker-area">
    <p>Move your mouse around in this box.</p>
    <pre>x: {{ x }}, y: {{ y }}</pre>
  </div>

  <button @click="increment">{{ count }}</button>
  <button @click="increase('a')">{{ numbers.a }}</button>
  <button @click="increase('b')">{{ numbers.b }}</button>
  <p>{{ total }}</p>
</template>

<style scoped>
.tracker-area {
  width: 400px;
  height: 200px;
  border: 2px dashed #ccc;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  border-radius: 8px;
}

</style>
