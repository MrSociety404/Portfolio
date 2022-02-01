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
    background-image: linear-gradient(
      90deg,
      #eeeeee 0%,
      #eeeeee 40%,
      #dddddd 50%,
      #dddddd 55%,
      #eeeeee 65%,
      #eeeeee 100%
    );
    background-size: 400%;
    animation: pulse-bg 1.5s infinite;
    border-radius: 5px;
  }
  &__nameSkeleton {
    width: 100px;
    height: 24px;
    border-radius: 5px;
    background-image: linear-gradient(
      90deg,
      #eeeeee 0%,
      #eeeeee 40%,
      #dddddd 50%,
      #dddddd 55%,
      #eeeeee 65%,
      #eeeeee 100%
    );
    background-size: 400%;
    animation: pulse-bg 1s infinite;
  }
}
</style>
