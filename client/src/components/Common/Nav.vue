<script setup>
import Close from "../../assets/svg/close.svg"

const emit = defineEmits(['closeNav'])

</script>

<template>
  <div class="nav" @click.self="emit('closeNav')">
    <transition appear name="from-left">
      <aside class="nav__aside">
        <button class="nav__close" @click="emit('closeNav')">
          <Close />
        </button>
        <nav class="nav__nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link to="/" @click="emit('closeNav')">HOME</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/works" @click="emit('closeNav')">WORKS</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/about" @click="emit('closeNav')">ABOUT</router-link>
            </li>
            <li class="nav__item">
              <router-link to="/contact" @click="emit('closeNav')">CONTACT</router-link>
            </li>
          </ul>
        </nav>
        <div class="nav__settings">
          <button>switch</button>
        </div>
      </aside>
    </transition>
  </div>
</template>

<style lang="scss">
.nav {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backdrop-filter: blur(2px);
  @include themify($themes) {
    background-color: themed("primary-nav");
  }
  &__aside {
    width: 500px;
    height: 100%;
    margin-left: auto;
    padding: 2rem 2rem 2rem 6rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include themify($themes) {
      background-color: themed("primary");
    }
    @media (max-width: $md) {
      width: 100%;
      padding: 2rem;
    }
  }
  &__close {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    & svg {
      width: 40px;
      height: 40px;
      @media (max-width: $md) {
        width: 25px;
        height: 25px;
      }
    }
  }
  &__list {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: 0.2rem;
    padding-bottom: 10rem;
    @media (max-width: $md) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0;
    }
  }
  &__item {
    cursor: pointer;
    padding: 0.2rem 0;
    margin-block: 1rem;
  }
  &__settings {
    display: flex;
  }
}
</style>
