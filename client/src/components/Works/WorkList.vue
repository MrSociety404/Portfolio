<script setup>
import { ref, watchEffect } from 'vue';
import { getWorks } from '../../features/query';

import Work from './Work.vue';

const works = ref(await getWorks())

const firstArray = ref([])
const secondArray = ref([])

watchEffect(() => {
  if (works.value) {
    for (let i = 0; i < works.value.length; i++) {
      if (i % 2 === 0) {
        firstArray.value.push(works.value[i])
      } else {
        secondArray.value.push(works.value[i])
      }
    }
  }
})

</script>

<template>
  <div class="works__container">
    <div class="works__list">
      <Work v-for="work in firstArray" :key="work.id" :work="work" />
    </div>
    <div class="works__list second">
      <Work v-for="work in secondArray" :key="work.id" :work="work" />
    </div>
  </div>
</template>

<style lang="scss">
.works {
  &__container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: $md) {
      flex-direction: column;
    }
  }
  &__list {
    flex-basis: calc(50% - 2rem);
    @media (max-width: $md) {
      flex-direction: column;
      align-items: center;
      gap: 3rem;
    }
    &.second {
      margin-top: 150px;
      @media (max-width: $md) {
        margin-top: unset;
      }
    }
  }
}
</style>
