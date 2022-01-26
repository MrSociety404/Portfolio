<script setup>
import { ref } from 'vue';
import { getWorks } from '../../features/query';
import Work from './Work.vue';

const works = ref(await getWorks())

</script>

<template>
  <ul class="homeWorkList">
    <Work v-for="work in works" :key="work.id" :work="work" />
  </ul>
</template>

<style lang="scss">
.homeWorkList {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  @media (max-width: $md) {
    display: block;
  }
}
</style>
