<template>
  <!-- si userLocation todavia no cargo entonces renderizo el primer div, sino cargo el mapa -->
  <div class="title-container"><h1>Mapa</h1></div>
  <div v-show="!userLocationReady" class="loading-map">
    <div class="container-loading">
      <h3>Espere Por Favor...</h3>
      <span>Localizando</span>
    </div>
  </div>
  <div v-show="userLocationReady" class="map-container" id="map"></div>
</template>
<script>
import { onMounted, watch } from "vue";
import { usePlaces } from "@/composables";
import mapboxgl from "mapbox-gl";

export default {
  name: "PxMap",
  components: {},
  setup() {
    const { isLoading, userLocation, userLocationReady } = usePlaces();
    const initMap = async () => {
      await Promise.resolve();
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });
      return map;
    };
    onMounted(() => {
      if (userLocationReady.value) return initMap();
    });
    watch(userLocationReady, (newVal) => {
      if (userLocationReady.value) {
        return initMap();
      }
      console.log(newVal);
    });
    return { isLoading, userLocation, userLocationReady };
  },
};
</script>
<style scoped>
.title-container {
  position: relative;
  width: 320px;
  margin: 20px auto;
  padding: 10px 0px;
  z-index: 2;
  background-color: black;
  text-align: center;
  width: 320px;
  margin: 0 auto;
}
.title-container h1 {
  color: wheat;
}
.loading-map {
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container-loading {
  display: flex;
  flex-direction: column;
}
.map-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
}
</style>
