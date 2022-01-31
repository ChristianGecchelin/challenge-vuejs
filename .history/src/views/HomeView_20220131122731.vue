<template>
  <px-map />
</template>

<script>
import { usePlaces } from "@/composables";
import PxMap from "@/components/PxMap.vue";
import PxRestoreLocation from "@/components/PxRestoreLocation.vue";
export default {
  name: "HomeView",
  components: { PxMap, PxRestoreLocation },
  setup() {
    usePlaces();
  },
};
</script>
