<script lang="ts" setup>
import {Pokemon} from "./types/Pokemon";
import {onMounted, ref} from "vue";
import card from './components/Card.vue';

const ids = [1, 4, 7];
const pokemons = ref<Pokemon[] | []>([]);
const evolutions = ref<Pokemon[] | []>([]);
const selectedId = ref<number | null>(null);

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
  selectedId.value = id;
  evolutions.value = await fetchData([id + 1, id + 2])
};

onMounted(async () => {
  pokemons.value = await fetchData(ids);
});
</script>

<template>
  <div class="cards">
    <card v-for="p in pokemons"
          :key="p.id"
          :class="{opace: p.id !== selectedId}"
          class="card"
          @click="fetchEvolutions(p.id)">
      <template v-slot:title>{{ p.name }}</template>
      <template v-slot:content><img :alt="p.name" :src="p.sprite"></template>
      <template v-slot:desc>
        <div v-for="t in p.types" :key="t">{{ t }}</div>
      </template>
    </card>

    <card v-for="p in evolutions" :key="p.id">
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

.card:hover {
  opacity: 1;
}

</style>
