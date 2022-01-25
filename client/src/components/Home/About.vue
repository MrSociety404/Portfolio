<script setup>
import Button from '../Common/Button.vue';

</script>

<template>
  <section class="homeAbout">
    <p
      class="homeAbout__text"
    >I have the chance to work by passion and create awesome web application for my clients</p>
    <Button content="ABOUT ME" class="homeAbout__button" @click="$router.push('/about')" />
  </section>
</template>

<style lang="scss">
.homeAbout {
  text-align: center;
  margin-bottom: 9rem;
  &__text {
    max-width: 700px;
    margin: 0 auto 4rem auto;
    font-size: 1.5rem;
    @media (max-width: $md) {
      font-size: 1.3rem;
    }
    @media (max-width: $sm) {
      font-size: 1.1rem;
    }
  }
  &__button {
    margin: 0 auto;
  }
}
</style>
