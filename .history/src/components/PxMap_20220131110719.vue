<template>
  <!-- si userLocation todavia no cargo entonces renderizo el primer div, sino cargo el mapa -->
  <div v-show="!userLocationReady" class="loading-map">
    <div class="container-title"><h1>Mapa</h1></div>
    <div class="title-container">
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
.loading-map {
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-container {
  display: flex;
  flex-direction: column;
}
.map-container {
  width: 100%;
  height: 500px;
}
</style>
