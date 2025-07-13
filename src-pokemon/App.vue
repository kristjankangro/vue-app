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
    <div v-for="x in pokemons"
         :key="x.id"
         class="card">
      <div class="title">{{ x.name }}</div>
      <div class="content">
        <img :src="x.sprite" alt="Pokemon sprite"/>
        <p>ID: {{ x.id }}</p>
      </div>
      <div class="desc">
        <div v-for="t in x.types" :key="t">{{ t }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  padding: 16px;
}

.card {
  width: 155px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 350px) {
  .card {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
  }
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

img {
  width: 100%;
  height: auto;
  display: block;
  margin: 0 auto;
}
</style>
