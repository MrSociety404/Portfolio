<script setup>

</script>

<template>
  <ul class="techs__list">
    <li class="techs__item" v-for="i in 8">
      <div href="#" class="techs__link">
        <div class="techs__logoSkeleton" />
        <span class="techs__nameSkeleton"></span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss">
.techs {
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
@keyframes pulse-bg {
  0% {
    background-color: #eee;
  }
  50% {
    background-color: #cccccc;
  }
  100% {
    background-color: #eee;
  }
}
</style>
