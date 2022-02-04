import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

// Setup axios
axios.defaults.baseURL = "https://fabricecst.com/api/";

const app = createApp(App);

app.use(router);

app.mount("#app");
