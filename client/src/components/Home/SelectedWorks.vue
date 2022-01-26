<script setup>
import { onMounted, ref } from 'vue';
import { inViewPort } from '../../features/utils';

// Components
import WorkList from './WorkList.vue';
import Button from '../Common/Button.vue';
import WorkListSkeleton from './WorkListSkeleton.vue';

// Logic
const title = ref(null)
onMounted(() => {

  const Obs = new IntersectionObserver(inViewPort)
  Obs.observe(title.value, {})
})
</script>

<template>
  <section class="selectedWorks">
    <h2 class="selectedWorks__title">
      <span ref="title">Selected Projects</span>
    </h2>
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
    overflow: hidden;
    & span {
      display: block;
      &.is-inViewport {
        animation: appearFromBottom 1s ease;
      }
    }
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
