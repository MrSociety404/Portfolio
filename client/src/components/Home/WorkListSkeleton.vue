<script setup>

</script>

<template>
  <ul class="homeWorkList">
    <li class="homeWorkCard" v-for="i in 2">
      <div class="homeWorkCard-link">
        <div class="homeWorkCard__imageSkeleton" />
        <div class="homeWorkCard__container">
          <h3 class="homeWorkCard__nameSkeleton"></h3>
          <div class="homeWorkCard__arrow"></div>
        </div>
        <p class="homeWorkCard__roleSkeleton"></p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.homeWorkCard {
  &:nth-child(2) .homeWorkCard__imageSkeleton {
    height: 400px;
  }
  &:nth-child(3) .homeWorkCard__imageSkeleton {
    height: 400px;
  }
  &__imageSkeleton {
    width: 100%;
    height: 280px;
    animation: pulse-bg 1s infinite;
    margin-bottom: 1rem;
    border-radius: 5px;
  }
  &__nameSkeleton {
    width: 200px;
    height: 35px;
    animation: pulse-bg 1s infinite;
    border-radius: 5px;
  }
  &__roleSkeleton {
    width: 100px;
    height: 20px;
    animation: pulse-bg 1s infinite;
    border-radius: 5px;
  }
}
</style>
