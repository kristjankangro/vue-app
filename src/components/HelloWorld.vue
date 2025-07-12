<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
const numbers = ref([1, 2, 3, 4, 5, 6,8,34,78,99,100])
const inputValue = ref('user')
const error = ref('')

// const eventNumbersOnly = numbers.value.filter(isEven)

function incrementCount() {
  console.log('Incrementing count:', count.value)
  count.value += 1
}

function isEven(num: number): boolean {
  return num % 2 === 0
}

function input(event: Event) {
  error.value = validateInput(inputValue.value);
  console.log('Input:', (event.target as HTMLInputElement).value)
  inputValue.value = (event.target as HTMLInputElement).value
  console.log('Error:', error.value)
}

const classBinding = (n: number) => ({
  red: isEven(n),
  blue: !isEven(n)
})


function validateInput(val: string): string {
  if (val.length < 5) {
    return 'Input must be at least 5 characters long';
  } 
  return '';
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <input 
    v-bind:value="inputValue" v-on:input="input" v-bind:class="{ error: error }" />
    {{ inputValue }}
    <div class="error">{{ error }}</div>
    <button type="button" @click="incrementCount()">count is {{ count }}</button>
    
    <div v-for="n in numbers">
      <span :key="n" :class="classBinding(n)">{{ n }}<span v-if="isEven(n)">Even</span>
    <span v-else>Odd</span>
      </span>
    </div>
    
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.red, .error {
  color: red;
}
.blue {
  color: blue;
}
.read-the-docs {
  color: #888;
}
</style>
