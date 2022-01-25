<script setup>
import Github from "../../assets/svg/github.svg"
import Linkedin from "../../assets/svg/linkedin.svg"
import Button from './Button.vue';

defineProps({
  extend: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Have any idea?'
  },
  subtitle: {
    type: String,
    default: 'Tell me about it'
  }
})
</script>

<template>
  <footer class="footer">
    <div v-if="extend" class="footer__cta">
      <div>
        <h2 class="footer__title">{{ title }}</h2>
        <h3 class="footer__subtitle">{{ subtitle }}</h3>
      </div>
      <Button :inverted="true" content="Contact me" @click="$router.push('contact')" />
    </div>
    <div class="footer__container">
      <p class="footer__info">© 2022| All Rights Reserved.</p>
      <ul class="footer__list">
        <li class="footer__item">
          <a href="https://github.com/MrSociety404" class="footer_link">
            <Github />
          </a>
        </li>
        <li class="footer__item">
          <a href="https://www.linkedin.com/in/fabrice-cst-29878821b/" class="footer_link">
            <Linkedin />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  max-width: $xl;
  margin: 0 auto;
  padding: 2rem;
  &__cta {
    width: 100%;
    height: 220px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    margin-bottom: 4rem;
    @include themify($themes) {
      background-color: themed("secondary");
      color: themed("primary");
    }
    @media (max-width: $lg) {
      flex-direction: column;
      height: 300px;
      text-align: center;
    }
    & div {
      font-size: 2.25rem;
      @media (max-width: $sm) {
        font-size: 1.5rem;
      }
    }
  }
  &__title {
    font-weight: 500;
  }
  &__subtitle {
    font-weight: 300;
  }
  &__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    @media (max-width: $sm) {
      flex-direction: column;
      text-align: center;
      gap: 2rem;
    }
  }
  &__list {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
}
</style>
