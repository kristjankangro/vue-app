<script setup lang="ts">
import Parent from './components/Parent.vue'

</script>

<template>
	<Parent msg="Vite + Vue" />
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
	border-radius: 4px;
	border: 1px solid #eee;
}

.results p {
	margin: 0.5rem 0;
}
</style>
