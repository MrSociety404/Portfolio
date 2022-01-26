<script setup>
defineProps(['content', 'inverted'])
</script>

<template>
  <button :class="`button ${inverted ? 'inverted' : ''}`">{{ content }}</button>
</template>

<style lang="scss">
.button {
  @include themify($themes) {
    background-color: themed("secondary");
    color: themed("primary");
  }
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 5px;
  padding: 0.8rem 4rem;
  display: block;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
  transform-origin: center;
  @media (max-width: $md) {
    font-size: 1rem;
  }
  @media (max-width: $sm) {
    padding: 0.8rem 3rem;
  }
  &:active {
    transform: translateY(2px);
  }
  &.inverted {
    @include themify($themes) {
      background-color: themed("primary");
      color: themed("secondary");
    }
  }
  &:hover {
    transform: scale(1.025);
  }
}
</style>
