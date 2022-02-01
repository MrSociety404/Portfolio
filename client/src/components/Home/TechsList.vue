<script setup>
import { onMounted, ref } from "vue";
import { getTechs } from "../../features/query";
import { SERVER_URL } from "../../features/config";
import { listInViewPort } from "../../features/utils";

const list = ref(null)
onMounted(() => {
  const Obs = new IntersectionObserver(listInViewPort)
  Obs.observe(list.value, {})
})

const techs = ref(await getTechs())

</script>

<template>
  <ul class="techs__list" ref="list">
    <li class="techs__item" v-for="tech in techs" :key="tech.id">
      <a :href="tech.website" class="techs__link">
        <img :src="SERVER_URL + tech.icon.url" class="techs__logo" :alt="tech.icon.alternativeText" />
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
    gap: 3rem;
    @media (max-width: $lg) {
      width: 80%;
    }
  }
  &__item {
    flex-basis: calc(50% - 2rem);
    overflow: hidden;
    @media (max-width: $md) {
      flex-basis: 100%;
    }
  }
  &__link {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: flex-end;
    opacity: 0;
    @media (max-width: $lg) {
      justify-content: center;
    }
    &.isInViewPort {
      animation: appearFromBottomSmall 1s ease-out;
      opacity: 1;
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
