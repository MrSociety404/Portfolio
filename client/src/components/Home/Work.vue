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
      <router-link to="/project/sqdqsd" class="homeWorkCard__cursor">Checkout details</router-link>
      <div class="homeWorkCard__container">
        <div class="homeWorkCard__info">
          <h3>Project Name</h3>
          <span>Development</span>
        </div>
        <div class="homeWorkCard__arrow">
          <ArrowRight />
        </div>
      </div>
    </router-link>
  </li>
</template>

<style lang="scss">
.homeWorkCard {
  width: 100%;
  height: 400px;
  position: relative;
  @media (max-width: $sm) {
    height: 280px;
  }
  &:hover .homeWorkCard__arrow {
    @include themify($themes) {
      background-color: themed("secondary");
      & svg {
        color: themed("primary");
        transform: rotate(-45deg);
      }
    }
  }
  &__image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    @media (max-width: $sm) {
      height: 200px;
    }
    &:hover ~ .homeWorkCard__cursor {
      opacity: 1;
    }
  }
  &__cursor {
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 500;
    font-size: 0.8rem;
    @include themify($themes) {
      background-color: themed("secondary");
      color: themed("primary");
    }
    transition: opacity 0.2s ease;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  }
  &__info {
    margin-block: 0.3rem;
    & h3 {
      font-size: 1.4rem;
      font-weight: 500;
      margin-bottom: 0.4rem;
      @media (max-width: $sm) {
        font-size: 1.1rem;
      }
    }
    & span {
      font-weight: 300;
      font-size: 1.1rem;
      @media (max-width: $sm) {
        font-size: 1rem;
      }
    }
  }
  &__arrow {
    border-radius: 50%;
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.4s ease;
    @media (max-width: $sm) {
      width: 40px;
      height: 40px;
    }
    & svg {
      width: 50%;
      transform-origin: center;
      transition: color 0.2s ease, transform 0.6s ease;
    }
  }
}
</style>
