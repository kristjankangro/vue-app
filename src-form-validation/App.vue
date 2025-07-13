<script setup lang="ts">
import btn from './components/Btn.vue'
import inp from './components/Input.vue'
import { reactive } from 'vue';
import {FormUpdatePayload} from "./types/FormUpdatePayload";

const formState = reactive({
  valid: true,
  username: {
    value: 'userr',
    valid: false,
  },
  password: {
    value: 'password123',
    valid: false,
  }
});
function updateUsername(value: string) {
  formState.username.value = value;
  formState.username.valid = value.length >= 5;
  formState.valid = formState.username.valid;
}

const update = (value: FormUpdatePayload) => {
  if (value.name  === 'username') {
    updateUsername(value.value);
  } else if (value.name === 'password') {
    formState.password.value = value.value;
    formState.password.valid = value.value.length >= 8;
  }
};

</script>

<template>
  <p>Form validation</p>
  <inp :name="'Username'"
       :value="formState.username.value"
       @update="update"
       :rules="{required: true, min: 5}"/>
  <inp :name="'Password'"
       :value="formState.password.value"
       @update="update"
       :rules="{required: true, min: 8}"/>
  <btn bg="blue" color="white" :disabled="!formState.valid" text="Click Me"/>
</template>

<style scoped></style>