<script setup>
import ValueCard from './ValueCard.vue';
import Money from "../../assets/svg/money.svg"
import Day from "../../assets/svg/day.svg"
import Opti from "../../assets/svg/opti.svg"

const values = [
  {
    title: "Travail quotidien",
    content: "Un besoin continu d'apprendre de nouvelles choses me motive à travailler tous les jours"
  },
  {
    title: "Passion avant l'argent",
    content: "Oui, je travaille par passion et j'aime mon travail.C'est un mensonge de dire que l\'argent n\'a pas d\'importance pour moi mais ce n\'est pas mon objectif principal"
  },
  {
    title: "Optimisation",
    content: "Le vert n'est pas ma couleur préférée, mais j'adore voir cette couleur dans tous mes scores Google Lighthouse. C'est un objectif pour moi"
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
