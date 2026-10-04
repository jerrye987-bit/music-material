<template>
  <div class="centerblock__search">
    <svg class="search__svg">
      <use xlink:href="/img/icon/sprite.svg#icon-search"></use>
    </svg>
    <input
      class="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
      v-model="searchQuery"
    />
  </div>
  <h2 class="centerblock__h2">Треки</h2>
  <div class="centerblock__filter">
    <div class="filter__title">Искать по:</div>
    <div
      v-for="filter in filters"
      :key="filter"
      class="filter__button"
      :class="{ active: activeFilter === filter }"
      @click="activeFilter = filter"
    >
      {{ filter }}
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchQuery = ref('')
const filters = ['исполнителю', 'году выпуска', 'жанру']
const activeFilter = ref('исполнителю')
</script>
