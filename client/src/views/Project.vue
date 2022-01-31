<script setup>
import axios from 'axios';
import { onBeforeMount, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// Components
import Intro from '../components/Project/Intro.vue';
import Description from '../components/Project/Description.vue';
import Info from '../components/Project/Info.vue';
import Previews from '../components/Project/Previews.vue';
import Footer from '../components/Common/Footer.vue';

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
    <Info title="My Role" :content="project.role" />
    <Info title="What we used" :content="project.technology" />
    <Info title="What I learn" :content="project.learning" />
    <Previews :images="project.images" />
  </main>
  <main v-else class="projectLoad">Loading...</main>
  <Footer extend title="Want to see" subtitle="your project here?" />
</template>

<style lang="scss">
.projectLoad {
  min-height: 100vh;
}
</style>
