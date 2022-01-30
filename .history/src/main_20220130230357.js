import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import mapboxgl from "mapbox-gl"; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hyaXN0aWFuZ2VjY2hlbGluIiwiYSI6ImNreXp6MGttcTB6Njgyb212dGQwN2gyNGEifQ.uqF7EL5e27LjY8_pFemOyg";
/* Antes de montar app verifico que la aplicación podrá ser utilizada por el usuario */
if (!navigator.geolocation) {
  throw new Error("Porfavor usa algún navegador con geolocalización");
}

createApp(App).use(store).use(router).mount("#app");
