<script setup lang="ts">
defineProps<{ num: number }>()

function isEven(num: number): boolean {
  return num % 2 === 0
}

const classBinding = (n: number) => ({
  red: isEven(n),
  blue: !isEven(n)
})

</script>

<template>
    <div v-bind:class="classBinding(num)">{{ num }}</div>
</template>