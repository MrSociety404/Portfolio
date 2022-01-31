<script setup>
defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  }
})
</script>

<template>
  <div class="textarea">
    <textarea
      id="message"
      placeholder=" "
      @input="$emit('update:modelValue', $event.target.value)"
      class="textarea__field"
    >{{ modelValue }}</textarea>
    <label for="message" class="textarea__label">Message</label>
  </div>
</template>

<style lang="scss">
.textarea {
  position: relative;
  margin-block: 2rem;
  &__label {
    position: absolute;
    top: 0px;
    left: 0;
    opacity: 0.7;
    transition: all 0.2s ease;
  }
  &__field {
    @include themify($themes) {
      border-bottom: 1px solid themed("primary");
    }
    padding: 0.4rem;
    width: 100%;
    &:focus ~ .textarea__label,
    &:not(:placeholder-shown) ~ .textarea__label {
      transform: translateY(-30px);
    }
  }
}
</style>
