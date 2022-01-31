<script setup>
import PreviewIntro from './PreviewIntro.vue';
defineProps({
  title: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  preview: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="projectIntro">
    <div class="projectIntro__container">
      <h2 class="projectIntro__status">{{ status }}</h2>
      <h1 class="projectIntro__title">{{ title }}</h1>
    </div>
    <PreviewIntro :previewURL="preview.urlProject" />
  </section>
</template>

<style lang="scss">
.projectIntro {
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  margin-block: 4rem;
  @media (max-width: $lg) {
    flex-direction: column;
    gap: 2rem;
    & svg {
      width: 100%;
      height: auto;
    }
  }
  &__container {
    flex-basis: 40%;
  }
  &__status {
    font-size: 1.3rem;
    margin-bottom: 4em;
    @media (max-width: $lg) {
      margin-bottom: 2rem;
    }
  }
  &__title {
    font-size: 3rem;
    font-weight: bold;
    text-align: right;
    max-width: 80%;
    margin-left: auto;
    @media (max-width: $lg) {
      max-width: unset;
      text-align: left;
    }
  }
}
</style>
