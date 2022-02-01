<script setup>
import { ref, watchEffect } from "vue";
import { switchTheme } from "../../features/utils";

// Components
import Close from "../../assets/svg/close.svg"
import Switch from "./Switch.vue";

const emit = defineEmits(['closeNav'])
const isDarkMode = ref(localStorage.getItem('isDark') === 'true' ? true : false)

watchEffect(() => {
  switchTheme(isDarkMode.value);
})
</script>

<template>
  <div class="nav" @click.self="emit('closeNav')">
    <transition appear name="from-left">
      <aside class="nav__aside">
        <button class="nav__close" @click="emit('closeNav')" @changeState="logTest()">
          <Close />
        </button>
        <nav class="nav__nav">
          <ul class="nav__list">
            <li class="nav__item">
              <router-link to="/" @click="emit('closeNav')">
                <span>ACCUEIL</span>
              </router-link>
            </li>
            <li class="nav__item">
              <router-link to="/works" @click="emit('closeNav')">
                <span>TRAVAUX</span>
              </router-link>
            </li>
            <li class="nav__item">
              <router-link to="/about" @click="emit('closeNav')">
                <span>À PROPOS</span>
              </router-link>
            </li>
            <li class="nav__item">
              <router-link to="/contact" @click="emit('closeNav')">
                <span>CONTACT</span>
              </router-link>
            </li>
          </ul>
        </nav>
        <div class="nav__settings">
          <div class="nav__settings-box">
            <Switch v-model="isDarkMode" />
            <div class="nav__settings-container">
              <transition name="change-text">
                <span v-if="isDarkMode" class="nav__settings-theme">SOMBRE</span>
                <span v-else class="nav__settings-theme">CLAIR</span>
              </transition>
            </div>
          </div>
          <a
            href="mailto:info@fabricecst.com"
            class="nav__settings-mail"
            title="info@fabricecst.com"
          >info@fabricecst.com</a>
        </div>
      </aside>
    </transition>
  </div>
</template>

<style lang="scss">
.nav {
  position: fixed;
  z-index: 999;
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
    user-select: none;
    padding: 0.2rem 0;
    margin-block: 1rem;
    position: relative;
    & span {
      position: relative;
      padding-block: 0.2rem;
      &::after {
        content: "";
        width: 0%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
        transition: ease 0.3s;
        @include themify($themes) {
          background-color: themed("secondary");
        }
        @media (max-width: $md) {
          left: 50%;
        }
      }
    }
    &:hover span::after {
      width: 100%;
      @media (max-width: $md) {
        left: 0;
      }
    }
  }
  &__settings {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    @media (max-width: $md) {
      align-items: center;
    }
    &-mail {
      font-weight: 500;
      letter-spacing: 0.05rem;
      font-size: 1.1rem;
      padding: 0.5rem 0;
      position: relative;
      &:after {
        content: "";
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        @include themify($themes) {
          background-color: themed("secondary");
        }
      }
    }
    &-box {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    &-container {
      overflow: hidden;
      display: flex;
      flex-direction: column;
      max-height: 20px;
    }
    &-theme {
      font-weight: 300;
      letter-spacing: 0.05rem;
      font-size: 0.9rem;
    }
  }
}
</style>
