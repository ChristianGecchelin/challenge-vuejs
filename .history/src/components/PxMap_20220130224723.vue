<template>
  <div class="loading-mapa">
    <div class="title-container">
      <h3>Espere Por Favor...</h3>
      <span>Localizando</span>
    </div>
  </div>
</template>
<script>
import { usePlaces } from "@/composables";
export default {
  name: "PxMap",
  components: {},
  setup() {
    const { isLoading, userLocation } = usePlaces();

    return { isLoading, userLocation };
  },
};
</script>
<style scoped>
.loading-mapa {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}
</style>
