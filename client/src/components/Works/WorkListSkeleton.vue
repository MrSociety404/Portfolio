<script setup>

</script>

<template>
  <ul class="works__list">
    <li class="work" v-for="i in 4" :key="i"></li>
  </ul>
  <div class="works__container">
    <div class="works__list">
      <div class="work__link" v-for="i in 2">
        <div class="work__imageContainer">
          <div class="work__imageSkeleton" />
        </div>
        <p class="work__detailsSkeleton"></p>
      </div>
    </div>
    <div class="works__list second">
      <div class="work__link" v-for="i in 2">
        <div class="work__imageContainer">
          <div class="work__imageSkeleton" />
        </div>
        <p class="work__detailsSkeleton"></p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.work {
  &__imageSkeleton {
    height: 950px;
    width: 100%;
    animation: pulse-bg 1s infinite;
    border-radius: 5px;
    @media (max-width: $md) {
      width: 100%;
      height: 60vw;
    }
  }
  &__detailsSkeleton {
    height: 2rem;
    animation: pulse-bg 1s infinite;
    border-radius: 5px;
    max-width: 80%;
    margin: 5rem auto;
  }
}
</style>
