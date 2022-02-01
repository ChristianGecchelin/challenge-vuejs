<template>
  <button @click="onMyLocationClick">🆘</button>
</template>

<script>
/* Creo un boton que me permitira si me muevo por el mapa volver a la posición del usuario */
import { useMaps, usePlaces } from "@/composables";
export default {
  name: "PxRestoreLocation",
  setup() {
    const { userLocation } = usePlaces();
    const { map } = useMaps();
    return {
      //deberia verificar si el mapa y la ubicación estan cargados para renderizar el boton.
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
  border: 2px solid #fff;
  background-color: #f8bbd0;
  cursor: pointer;
}
</style>
