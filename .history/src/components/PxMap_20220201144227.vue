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
  <!-- En este contenedor tengo los radio buttons para seleccionar la vista estan conectados al codigo por id -->
  <div id="menu" class="radioButtons-container">
    <div class="radio-container">
      <input id="satellite-v9" type="radio" name="rtoggle" value="satellite" />

      <label for="satellite-v9">satellite</label>
    </div>
    <div class="radio-container">
      <input id="light-v10" type="radio" name="rtoggle" value="light" />
      <label for="light-v10">light</label>
    </div>
    <div class="radio-container">
      <input
        id="dark-v10"
        type="radio"
        name="rtoggle"
        value="dark"
        checked="checked"
      />
      <label for="dark-v10">dark</label>
    </div>
    <div class="radio-container">
      <input id="streets-v11" type="radio" name="rtoggle" value="streets" />
      <label for="streets-v11">streets</label>
    </div>
    <div class="radio-container">
      <input id="outdoors-v11" type="radio" name="rtoggle" value="outdoors" />
      <label for="outdoors-v11">outdoors</label>
    </div>
  </div>
  <!-- Aca esta la carga del mapa, que solo se mostrara si el usuario tiene habilitado la geolocalizacion -->
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
      /* aqui traigo desde el store el titulo seteado en el form */
      titleForm: this.$store.state.title.name,
    };
  },

  setup() {
    /* En esta sección primero voy a hacer la llamada a la api para cargar el mapa en initMap y a su vez junto al mapa voy a cargar
    donde esta situado el usuario, y dos ubicaciones fijas las cuales eran requeridas en el test */
    const { isLoading, userLocation, userLocationReady } = usePlaces();
    const { setMap } = useMaps();
    /* utilizo async para que cargue solamente cuando este resuelta la promesa que es la carga del mapa */
    const initMap = async () => {
      await Promise.resolve();
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/dark-v10", // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 12, // starting zoom
      });
      const myLocationPopUp = new mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`<h3>Usted esta aquí</h3> 
      <p>${userLocation.value}</p>`);
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
      /* el manejo de radio inputs segun la documentacion */
      for (const input of inputs) {
        input.onclick = (layer) => {
          const layerId = layer.target.id;
          map.setStyle("mapbox://styles/mapbox/" + layerId);
        };
      }
      /* llamo a la funcion setMap desde el store y le paso el mapa que cargue */
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
  color: #880e4f;
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
.radioButtons-container {
  z-index: 88;
  width: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-left: 20px;
  padding: 10px;
}
.radio-container {
  background-color: #fff;
  padding: 15px 10px;
  border: 2px solid #f8bbd0;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: #880e4f;
  font-size: 1.4rem;
  text-transform: capitalize;
}
</style>
