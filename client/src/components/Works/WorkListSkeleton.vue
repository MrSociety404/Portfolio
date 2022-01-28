<script setup>

</script>

<template>
  <ul class="works__list">
    <li class="work" v-for="i in 4" :key="i">
      <div class="work__link">
        <div class="work__imageContainer">
          <div class="work__imageSkeleton" />
        </div>
        <p class="work__detailsSkeleton"></p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.work {
  &__imageSkeleton {
    height: 100%;
    width: 100%;
    animation: pulse-bg 1s infinite;
    border-radius: 5px;
  }
  &__detailsSkeleton {
    width: 80%;
    height: 2rem;
    animation: pulse-bg 1s infinite;
    margin-inline: auto;
    border-radius: 5px;
  }
}
</style>
