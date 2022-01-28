<script setup>
import WorkList from '../components/Works/WorkList.vue';
import Footer from '../components/Common/Footer.vue';
import WorkListSkeleton from '../components/Works/WorkListSkeleton.vue';

</script>

<template>
  <main class="works">
    <h1 class="works__title">
      <span>All my works</span>
    </h1>
    <Suspense>
      <template #default>
        <WorkList />
      </template>
      <template #fallback>
        <WorkListSkeleton />
      </template>
    </Suspense>
  </main>
  <Footer extend />
</template>

<style lang="scss">
.works {
  margin-bottom: 5rem;
  &__title {
    font-size: 3.5rem;
    letter-spacing: 0.05rem;
    margin: 4rem 0 6rem 0;
    overflow: hidden;
    & span {
      display: block;
      animation: appearFromBottom 1s ease;
    }
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
