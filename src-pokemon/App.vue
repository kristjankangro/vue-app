<script lang="ts" setup>
import {Pokemon} from "./types/Pokemon";
import Cards from "./components/Cards.vue";
import {onMounted, ref} from "vue";

const ids = [1, 4, 7];
const pokemons = ref<Pokemon[] | []>([]);
const evolutions = ref<Pokemon[] | []>([]);

const apiEndpoint = 'https://pokeapi.co/api/v2/pokemon';

const fetchData = async (ids: number[]) => {
  try {
    const responses = await Promise.all(ids.map(id => fetch(`${apiEndpoint}/${id}`)));
    const data = await Promise.all(responses.map(x => x.json()));
    return data.map((x) => ({
      id: x.id,
      name: x.name,
      sprite: x.sprites.other['official-artwork'].front_default,
      types: x.types.map((type: any) => type.type.name),
    }));
  } catch (error) {
    console.error('Fetch error:', error);
  }
};

const fetchEvolutions = async (id: number) => {
  evolutions.value = await fetchData([id + 1, id + 2])
};

onMounted(async () => {
  pokemons.value = await fetchData(ids);
});
</script>

<template>
  <cards :pokemons="pokemons" @select="fetchEvolutions"/>
  <cards :pokemons="evolutions"/>
</template>

<style scoped>


</style>
