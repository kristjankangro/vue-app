<script setup lang="ts">
import {computed, defineEmits} from 'vue'

const props = defineProps<{ num: number }>()
const emit = defineEmits<{ chosen: [number] }>()

function isEven(num: number): boolean {
	return num % 2 === 0
}

const classBinding = computed(() => ({
	red: isEven(props.num),
	blue: !isEven(props.num)
}))

const click = () => {
	console.log(props.num);
	emit("chosen", props.num)
}

</script>

<template>
	<button v-bind:class="classBinding" v-on:click="click">{{ num }}</button>
</template>