<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { validateEmail } from '../../features/utils';

// Components
import Button from '../Common/Button.vue';
import Input from './Input.vue';
import TextArea from './TextArea.vue';
import Alert from '../Common/Alert.vue';

// Variables
const userInput = ref({
  name: '',
  mail: '',
  message: ''
})

const alertMessage = ref({
  isOpen: false,
  message: '',
  title: '',
  error: true,
})

// Logic
const sendMail = async () => {
  const res = await axios.post('mailbox', userInput.value);
  console.log(res);
}

const submit = () => {
  if (userInput.value.name.trim() && userInput.value.mail.trim() && userInput.value.message.trim()) {
    if (validateEmail(userInput.value.mail)) {
      sendMail()
    } else {
      alertMessage.value.message = 'L\'adresse mail fournie n\'est pas correcte !'
      alertMessage.value.title = 'Adresse mail incorrect'
      alertMessage.value.isOpen = true
    }
  } else {
    alertMessage.value.message = 'Tous les champs doivent être remplis !'
    alertMessage.value.title = 'Champ manquant !'
    alertMessage.value.isOpen = true
  }
}
</script>

<template>
  <form @submit.prevent="submit" class="contact__form">
    <h1 class="contact__title">Parlons ensemble</h1>
    <p class="contact__desc">Ecrivez moi votre message.</p>
    <div class="contact__box">
      <Input label="Nom" v-model="userInput.name" />
      <Input label="Mail" v-model="userInput.mail" />
    </div>
    <TextArea v-model="userInput.message" />
    <div class="contact__controls">
      <Button content="Envoyé" :inverted="true" />
      <a href="mailto:info@fabricecst.com" class="contact__mailLink">info@fabricecst.com</a>
    </div>
  </form>
  <transition name="popup" appear>
    <Alert
      v-if="alertMessage.isOpen"
      @closePopup="alertMessage.isOpen = false"
      :alertInfo="alertMessage"
    />
  </transition>
</template>

<style lang="scss">
.contact {
  &__form {
    padding: 3rem 2rem;
    flex-basis: 55%;
  }
  &__title {
    font-size: 2rem;
    font-weight: bold;
    @media (max-width: $lg) {
      text-align: center;
    }
  }
  &__desc {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 2rem;
    @media (max-width: $lg) {
      text-align: center;
    }
  }
  &__mailLink {
    opacity: 0.8;
    font-weight: 300;
    letter-spacing: 0.1rem;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
  &__box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: $md) {
      flex-direction: column;
    }
  }
  &__controls {
    display: flex;
    align-items: center;
    gap: 1rem;
    @media (max-width: $lg) {
      flex-direction: column;
    }
  }
}
</style>
