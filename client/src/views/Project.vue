<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Components
import Intro from '../components/Project/Intro.vue';
import Description from '../components/Project/Description.vue';

// Logic
const route = useRoute()
const router = useRouter()
const project = ref(null)

// Check and fetch the project
onBeforeMount(async () => {
  try {
    const { data } = await axios.get(`work/${route.params.name}`)
    project.value = data
  } catch (err) {
    router.push('/works')
  }
})

</script>

<template>
  <main class="project" v-if="project">
    <Intro :title="project.title" :status="project.status" :preview="project.preview" />
    <Description :desc="project.description" :info="project.info" />
  </main>
  <main v-else class="projectLoad">Loading...</main>
</template>

<style lang="scss">
</style>
