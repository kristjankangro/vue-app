<script setup lang="ts">
import btn from './components/Btn.vue'
import inp from './components/Input.vue'
</script>

<template>
	<p>Form validation</p>
  <inp name="Username"/>
	<btn bg="blue" color="white" :disabled="false" text="Click Me" />
</template>

<style scoped></style>