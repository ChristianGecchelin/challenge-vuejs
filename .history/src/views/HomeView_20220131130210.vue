<template>
  <px-map />
  <px-restore-location />
  <px-search-bar />
</template>

<script>
import { usePlaces } from "@/composables";
import PxMap from "@/components/PxMap.vue";
import PxRestoreLocation from "@/components/PxRestoreLocation.vue";
import PxSearchBar from "@components/PxSearchBar.vue";
export default {
  name: "HomeView",
  components: { PxMap, PxRestoreLocation, PxSearchBar },
  setup() {
    usePlaces();
  },
};
</script>
