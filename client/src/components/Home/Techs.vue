<script setup>
import Button from '../Common/Button.vue';
import TechsList from './TechsList.vue';
import TechListSkeleton from './TechListSkeleton.vue';

</script>

<template>
  <section class="techs">
    <div class="techs__container">
      <h2 class="techs__title">Mes technologies du moment</h2>
      <p
        class="techs__desc"
      >J'adore découvrir beaucoup de technologies. Néanmoins, il viens un moment ou je dois en choisir quelqu'un pour mes projects. Ceux-ci sont certaine technologies que j'ai retenu</p>
      <Button content="Voir des exemples" class="techs__button" @click="$router.push('/works')" />
    </div>
    <Suspense>
      <template #default>
        <TechsList />
      </template>
      <template #fallback>
        <TechListSkeleton />
      </template>
    </Suspense>
  </section>
</template>

<style lang="scss">
.techs {
  margin-bottom: 10rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: $lg) {
    flex-direction: column;
    align-items: center;
  }
  &__container {
    max-width: 35%;
    @media (max-width: $lg) {
      max-width: 50%;
      text-align: center;
      margin-bottom: 6rem;
    }
    @media (max-width: $md) {
      max-width: 80%;
    }
  }
  &__title {
    font-size: 3rem;
    margin-bottom: 1rem;
    @media (max-width: $lg) {
      margin-bottom: 2rem;
    }
    @media (max-width: $md) {
      font-size: 2rem;
    }
  }
  &__desc {
    font-size: 1rem;
    text-align: justify;
    line-height: 1.5rem;
    margin-bottom: 2rem;
    @media (max-width: $lg) {
      text-align: center;
      margin-bottom: 3rem;
    }
  }
  &__button {
    @media (max-width: $lg) {
      margin: 0 auto;
    }
  }
}
</style>
