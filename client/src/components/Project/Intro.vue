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
    <PreviewIntro :previewURL="preview.url" />
  </section>
</template>

<style lang="scss">
.projectIntro {
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  margin-block: 4rem;
  &__container {
    flex-basis: 40%;
  }
  &__status {
    font-size: 1.3rem;
    margin-bottom: 4em;
  }
  &__title {
    font-size: 2rem;
    font-weight: bold;
    text-align: right;
    max-width: 50%;
    margin-left: auto;
  }
}
</style>
