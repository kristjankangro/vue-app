<script setup lang="ts">
import btn from './components/Btn.vue'
import inp from './components/Input.vue'
import { reactive } from 'vue';
import {FormUpdatePayload} from "./types/FormUpdatePayload";

const formState = reactive({
  valid: true,
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

</script>

<template>
  <p>Form validation</p>
  <inp :name="'Username'"
       :value="formState.username.value"
       :error="formState.username.error"
       @update="update"
       :rules="{required: true, min: 5}"/>
  <inp :name="'Password'"
       :value="formState.password.value"
        :error="formState.password.error"
       @update="update"
       :rules="{required: true, min: 8}"/>
  <btn bg="blue" color="white" :disabled="!formState.valid" text="Click Me"/>
</template>

<style scoped></style>