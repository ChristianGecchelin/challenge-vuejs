<template>
  <button v-on="onMyLocationClick">🆘</button>
</template>

<script>
import { useMaps, usePlaces } from "@/composables";
export default {
  name: "PxRestoreLocation",
  setup() {
    const { userLocation } = usePlaces;
    const { map } = useMaps;
    return {
      onMyLocationClick: () => {
        //flyTo es una animacion que nos ofrece mapbox
        map.value.flyTo({
          center: userLocation.value,
          zoom: 15,
        });
      },
    };
  },
};
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid blue;
  background-color: green;
  cursor: pointer;
}
</style>
