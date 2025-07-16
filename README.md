# Vue Project Overview

This project demonstrates various features of Vue.js, organized into different source folders.

### src-composition-api

- **Composition API**: The code is written using the `<script setup>` syntax.
- **Props and Events**: It utilizes `defineProps` to receive data and `defineEmits` to send data to a parent component.
- **Computed Properties**: It employs `computed` for dynamic calculations, such as for class bindings.
- **Composables**: Leverages reusable logic extracted into composable functions (e.g., `useNumbers.ts`).

### src-form-validation

- **Input Validation**: Implements logic to validate user input.
- **Component Events**: Uses `emits` to communicate form state changes from a child component to its parent.

### src-micro-blog

- **State Management**: Manages application state centrally through a reactive `store`.
- **Component Composition**: Builds the UI by importing and using child components like `Card` and `Controls`.
- **Reactivity**: Uses `computed` properties to create derived state that updates automatically, such as a filtered list
  of posts.
- **List Rendering & Slots**: Renders lists with `v-for` and uses `v-slot` to pass template fragments into child
  components.
- **TypeScript**: Integrates TypeScript within the `<script setup>` block for enhanced type safety.

### src-photos

- **State Management**: Uses a Pinia store (`usePhotosStore`) for managing photo data.
- **Composition API**: It's written using `<script setup>` and utilizes features like `computed` and `watchEffect`.
- **Routing**: It interacts with the router using `useRoute` from `vue-router` to get route parameters.
- **List Rendering**: Uses the `v-for` directive to render a list of photos.

### src-pokemon

- **Reusable Components**: Provides UI building blocks, such as the `Card` component, designed for use across different
  applications.
- **Slots for Flexibility**: The `Card` component makes extensive use of named slots (`v-slot`) to allow parent
  components to inject custom content, making it highly adaptable.

### src-router

- **Routing**: Implements client-side routing using `vue-router`.
- **Dynamic Routing**: Defines routes with dynamic segments (e.g., `/albums/:id`).
- **Lazy Loading**: Components are lazy-loaded using dynamic imports (`() => import(...)`) to improve initial load
  performance.