<script setup lang="ts">
import { ref } from 'vue'
import Num from './Num.vue'

defineProps<{ msg: string }>()

const count = ref(0)
const numbers = ref([1, 2, 3, 4, 5, 6, 8, 34, 78, 99, 100])
const inputValue = ref(['user'])
const error = ref('')

// const eventNumbersOnly = numbers.value.filter(isEven)

function incrementCount() {
  console.log('Incrementing count:', count.value)
  count.value += 1
}

function validateInput(): string {
  if (inputValue.value.length < 5) {
    return 'Input must be at least 5 characters long';
  }
  return '';
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <!-- <input type="text" v-model="inputValue" v-bind:class="{ error: error }" /> -->
    <input type="checkbox" v-model="inputValue" value="user" />
    <input type="checkbox" v-model="inputValue" value="admin" />
    <input type="checkbox" v-model="inputValue" value="guest" />
    {{ inputValue }}

    <div class="error">{{ validateInput() }}</div>
    <button type="button" @click="incrementCount()">count is {{ count }}</button>

    <!-- f.. nice -->
    <Num v-for="n in numbers" :num="n"/>

  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>, the official Vue + Vite
    starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support" target="_blank">Vue Docs Scaling up Guide</a>.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.red,
.error {
  color: red;
}

.blue {
  color: blue;
}

.read-the-docs {
  color: #888;
}
</style>
