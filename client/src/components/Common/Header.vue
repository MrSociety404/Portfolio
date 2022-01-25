<script setup>
import { ref } from "vue";
import Hamburger from "../../assets/svg/hamburger.svg"
import Nav from "./Nav.vue";

const isOpen = ref(false)

const toggleNav = () => {
  isOpen.value = !isOpen.value
}

</script>

<template>
  <header class="header">
    <h2 class="header__title">Fabrice Cst</h2>
    <div></div>
    <div class="header__box" @click="toggleNav()">
      <span class="header__box-legend">menu</span>
      <Hamburger class="header__nav" />
    </div>
  </header>
  <Nav v-if="isOpen" @close-nav="toggleNav()" />
</template>

<style lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: $xxl;
  margin: 0 auto;
  padding: 2rem 2rem;
  font-size: 1.5rem;
  position: relative;
  &__title {
    font-weight: 500;
    position: absolute;
    z-index: 9999;
  }
  &__box {
    font-weight: 300;
    cursor: pointer;
    user-select: none;
    &-legend {
      margin-right: 30px;
      @media (max-width: $sm) {
        display: none;
      }
    }
  }
}
</style>

