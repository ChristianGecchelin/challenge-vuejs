<template>
  <h1>Mapa</h1>
</template>

<script>
import { usePlaces } from "@/composables";
export default {
  name: "HomeView",
  components: {},
  setup() {
    usePlaces();
  },
};
</script>
