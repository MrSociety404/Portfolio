<script setup>
import Footer from '../components/Common/Footer.vue';
import Intro from '../components/About/Intro.vue';
import Values from '../components/About/Values.vue';
import Who from '../components/About/Who.vue';
import Why from '../components/About/Why.vue';

</script>

<template>
  <main class="about">
    <Intro />
    <Values />
    <Who />
    <section class="aboutIllu">
      <img src="../assets/images/about.jpg" alt="about" />
    </section>
    <Why />
  </main>
  <Footer extend />
</template>

<style lang="scss">
.aboutIllu {
  margin-bottom: 6rem;
}
</style>
