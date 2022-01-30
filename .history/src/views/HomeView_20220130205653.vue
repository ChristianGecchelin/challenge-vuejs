<template>
  <div class="home"></div>
</template>

<script>
import { usePlaces } from "@/composables";
import PxMap from "@/components/PxMap.vue";
export default {
  name: "HomeView",
  components: {},
  setup() {
    usePlaces();
  },
};
</script>
