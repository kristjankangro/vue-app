<script lang="ts" setup>
import {Pokemon} from "../types/Pokemon";
import Card from "./Card.vue";
import {ref} from "vue";

const selectedId = ref<number | null>(null);
const props = defineProps<{
  pokemons: Pokemon[];
}>()

const emit = defineEmits<{
  (e: 'select', id: number): void;
}>()

const click = (id: number) => {
  emit("select", id);
};
</script>

<template>
  <div class="cards">
    <card v-for="p in props.pokemons"
          :key="p.id"
          :class="{opace: p.id !== selectedId}"
          class="card"
          @click="click(p.id)">
      <template v-slot:title>{{ p.name }}</template>
      <template v-slot:content><img :alt="p.name" :src="p.sprite"></template>
      <template v-slot:desc>
        <div v-for="t in p.types" :key="t">{{ t }}</div>
      </template>
    </card>
  </div>
</template>

<style scoped>
.opace {
  opacity: 0.5;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
}

.card:hover {
  opacity: 1;
}

img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>