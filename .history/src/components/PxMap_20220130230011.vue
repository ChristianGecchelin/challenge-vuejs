<template>
  <!-- si userLocation todavia no cargo entonces renderizo el primer div, sino cargo el mapa -->
  <div v-show="!userLocationReady" class="loading-map">
    <div class="title-container">
      <h3>Espere Por Favor...</h3>
      <span>Localizando</span>
    </div>
  </div>
  <div v-show="!!userLocationReady" class="map-container" id="map">hola</div>
</template>
<script>
import { usePlaces } from "@/composables";
export default {
  name: "PxMap",
  components: {},
  setup() {
    const map =
    const { isLoading, userLocation, userLocationReady } = usePlaces();

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
</style>
