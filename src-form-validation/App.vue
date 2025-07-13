<script lang="ts" setup>
import btn from './components/Btn.vue'
import inp from './components/Input.vue'
import {computed, reactive} from 'vue';
import {FormUpdatePayload} from "./types/FormUpdatePayload";

const isValid = computed(() => !formState.username.error && !formState.password.error)

const formState = reactive({
  valid: isValid,
  username: {
    value: 'userr',
    error: '',
  },
  password: {
    value: 'password123',
    error: '',
  }
});

const update = (updatePayload: FormUpdatePayload) => {
  formState[updatePayload.name].value = updatePayload.value;
  formState[updatePayload.name].error = updatePayload.error;
};

const submit = () => {
  if (formState.valid) {
    console.log(`Username: ${formState.username.value}, Password: ${formState.password.value}`);
  } else {
    console.log('Error: Form is invalid');
  }
};


</script>

<template>
  <p>Form validation</p>
  <form @submit.prevent="submit">
    <inp :error="formState.username.error" :name="'Username'" :rules="{required: true, min: 5}"
         :value="formState.username.value" @update="update"/>
    <inp :error="formState.password.error" :name="'Password'" :rules="{required: true, min: 8}"
         :value="formState.password.value" type="password"
         @update="update"/>
    <btn :disabled="!formState.valid" bg="blue" color="white" text="Click Me"/>
  </form>
</template>

<style scoped></style>