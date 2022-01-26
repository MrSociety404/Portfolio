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
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  @media (max-width: $md) {
    display: block;
  }
}
</style>
