<template>
  <div />
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
