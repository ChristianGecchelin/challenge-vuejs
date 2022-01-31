<template>
  <div class="searchBar-container">
    <input type="text" class="search" placeholder="Busca un lugar" />
  </div>
</template>

<script>
export default {
  name: "PxSearchBar",
  setup() {
    console.log();
  },
};
</script>

<style scoped>
.searchBar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
}
</style>

export default { name: "PxRestoreLocation", setup() { const { userLocation } =
usePlaces(); const { map } = useMaps(); return { //deberia verificar si el mapa
y la ubicación estan cargados para renderizar el boton. onMyLocationClick: () =>
{ //flyTo es una animacion que nos ofrece mapbox map.value.flyTo({ center:
userLocation.value, zoom: 15, }); }, }; }, };
