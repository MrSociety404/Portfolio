<script setup>
import { onMounted, ref } from "@vue/runtime-core"
import { SERVER_URL } from "../../features/config"
import simpleParallax from 'simple-parallax-js';

defineProps({
  work: {
    type: Object,
    required: true
  }
})

const image = ref(null)

onMounted(() => {
  new simpleParallax(image.value);
})

</script>

<template>
  <div class="work">
    <router-link :to="`/project/${work.uniqueName}`" class="work__link">
      <div class="work__imageContainer">
        <img
          :src="SERVER_URL + work.preview.urlPortrait"
          :alt="work.preview.alternativeText"
          class="work__image"
          ref="image"
        />
      </div>
      <p class="work__details">
        <span class="work__name">{{ work.title }}</span>
        - {{ work.shortDescription }}
      </p>
    </router-link>
  </div>
</template>

<style lang="scss">
.work {
  flex-basis: calc(50% - 2rem);
  @media (max-width: $md) {
    flex-basis: 100%;
    width: 100%;
  }
  &__imageContainer {
    max-height: 1000px;
    transform-origin: center;
    transition: transform 0.4s ease-out;
    display: block;
    @media (max-width: $md) {
      width: 100%;
      height: 60vw;
      margin-bottom: 1.5rem;
    }
  }
  &__image {
    height: 100%;
    object-fit: cover;
    @media (max-width: $md) {
      width: 100%;
      height: 60vw;
    }
  }
  &__details {
    text-align: center;
    font-size: 1.5rem;
    max-width: 80%;
    font-weight: 300;
    margin: 5rem auto;
    @media (max-width: $md) {
      font-size: 1.5rem;
    }
  }
  &__name {
    font-weight: bold;
  }
  &:hover {
    .work__imageContainer {
      transform: scale(0.98);
    }
  }
}
</style>
