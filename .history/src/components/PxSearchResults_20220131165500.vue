<template>
  <ul v-show="places.length > 0">
    <li
      v-for="p in places"
      :key="p.id"
      @click="onPlaceClick(p)"
      :class="{ selected: p.id === selectedPlace }"
    >
      <h3>{{ p.text }}</h3>
      <button>Select</button>
    </li>
  </ul>
</template>

<script>
import { ref } from "vue";
import { useMaps, usePlaces } from "@/composables";
export default {
  name: "PxSearchResults",
  setup() {
    const { map } = useMaps();
    const { places } = usePlaces();
    const selectedPlace = ref(" ");
    return {
      places,
      selectedPlace,
      onPlaceClick: (p) => {
        selectedPlace.value = p.id;
        map.value.flyto({ zoom: 14, center: p.center });
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
}
h3 {
  font-size: 1.4rem;
  font-weight: 500;
}
button {
  outline: none;
  border: 2px solid black;
  padding: 5px 15px;
}
.selected {
  background-color: rgb(185, 167, 145);
}
</style>
