<template>
  <px-button-views />
  <px-map />
  <px-search-bar />
  <px-restore-location />
</template>

<script>
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
