<template>
  <div>
    <h1>Mapa</h1>
  </div>
</template>
<script>
import { usePlaces } from "@/composables";
export default {
  name: "PxMap",
  components: {},
  setup() {
    const { isLoading, userLocation } = usePlaces();
  },
};
</script>
<style scoped></style>
