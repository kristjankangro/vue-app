<script setup lang="ts">
import { ref } from 'vue'
import Num from './Num.vue'

defineProps<{ msg: string }>()

const numbers = ref([1, 2, 3, 4, 5, 6, 8, 34, 78, 99, 100])
const numbersHistory = ref<number[]>([])

function addNumbers(n: number){
	numbersHistory.value.push(n)
	console.log(numbersHistory.value);
}

</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="card">

		<!-- f.. nice -->
		<Num v-for="n in numbers" :num="n" 
		v-on:chosen="addNumbers"
		/>
			<hr>
		<Num v-for="x in numbersHistory" :num="x"/>

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
