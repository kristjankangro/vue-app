<script lang="ts" setup>

const props = defineProps<{
  bg?: string;
  color?: string;
  disabled?: boolean;
  text: string;
}>()

</script>

<template>
  <button :disabled="props.disabled" :style="{ backgroundColor: props.bg, color: props.color }">
    {{ props.text }}
  </button>
</template>

<style scoped>
button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}

button:hover {
  border-color: #646cff;
}

button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

button:disabled {
  background-color: grey;
  opacity: 0.5;
  cursor: not-allowed;
}

@media (prefers-color-scheme: light) {
  button {
    background-color: #f9f9f9;
  }
}
</style>
