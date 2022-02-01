<template>
  <!-- si userLocation todavia no cargo entonces renderizo el primer div, sino cargo el mapa -->
  <div v-show="userLocationReady" class="title-container">
    <h1>{{ titleForm }}</h1>
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
import { usePlaces, useMaps, useTitle } from "@/composables";
import mapboxgl from "mapbox-gl";
export default {
  name: "PxMap",
  components: {},
  data() {
    return {
      titleForm: "Mapa",
    };
  },
  setup() {
    const { isLoading, userLocation, userLocationReady } = usePlaces();
    const { setMap } = useMaps();
    /* const { title } = useTitle(); */

    const initMap = async () => {
      await Promise.resolve();
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 12, // starting zoom
      });
      const myLocationPopUp = new mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`<h3>Nombre</h3>
      <p>Dirección</p>`);
      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopUp)
        .addTo(map);

      const geojson = {
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [2.16999666311735, 41.3871058551399],
            },
            properties: {
              title: "Plaça De Catalunya",
              description:
                "Plaça De Catalunya, 08002 Barcelona, Barcelona, Spain",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [2.17694, 41.3825],
            },
            properties: {
              title: "Barcelona",
              description: "Barcelona, Barcelona, Spain",
            },
          },
        ],
      };
      for (const f of geojson.features) {
        const popUp = new mapboxgl.Popup().setLngLat(f.geometry.coordinates)
          .setHTML(`<h3>"${f.properties.title}"</h3>
      <p>${f.properties.description}</p>`);
        const marker = new mapboxgl.Marker()
          .setLngLat(f.geometry.coordinates)
          .setPopup(popUp)
          .addTo(map);
        console.log(marker);
      }

      setMap(map);
      return { map, myLocationMarker };
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
