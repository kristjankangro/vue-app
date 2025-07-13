<script lang="ts" setup>
import {Pokemon} from "./types/Pokemon";
import {ref} from "vue";
import card from './components/Card.vue';

const pokemons = ref<Pokemon[] | []>([]);
const ids = [1, 4, 7];

const apiEndpoint = 'https://pokeapi.co/api/v2/pokemon';


const fetchData = async () => {
  try {
    const responses = await Promise.all(ids.map(id => fetch(`${apiEndpoint}/${id}`)));
    const data = await Promise.all(responses.map(x => x.json()));
    pokemons.value = data.map((x) => ({
      id: x.id,
      name: x.name,
      sprite: x.sprites.other['official-artwork'].front_default,
      types: x.types.map((type: any) => type.type.name),
    }));
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

fetchData();
console.log("fff");
</script>

<template>
  <div class="cards">
    <card v-for="p in pokemons" :key="p.id">
      <template v-slot:title>{{ p.name }}</template>
      <template v-slot:content><img :alt="p.name" :src="p.sprite"></template>
      <template v-slot:desc>
        <div v-for="t in p.types" :key="t">{{ t }}</div>
      </template>
    </card>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
}

</style>
