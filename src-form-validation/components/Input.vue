<script setup lang="ts">
import {computed, ref} from "vue";
import {Rules} from "../types/ValidationRulesInterface";
import {FormUpdatePayload} from "../types/FormUpdatePayload";

const props = defineProps<{
  name: string,
  rules: Rules,
  value?: string
}>()

const emit = defineEmits<{
  (e: 'update', value: any): void;
}>()

const input = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update', {
    name: props.name.toLowerCase(),
    value: target.value
  } as FormUpdatePayload);
}

const error = computed(() => {
  if (!props.rules) {
    return '';
  }
  if (props.rules.required && !props.value) {
    return `Value is required`;
  }
  if (props.rules.min && props.value.length < props.rules.min) {
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
      <input :id="name"
             :name="name"
             :value="value"
             @input="input"
             :rules="{}" :class="classBinding"/>
      <div class="error">{{ error }}</div>
    </div>
  </div>
</template>

<style scoped>
.error {
  color: red;
  font-size: 12px;
  min-height: 20px;
}

input {
  padding: 10px;
  border: 1px solid grey;

  &.is-invalid {
    border-bottom: 2px solid red;
  }
}
</style>