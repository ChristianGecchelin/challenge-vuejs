<template>
  <ul v-show="places.length > 0">
    <li
      v-for="p in places"
      :key="p.id"
      @click="onPlaceClick(p)"
      :class="{ selected: p.id === selectedPlace }"
    >
      <h3>{{ p.text }}</h3>
      <button>Ir</button>
    </li>
  </ul>
</template>

<script>
/* nos muestra los resultados, y si presionamos el boton nos redirige a ese sitio, ademas de marcarlos en el mapa con  un popup */
import { ref, watch } from "vue";
import { useMaps, usePlaces } from "@/composables";
export default {
  name: "PxSearchResults",
  setup() {
    const { map, setPlacesMarker } = useMaps();
    const { places } = usePlaces();
    const selectedPlace = ref(" ");
    watch(places, (newPlaces) => {
      selectedPlace.value = "";
      setPlacesMarker(newPlaces);
    });
    return {
      places,
      selectedPlace,
      onPlaceClick: (p) => {
        selectedPlace.value = p.id;
        const [lng, lat] = p.center;
        map.value.flyTo({ zoom: 14, center: [lng, lat] });
      },
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 10px;
  color: #880e4f;
  border: 2px solid #fff;
  background-color: #f8bbd0;
  border-radius: 10px;
}
h3 {
  font-size: 1.4rem;
  font-weight: 500;
}
button {
  outline: none;
  border: 2px solid #fff;
  padding: 5px 15px;
  background-color: #f8bbd0;
  border-radius: 10px;
  color: #fff;
}
.selected {
  background-color: #fff;
  border: 2px solid #f8bbd0;
  color: #f8bbd0;
}
</style>
