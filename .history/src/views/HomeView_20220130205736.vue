<template><px-map /></template>

<script>
import { usePlaces } from "@/composables";
import PxMap from "@/components/PxMap.vue";
export default {
  name: "HomeView",
  components: { PxMap },
  setup() {
    usePlaces();
  },
};
</script>
