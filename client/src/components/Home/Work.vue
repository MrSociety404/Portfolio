<script setup>
import ArrowRight from "../../assets/svg/arrowRight.svg"
</script>

<template>
  <li class="homeWorkCard">
    <router-link to="/project/sdqsd" class="homeWorkCard-link">
      <img
        src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        alt
        class="homeWorkCard__image"
      />
      <div class="homeWorkCard__container">
        <h3 class="homeWorkCard__name">Project Name</h3>
        <div class="homeWorkCard__arrow">
          <ArrowRight />
        </div>
      </div>
      <p class="homeWorkCard__role">Developement</p>
    </router-link>
  </li>
</template>

<style lang="scss">
.homeWorkCard {
  flex-basis: calc(48% - 2rem);
  margin-bottom: 6rem;
  position: relative;
  @media (max-width: $md) {
    margin-bottom: 2rem;
  }
  &:nth-child(4) {
    align-self: flex-start;
  }
  &:hover {
    .homeWorkCard__arrow {
      @include themify($themes) {
        background-color: themed("secondary");
        & svg {
          color: themed("primary");
          transform: rotate(-45deg);
        }
      }
    }
    .homeWorkCard__image {
      transform: scale(0.98);
    }
  }
  &__image {
    object-fit: cover;
    margin-bottom: 2rem;
    transition: transform 0.4s ease;
  }
  &__container {
    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  &__name {
    font-size: 2rem;
  }
  &__arrow {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s ease;
    & svg {
      transition: transform 0.4s ease;
      width: 60%;
    }
  }
}
</style>
