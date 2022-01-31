<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
})
</script>

<template>
  <section class="projectInfo">
    <h2 class="projectInfo__title">{{ title }}</h2>
    <p class="projectInfo__content">{{ content }}</p>
  </section>
</template>

<style lang="scss">
.projectInfo {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-block: 4rem;
  font-size: 1.1rem;
  @media (max-width: $lg) {
    flex-direction: column;
    gap: 1.5rem;
  }
  &__title {
    width: 40%;
    font-weight: bold;
    @media (max-width: $lg) {
      width: unset;
    }
  }
  &__content {
    width: 60%;
    text-align: justify;
    line-height: 2rem;
    @media (max-width: $lg) {
      width: unset;
    }
  }
}
</style>
