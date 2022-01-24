<script setup>
import { onBeforeMount } from 'vue';
import Header from './components/Common/Header.vue';

onBeforeMount(() => {
  const html = document.querySelector('html')
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    html.className = 'theme-dark'
  } else {
    html.className = 'theme-light'
  }
})

</script>

<template>
  <Header />
  <router-view />
</template>

<style lang="scss">
body {
  @include themify($themes) {
    background-color: themed("primary");
    color: themed("secondary");
  }
}
</style>
