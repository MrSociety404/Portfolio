<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <label class="switch">
    <input
      type="checkbox"
      class="switch__checkbox"
      :checked="modelValue"
      @change="$emit('update:modelValue', $event.target.checked)"
    />
    <span class="switch__check"></span>
  </label>
</template>

<style lang="scss">
.switch {
  @include themify($themes) {
    background-color: themed("secondary");
  }
  width: 40px;
  height: 20px;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: ease-in 0.3s;
  &__checkbox {
    display: none;
    &:checked ~ .switch__check {
      transform: translateX(20px);
    }
  }
  &__check {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    @include themify($themes) {
      background-color: themed("primary");
    }
    border-radius: 50%;
    transition: 0.5s;
  }
}
</style>

