<script setup>
import WorkList from '../components/Works/WorkList.vue';

</script>

<template>
  <main class="works">
    <h1 class="works__title">All my works</h1>
    <Suspense>
      <template #default>
        <WorkList />
      </template>
      <template #fallback>load</template>
    </Suspense>
  </main>
</template>

<style lang="scss">
.works {
  &__title {
    font-size: 3.5rem;
    letter-spacing: 0.05rem;

    margin: 4rem 0 6rem 0;
    @media (max-width: $lg) {
      font-size: 3rem;
    }
    @media (max-width: $lg) {
      font-size: 2rem;
    }
    @media (max-width: $sm) {
      font-size: 1.8rem;
    }
  }
}
</style>
