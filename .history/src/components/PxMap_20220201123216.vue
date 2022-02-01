<template>
  <!-- si userLocation todavia no cargo entonces renderizo el primer div, sino cargo el mapa -->
  <div v-show="userLocationReady" class="title-container">
    <h1>{{ titleForm || "Mapa" }}</h1>
  </div>
  <div v-show="!userLocationReady" class="loading-map">
    <div class="container-loading">
      <h3>Espere Por Favor...</h3>
      <span>Localizando</span>
    </div>
  </div>
  <div id="menu" class="radioButton-container">
    <input
      id="satellite-v9"
      type="radio"
      name="rtoggle"
      value="satellite"
      checked="checked"
    />
    <!-- See a list of Mapbox-hosted public styles at -->
    <!-- https://docs.mapbox.com/api/maps/styles/#mapbox-styles -->
    <label for="satellite-v9">satellite</label>
    <input id="light-v10" type="radio" name="rtoggle" value="light" />
    <label for="light-v10">light</label>
    <input id="dark-v10" type="radio" name="rtoggle" value="dark" />
    <label for="dark-v10">dark</label>
    <input id="streets-v11" type="radio" name="rtoggle" value="streets" />
    <label for="streets-v11">streets</label>
    <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" />
    <label for="outdoors-v11">outdoors</label>
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
      titleForm: this.$store.state.title.name,
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
      const layerList = document.getElementById("menu");
      const inputs = layerList.getElementsByTagName("input");

      for (const input of inputs) {
        input.onclick = (layer) => {
          const layerId = layer.target.id;
          map.setStyle("mapbox://styles/mapbox/" + layerId);
        };
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
.radioButton-container {
  z-index: 88;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
