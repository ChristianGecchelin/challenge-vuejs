<template>
  <div class="home"></div>
</template>

<script>
import { usePlaces } from "@/composables";
export default {
  name: "HomeView",
  components: {},
  setup() {
    const {} = usePlaces();
  },
};
</script>
