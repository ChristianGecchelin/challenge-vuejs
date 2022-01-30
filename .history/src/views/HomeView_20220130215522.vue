<template>
  <h1>Mapa</h1>
</template>

<script>
import { usePlaces } from "@/composables";
import PxMap from "@/components";
export default {
  name: "HomeView",
  components: { PxMap },
  setup() {
    usePlaces();
  },
};
</script>
