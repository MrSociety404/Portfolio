<script setup>
import { ref } from "vue";
import { getTechs } from "../../features/query";

const techs = ref(await getTechs())

</script>

<template>
  <ul class="techs__list">
    <li class="techs__item" v-for="tech in techs" :key="tech.id">
      <a :href="tech.website" class="techs__link">
        <img :src="tech.icon.url" class="techs__logo" :alt="tech.icon.alternativeText" />
        <span class="techs__name">{{ tech.name }}</span>
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.techs {
  &__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    gap: 2rem;
    @media (max-width: $lg) {
      width: 80%;
    }
  }
  &__item {
    flex-basis: calc(50% - 2rem);
    @media (max-width: $md) {
      flex-basis: 100%;
    }
  }
  &__link {
    display: flex;
    gap: 3rem;
    align-items: center;
    @media (max-width: $lg) {
      justify-content: center;
    }
  }
  &__logo {
    width: 40px;
    height: 40px;
  }
  &__name {
    font-size: 1.5rem;
    width: 120px;
  }
}
</style>
