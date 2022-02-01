<script setup>
import Button from '../Common/Button.vue';

</script>

<template>
  <section class="aboutIntro">
    <h1 class="aboutIntro__title">
      Tout ce que vous devez
      <br />
      <span class="aboutIntro__title-lineout">savoir</span> sur moi
    </h1>
    <p
      class="aboutIntro__desc"
    >Je suis un développeur web full stack junior. N'oubliez jamais que je suis belge donc j'adore les frites belges</p>
    <Button content="Contactez moi" @click="$router.push('/contact')" />
  </section>
</template>

<style lang="scss">
.aboutIntro {
  margin-bottom: 12rem;
  &__title {
    margin-block: 1.5em;
    font-size: 4rem;
    font-weight: bold;
    &-lineout {
      @include themify($themes) {
        -webkit-text-stroke-color: themed("secondary");
      }
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
    }
    @media (max-width: $md) {
      font-size: 3rem;
      &-lineout {
        -webkit-text-stroke-width: 0.5px;
      }
    }
    @media (max-width: $sm) {
      font-size: 2rem;
    }
  }
  &__desc {
    text-align: right;
    font-size: 1.3rem;
    max-width: 60%;
    margin-left: auto;
    margin-bottom: 6rem;
    @media (max-width: $md) {
      max-width: 80%;
    }
    @media (max-width: $sm) {
      max-width: unset;
    }
  }
}
</style>
