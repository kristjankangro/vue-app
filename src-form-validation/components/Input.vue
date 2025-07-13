<script lang="ts" setup>
import {computed} from "vue";
import {Rules} from "../types/ValidationRulesInterface";
import {FormUpdatePayload} from "../types/FormUpdatePayload";

const props = withDefaults(defineProps<{
  name: string,
  rules: Rules,
  value?: string,
  error?: string,
  type?: 'text' | 'password' | 'email' | 'number'
}>(), {
  type: 'text'
})

const emit = defineEmits<{
  (e: 'update', value: any): void;
}>()

const input = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update', {
    name: props.name.toLowerCase(),
    value: target.value,
    error: validate(target.value)
  } as FormUpdatePayload);
}

const validate = (value: string): string => {
  if (!props.rules) {
    return '';
  }
  if (props.rules.required && !value) {
    return `Value is required`;
  }
  if (props.rules.min && value.length < props.rules.min) {
    return `Value must be at least ${props.rules.min} characters long`;
  }
  return '';
}

const classBinding = computed(() => {
  return {
    'is-invalid': props.error !== ''
  }
})
</script>

<template>
  <div class="label">
    <label :for="name">{{ name }}</label>
    <div>
      <input :id="name"
             :class="classBinding"
             :name="name"
             :rules="{}"
             :type="type"
             :value="value" @input="input"/>
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