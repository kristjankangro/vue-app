<script setup lang="ts">
import { ref, computed } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

// Reactive data
const firstName = ref('John')
const lastName = ref('Doe')
const age = ref(25)

// Computed property - automatically updates when firstName or lastName changes
const fullName = computed(() => {
  return firstName.value + ' ' + lastName.value
})

// Another computed property with more complex logic
const isAdult = computed(() => {
  return age.value >= 18
})

// Computed property that depends on other computed properties
const userInfo = computed(() => {
  return `${fullName.value} is ${isAdult.value ? 'an adult' : 'a minor'}`
})
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  
  <!-- Computed Properties Demo -->
  <div class="computed-demo">
    <h2>Computed Properties Demo</h2>
    
    <div class="input-group">
      <label>First Name:</label>
      <input v-model="firstName" placeholder="Enter first name" />
    </div>
    
    <div class="input-group">
      <label>Last Name:</label>
      <input v-model="lastName" placeholder="Enter last name" />
    </div>
    
    <div class="input-group">
      <label>Age:</label>
      <input v-model="age" type="number" placeholder="Enter age" />
    </div>
    
    <div class="results">
      <p><strong>Full Name (computed):</strong> {{ fullName }}</p>
      <p><strong>Is Adult (computed):</strong> {{ isAdult ? 'Yes' : 'No' }}</p>
      <p><strong>User Info (computed):</strong> {{ userInfo }}</p>
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.computed-demo {
  max-width: 500px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.input-group {
  margin-bottom: 1rem;
}

.input-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
}

.input-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.results {
  margin-top: 1rem;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
  border: 1px solid #eee;
}

.results p {
  margin: 0.5rem 0;
}
</style>
