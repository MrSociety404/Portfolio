<script setup>
import { onMounted } from "vue";
import Alert from "../../assets/svg/alert.svg"
import Check from "../../assets/svg/check.svg"

defineProps({
  alertInfo: {
    type: Object,
    required: true,
  }
})

const emit = defineEmits(['closePopup'])

onMounted(() => {
  setTimeout(() => {
    emit('closePopup')
  }, 5000)
})
</script>

<template>
  <div class="alert">
    <div class="alert__icon">
      <Alert v-if="alertInfo.error" />
      <Check v-else />
    </div>
    <div class="alert__box">
      <h2 class="alert__title">{{ alertInfo.title }}</h2>
      <p class="alert__message">{{ alertInfo.message }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.alert {
  position: absolute;
  bottom: -50px;
  left: 0;
  right: 0;
  margin-inline: auto;
  @include themify($themes) {
    background-color: themed("secondary");
    border: 1px solid themed("primary");
  }
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 420px;
  width: 100%;
  height: 100px;
  padding: 0.5rem 1.5rem;
  &__icon {
    flex-basis: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
}
</style>
