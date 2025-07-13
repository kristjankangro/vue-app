<script setup lang="ts">
import {computed, ref} from "vue";
import {Rules} from "../types/ValidationRulesInterface";

const props = defineProps<{ 
  name: string, rules: Rules }>()
const value = ref('')

const error = computed(() => {
  if (!props.rules) {
    return '';
  }
  if (props.rules.required && !value.value) {
    return `Value is required`;
  }
  if (props.rules.min && value.value.length < props.rules.min) {
    return `Value must be at least ${props.rules.min} characters long`;
  }
  return '';
})

const classBinding = computed(() => {
  return {
    'is-invalid': error.value !== ''
  }
})
</script>

<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <div>
      <input :id="name" :name="name" v-model="value" :rules="{}" :class="classBinding"/>
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-size: 12px;
}

input {
  padding: 10px;
  border: 1px solid grey;
  &.is-invalid {
    border-bottom: 2px solid red;
  }
}
</style>