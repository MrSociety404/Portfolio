<script setup>
defineProps({
  value: {
    type: Object,
    requried: true
  }
})
</script>

<template>
  <li class="valueCard">
    <div class="valueCard__icon">
      <slot />
    </div>
    <h3 class="valueCard__title">{{ value.title }}</h3>
    <p class="valueCard__content">{{ value.content }}</p>
  </li>
</template>

<style lang="scss">
.valueCard {
  flex-basis: 30%;
  text-align: center;
  height: 330px;
  padding: 2rem;
  @include themify($themes) {
    background-color: themed("secondary");
    color: themed("primary");
  }
  @media (max-width: $lg) {
    flex-basis: calc(50% - 2rem);
  }
  @media (max-width: $md) {
    flex-basis: 100%;
  }
  &__icon {
    width: 50px;
    height: 50px;
    margin: 1rem auto;
  }
  &__title {
    font-weight: bold;
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
}
</style>
