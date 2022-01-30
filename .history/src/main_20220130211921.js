import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/* Antes de montar app verifico que la aplicación podrá ser utilizada por el usuario */
if (!navigator.geolocation) {
  throw new Error("Porfavor usa algún navegador con geolocalización");
}

createApp(App).use(store).use(router).mount("#app");
