<script setup>
// Components
import Footer from '../components/Common/Footer.vue';
import Form from '../components/Contact/Form.vue';
import Mail from "../assets/svg/mail.svg"

</script>

<template>
  <main class="contact">
    <section class="contact__container">
      <div class="contact__mail">
        <Mail />
      </div>
      <Form />
    </section>
  </main>
  <Footer />
</template>

<style lang="scss">
.contact {
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: $sm) {
    padding-inline: 0;
  }
  &__container {
    @include themify($themes) {
      background-color: themed("secondary");
      color: themed("primary");
    }
    width: 100%;
    height: 550px;
    display: flex;
    @media (max-width: $lg) {
      flex-direction: column;
      height: auto;
    }
  }
  &__mail {
    flex-basis: 35%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    @media (max-width: $lg) {
      padding: 3rem;
      & svg {
        width: 200px;
        height: 200px;
      }
    }
  }
}
</style>
