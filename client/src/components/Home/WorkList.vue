<script setup>
import Work from './Work.vue';

</script>

<template>
  <ul class="homeWorkList">
    <Work />
    <Work />
    <Work />
    <Work />
  </ul>
</template>

<style lang="scss">
.homeWorkList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 4rem;
  margin-bottom: 4rem;
}
</style>
