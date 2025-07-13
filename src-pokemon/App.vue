<script lang="ts" setup>
import {Pokemon} from "./types/Pokemon";
import {ref} from "vue";

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
      sprite: x.sprites.front_default,
      types: x.types.map((type: any) => type.type.name),
    }));

    // const response = await fetch(`${apiEndpoint}/${ids[0]}`);
    // if (!response.ok) {
    //   throw new Error('Network response was not ok');
    // }
    // const data = await response.json();
    // pokemon.value = {
    //   id: data.id,
    //   name: data.name,
    //   sprite: data.sprites.front_default,
    //   types: data.types.map((type: any) => type.type.name),
    // };
    console.log(pokemons.value);
  } catch (error) {
    console.error('Fetch error:', error);
  }
};
</script>

<template>
  <div class="card">
    <div class="title">Title</div>
    <div class="content">Content</div>
    <div class="desc">desc</div>
  </div>
  <button @click="fetchData">fetch</button>
</template>

<style scoped>
.card {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 8px;
  border-bottom: 1px solid #ccc;
}

.content {
  font-size: 1em;
  margin-bottom: 8px;
}

.desc {
  font-size: 0.875em;
  color: #666;
}
</style>
