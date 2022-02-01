<template>
  <section>
    <px-map />
    <px-search-bar />
    <px-restore-location />
    <px-button-views />
  </section>
</template>

<script>
/* como esta vista deberia quedar form en un futuro para modularizar los componentes y solo renderizarlos en views */
import { usePlaces } from "@/composables";
import PxMap from "@/components/PxMap.vue";
import PxRestoreLocation from "@/components/PxRestoreLocation.vue";
import PxSearchBar from "@/components/PxSearchBar.vue";
import PxButtonViews from "@/components/PxButtonViews.vue";
export default {
  name: "HomeView",
  components: { PxMap, PxRestoreLocation, PxSearchBar, PxButtonViews },
  setup() {
    usePlaces();
  },
};
</script>
<style scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  gap: 13%;
}
</style>
