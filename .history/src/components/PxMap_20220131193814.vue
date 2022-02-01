<template>
  <!-- si userLocation todavia no cargo entonces renderizo el primer div, sino cargo el mapa -->
  <div v-show="userLocationReady" class="title-container">
    <h1>Mapa</h1>
  </div>
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
import { usePlaces, useMaps } from "@/composables";
import mapboxgl from "mapbox-gl";
export default {
  name: "PxMap",
  components: {},
  data() {
    return {
      defaultPlaces: {
        location: ["Washington, D.C.", "San Francisco, California"],
        coordinates: {
          coord1: [-77.032, 38.913],
          coord2: [-122.414, 37.776],
        },
      },
    };
  },
  setup() {
    const { isLoading, userLocation, userLocationReady } = usePlaces();
    const { setMap } = useMaps();
    const initMap = async () => {
      await Promise.resolve();
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 15, // starting zoom
      });
      const myLocationPopUp = new mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`<h3>Nombre</h3>
      <p>Dirección</p>`);
      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopUp)
        .addTo(map);
      console.log(this.defaultPlaces);
      const popup1 = new mapboxgl.Popup()
        .setLngLat([this.defaultPlaces.coordinates[0]])
        .setHTML(`<h3>Hola</h3><p>Este es un popup de muestra</p>`);
      const marker1 = new mapboxgl.Marker()
        .setLngLat([this.defaultPlaces.coordinates[0]])
        .setPopup(popup1)
        .addTo(map);
      setMap(map);
      const popup2 = new mapboxgl.Popup()
        .setLngLat([this.defaultPlaces.coordinates[1]])
        .setHTML(`<h3>Hola</h3><p>Este es un popup de muestra</p>`);
      const marker2 = new mapboxgl.Marker()
        .setLngLat([this.defaultPlaces.coordinates[2]])
        .setPopup(popup2)
        .addTo(map);
      setMap(map);
      return { map, myLocationMarker, marker1, marker2 };
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
  border: 2px solid #fff;
  background-color: #f8bbd0;
  text-align: center;
  border-radius: 10px;
}
.title-container h1 {
  color: #fff;
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
