<script setup>

</script>

<template>
  <ul class="techs__list">
    <li class="techs__item" v-for="i in 4">
      <div href="#" class="techs__linkSkeleton">
        <div class="techs__logoSkeleton" />
        <span class="techs__nameSkeleton"></span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.techs {
  &__linkSkeleton {
    display: flex;
    gap: 3rem;
    align-items: center;
    justify-content: flex-end;
    opacity: 1;
    @media (max-width: $lg) {
      justify-content: center;
    }
  }
  &__logoSkeleton {
    width: 50px;
    height: 50px;
    animation: pulse-bg 1s infinite;
    border-radius: 5px;
  }
  &__nameSkeleton {
    width: 100px;
    height: 24px;
    border-radius: 5px;
    animation: pulse-bg 1s infinite;
  }
}
</style>
