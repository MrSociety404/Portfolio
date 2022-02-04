<script setup>
import Button from '../Common/Button.vue';

</script>

<template>
  <section class="homeAbout">
    <p
      class="homeAbout__text"
    >J'ai la chance de travailler par passion et de créer de superbes applications web en accord avec mes valeurs et convictions.</p>
    <Button content="À propos de moi" class="homeAbout__button" @click="$router.push('/about')" />
  </section>
</template>

<style lang="scss">
.homeAbout {
  text-align: center;
  margin-bottom: 20rem;
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
