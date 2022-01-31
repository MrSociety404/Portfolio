<script setup>
import { SERVER_URL } from "../../features/config"

defineProps({
  images: {
    type: [Object],
    required: true
  }
})
</script>

<template>
  <section class="projectPreviews">
    <h2 class="projectInfo__title">Previews</h2>
    <div class="projectPreviews__previews">
      <img
        v-for="image in images"
        :key="image.id"
        :src="SERVER_URL + image.url"
        :alt="image.alternativeText"
      />
    </div>
  </section>
</template>

<style lang="scss">
.projectPreviews {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-block: 4rem;
  font-size: 1.1rem;
  @media (max-width: $lg) {
    flex-direction: column;
    gap: 1.5rem;
  }
  &__previews {
    width: 60%;
    @media (max-width: $lg) {
      width: unset;
    }
    & img {
      display: block;
      width: 100%;
      height: auto;
      margin-bottom: 4rem;
    }
  }
}
</style>
