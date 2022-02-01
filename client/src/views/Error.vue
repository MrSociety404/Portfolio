<script setup>
import Footer from '../components/Common/Footer.vue';
import Button from '../components/Common/Button.vue';

</script>

<template>
  <main class="error">
    <div>
      <h1 class="error__title">404</h1>
      <p class="error__desc">Oups ! cette page n'existe pas</p>
    </div>
    <Button content="Retour à la page d'accueil" @click="$router.push('/')" />
  </main>
  <Footer />
</template>

<style lang="scss">
.error {
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  &__title {
    font-size: 10rem;
    @media (max-width: $md) {
      font-size: 5rem;
    }
  }
  &__desc {
    font-size: 3rem;
    @media (max-width: $md) {
      font-size: 2rem;
    }
  }
}
</style>
