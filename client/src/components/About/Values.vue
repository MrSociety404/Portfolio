<script setup>
import ValueCard from './ValueCard.vue';
import Money from "../../assets/svg/money.svg"
import Day from "../../assets/svg/day.svg"
import Opti from "../../assets/svg/opti.svg"

const values = [
  {
    title: "Travail quotidien",
    content: "Un besoin constant d'apprendre de nouvelles choses me motive à travailler tous les jours"
  },
  {
    title: "Passion avant l'argent",
    content: "Il est évident que je ne pourrai pas uniquement vivre d'amour et d'eau fraiche, c'est avant tout la passion qui m'anime. "
  },
  {
    title: "Optimisation",
    content: "Bien que le vert ne soit pas ma couleur préférée, il faut quand même bien avouer que sur un score lighthouse ou sur un logo en forme de ' V '; c'est beau."
  },
]

</script>

<template>
  <section class="aboutValue">
    <h2 class="aboutValue__title">Mes valeurs</h2>
    <ul class="aboutValue__list">
      <ValueCard :value="values[0]">
        <Day />
      </ValueCard>
      <ValueCard :value="values[1]">
        <Money />
      </ValueCard>
      <ValueCard :value="values[2]">
        <Opti />
      </ValueCard>
    </ul>
  </section>
</template>

<style lang="scss">
.aboutValue {
  margin-bottom: 6rem;
  &__title {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
  &__list {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
    @media (max-width: $lg) {
      justify-content: center;
    }
  }
}
</style>
