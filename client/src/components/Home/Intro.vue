<script setup>
import Vuejs from "../../assets/svg/vue.svg"
import JavaScript from "../../assets/svg/javascript.svg"
</script>

<template>
  <section class="homeIntro">
    <div class="homeIntro__container">
      <h3 class="homeIntro__name">Fabrice Castrogiovanni</h3>
      <h1 class="homeIntro__title">
        <span class="homeIntro__title-container">
          <span class="homeIntro__title-content">JUNIOR FULL STACK</span>
        </span>
        <span class="homeIntro__title-container">
          <span class="homeIntro__title-content">WEB DEVELOPER</span>
        </span>
      </h1>
    </div>
    <div class="homeIntro__float vue">
      <div>
        <Vuejs />
      </div>
    </div>
    <div class="homeIntro__float js">
      <div>
        <JavaScript />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.homeIntro {
  height: 75vh;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 10rem;
  &__float {
    position: absolute;
    border-radius: 50%;
    &.vue {
      animation: bounce 8s ease-in infinite;
      top: 200px;
      right: 150px;
      z-index: -1;
      & div::after {
        width: 100px;
        background-color: rgba(65, 184, 131, 0.4);
        @include themify($themes) {
          box-shadow: 0 0 0 149px themed("primary"),
            0 0 0 150px themed("border-light");
        }
        @media (max-width: $md) {
          width: 80px;
          @include themify($themes) {
            box-shadow: 0 0 0 99px themed("primary"),
              0 0 0 100px themed("border-light");
          }
        }
      }
      & div svg {
        transform: translate(-50%, -42%);
        @media (max-width: $md) {
          width: 40px;
          height: 40px;
        }
      }
      @media (max-width: $md) {
        right: 80px;
        top: 100px;
      }
    }
    &.js {
      bottom: 100px;
      left: 60px;
      z-index: -1;
      animation: bounce 6s ease-in infinite 1s;
      & div::after {
        width: 100px;
        background-color: rgba(245, 222, 25, 0.3);
        @include themify($themes) {
          box-shadow: 0 0 0 99px themed("primary"),
            0 0 0 100px themed("border-light");
        }
        @media (max-width: $md) {
          width: 80px;
          @include themify($themes) {
            box-shadow: 0 0 0 69px themed("primary"),
              0 0 0 70px themed("border-light");
          }
        }
      }
      & div svg {
        transform: translate(-50%, -50%);
        @media (max-width: $md) {
          width: 30px;
          height: 30px;
        }
      }
    }
    & div {
      position: relative;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        aspect-ratio: 1;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        z-index: -1;
      }
      & svg {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
      }
    }
  }
  &__container {
    width: 100%;
  }
  &__name {
    font-size: 2.25rem;
    margin-bottom: 1rem;
    animation: appearFromBottomSmall 1s ease-out;
    @media (max-width: $md) {
      font-size: 1.5rem;
    }
    @media (max-width: $sm) {
      font-size: 1rem;
    }
  }
  &__title {
    font-size: 6rem;
    font-weight: 500;
    width: 100%;
    @media (max-width: $lg) {
      font-size: 4rem;
    }
    @media (max-width: $md) {
      font-size: 3rem;
    }
    @media (max-width: $sm) {
      font-size: 1.8rem;
    }
    &-container {
      display: block;
      overflow: hidden;
      &:last-child {
        text-align: right;
        .homeIntro__title-content {
          animation: appearFromBottom 1.5s ease-out;
        }
      }
      &:first-child {
        .homeIntro__title-content {
          animation: appearFromBottom 1s ease-out;
        }
      }
    }
    &-content {
      display: block;
    }
  }
}
</style>
