import { createApp } from "vue";
import App from "./App.vue";
import Vue3Toastify from "vue3-toastify";

createApp(App).mount("#app");

app.use(Vue3Toastify, {
  autoClose: 3000,
});
