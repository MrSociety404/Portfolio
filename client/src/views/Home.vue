<script setup>
import Intro from '../components/Home/Intro.vue';
import About from '../components/Home/About.vue';
import SelectedWorks from '../components/Home/SelectedWorks.vue';
import Footer from '../components/Common/Footer.vue';
import Techs from '../components/Home/Techs.vue';

</script>

<template>
  <main class="home">
    <Intro />
    <About />
    <SelectedWorks />
    <Techs />
  </main>
  <Footer extend />
</template>

<style lang="scss">
</style>
