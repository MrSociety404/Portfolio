<script setup>
defineProps({
  desc: {
    type: String,
    required: true
  },
  info: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <section class="projectDesc">
    <p>{{ desc }}</p>
    <div class="projectDesc__container">
      <div class="projectDesc__box">
        <span class="projectDesc__title">Site</span>
        <a :href="info.url" class="projectDesc__content">{{ info.url }}</a>
      </div>
      <div class="projectDesc__box">
        <span class="projectDesc__title">Date du projet</span>
        <span class="projectDesc__content">
          {{
            new Date(info.date).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: 'short'
            })
          }}
        </span>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.projectDesc {
  @include themify($themes) {
    border-bottom: 1px solid themed("border-light");
  }
  margin-bottom: 2rem;
  & p {
    font-size: 1.3rem;
    line-height: 2rem;
    text-align: justify;
    margin-bottom: 3rem;
  }
  &__container {
    display: flex;
    align-items: flex-start;
    @media (max-width: $md) {
      flex-direction: column;
    }
  }
  &__box {
    margin-bottom: 2rem;
    & span {
      display: block;
      margin-bottom: 1rem;
    }
    &:nth-child(1) {
      flex-basis: 40%;
    }
  }
  &__title {
    opacity: 0.8;
  }
  &__content {
    text-decoration: underline;
  }
}
</style>
