<script setup>
import WorkList from './WorkList.vue';
import Button from '../Common/Button.vue';
import WorkListSkeleton from './WorkListSkeleton.vue';

</script>

<template>
  <section class="selectedWorks">
    <h2 class="selectedWorks__title">Selected Projects</h2>
    <Suspense>
      <template #default>
        <WorkList />
      </template>
      <template #fallback>
        <WorkListSkeleton />
      </template>
    </Suspense>
    <Button
      class="selectedWorks__button"
      content="Checkout more works"
      @click="$router.push('/works')"
    />
  </section>
</template>

<style lang="scss">
.selectedWorks {
  margin-bottom: 10rem;
  &__title {
    font-size: 3.5rem;
    margin-bottom: 4rem;
    @media (max-width: $md) {
      font-size: 2.5rem;
      text-align: center;
    }
    @media (max-width: $sm) {
      font-size: 1.8rem;
    }
  }
  &__button {
    margin: 0 auto;
  }
}
</style>
