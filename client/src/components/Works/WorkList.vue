<script setup>
import { ref } from 'vue';
import { getWorks } from '../../features/query';
import Work from './Work.vue';


const works = ref(await getWorks())
</script>

<template>
  <ul class="works__list">
    <Work v-for="work in works" :key="work.id" :work="work" />
  </ul>
</template>

<style lang="scss">
.works {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
