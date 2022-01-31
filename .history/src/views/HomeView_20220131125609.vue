<template>
  <px-map />
  <px-restore-location />
</template>

<script>
import { usePlaces } from "@/composables";
import PxMap from "@/components/PxMap.vue";
import PxRestoreLocation from "@/components/PxRestoreLocation.vue";
import PxSearchBar from "@components/PxSearchBar.vue";
export default {
  name: "HomeView",
  components: { PxMap, PxRestoreLocation },
  setup() {
    usePlaces();
  },
};
</script>
