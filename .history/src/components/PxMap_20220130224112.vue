<template>
  <div>
    <h1>Mapa</h1>
    <p>{{ userLocation }}</p>
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
console.log(userLocation);
</script>
<style scoped></style>
