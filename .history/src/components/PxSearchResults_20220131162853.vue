<template>
  <ul>
    <li v-show="places.length > 0">
      <h3>Nombre del Lugar</h3>
      <button>Select</button>
    </li>
  </ul>
</template>

<script>
import { usePlaces } from "@/composables";
export default {
  name: "PxSearchResults",
  setup() {
    const { isLoadingPlaces, places } = usePlaces();
    return isLoadingPlaces, places;
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
</style>
