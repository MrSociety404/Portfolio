<script setup>

</script>

<template>
  <section class="aboutWho">
    <h2 class="aboutWho__title">
      <span class="aboutWho__title-outline">Qui</span> je suis
    </h2>
    <p
      class="aboutWho__content"
    >Je suis Fabrice, un jeune développeur web belge intéressé par les applications full stack. J'apprends beaucoup en autodidacte. J'ai néanmoins étudié l'informatique & réalisé une formation à BeCode Liège où j'ai pu perfectionner mes compétences</p>
  </section>
</template>

<style lang="scss">
.aboutWho {
  margin-bottom: 6rem;
  text-align: center;
  &__title {
    font-size: 3rem;
    font-weight: bold;
    &-outline {
      @include themify($themes) {
        -webkit-text-stroke-color: themed("secondary");
      }
      -webkit-text-fill-color: transparent;
      -webkit-text-stroke-width: 1px;
    }
  }
  &__content {
    max-width: 70%;
    margin: 2rem auto;
    font-size: 1.2rem;
    line-height: 2rem;
  }
}
</style>
