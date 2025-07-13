<script setup lang="ts">
import btn from './components/Btn.vue'
import inp from './components/Input.vue'
import {reactive, ref} from "vue";

const valid = ref(false)
const username = reactive({
  value: '',
  valid: false,
});

</script>

<template>
  <p>Form validation</p>
  <inp :name="'Username'"
       :rules="{required: true, min: 5}"/>
  <btn bg="blue" color="white" :disabled="!valid" text="Click Me"/>
</template>

<style scoped></style>