<script setup>
defineProps({
  label: {
    type: String,
    default: ''
  },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  }
})
</script>

<template>
  <div class="input">
    <input
      v-bind="$attrs"
      :value="modelValue"
      :id="label"
      placeholder=" "
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
      class="input__field"
    />
    <label :for="label" class="input__label">{{ label }}</label>
  </div>
</template>

<style lang="scss">
.input {
  position: relative;
  margin-block: 2rem;
  flex-basis: calc(50% - 2rem);
  @media (max-width: $md) {
    flex-basis: 100%;
    width: 100%;
  }
  &__label {
    position: absolute;
    bottom: 0.25rem;
    left: 0.2rem;
    opacity: 0.7;
    transition: all 0.2s ease;
  }
  &__field {
    @include themify($themes) {
      border-bottom: 1px solid themed("primary");
    }
    padding: 0.4rem;
    width: 100%;
    &:focus ~ .input__label,
    &:not(:placeholder-shown) ~ .input__label {
      transform: translateY(-30px);
    }
  }
}
</style>
