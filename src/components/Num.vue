<script setup lang="ts">
import { defineEmits } from 'vue'

const props = defineProps<{ num: number }>()
const emit = defineEmits<{ chosen: [number] }>()

function isEven(num: number): boolean {
	return num % 2 === 0
}

const classBinding = (n: number) => ({
	red: isEven(n),
	blue: !isEven(n)
})

const click = () => {
	console.log(props.num);
	emit("chosen", props.num)
}

</script>

<template>
	<button v-bind:class="classBinding(num)" v-on:click="click">{{ num }}</button>
</template>