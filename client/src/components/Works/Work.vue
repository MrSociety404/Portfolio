<script setup>
import { SERVER_URL } from "../../features/config"

defineProps({
  work: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li class="work">
    <router-link :to="`/project/${work.uniqueName}`" class="work__link">
      <div class="work__imageContainer">
        <img
          :src="SERVER_URL + work.preview.urlPortrait"
          :alt="work.preview.alternativeText"
          class="work__image"
        />
      </div>
      <p class="work__details">
        <span class="work__name">{{ work.title }}</span>
        - {{ work.shortDescription }}
      </p>
    </router-link>
  </li>
</template>

<style lang="scss">
.work {
  flex-basis: calc(50% - 4rem);
  &__imageContainer {
    height: 1000px;
    margin-bottom: 3rem;
    transform-origin: center;
    transition: transform 0.4s ease-out;
  }
  &__image {
    object-fit: cover;
    height: 100%;
  }
  &__details {
    text-align: center;
    font-size: 1.5rem;
    max-width: 80%;
    font-weight: 300;
    margin-inline: auto;
  }
  &__name {
    font-weight: bold;
  }
  &:nth-child(even) {
    margin-top: 15rem;
  }
  &:hover {
    .work__imageContainer {
      transform: scale(0.98);
    }
  }
}
</style>
