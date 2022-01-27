<script setup>
import { onBeforeMount } from 'vue';
import Header from './components/Common/Header.vue';
import { initTheme } from './features/utils';

onBeforeMount(() => {
  initTheme()
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
