<template>
  <div class="searchBar-container">
    <input
      type="text"
      class="search"
      placeholder="Busca un lugar"
      v-model="search"
    />
    <px-search-results />
  </div>
</template>

<script>
import { ref } from "vue";
import { usePlaces } from "@/composables";
import PxSearchResults from "./PxSearchResults.vue";

export default {
  components: { PxSearchResults },
  name: "PxSearchBar",
  setup() {
    const { searchPlaces } = usePlaces();
    const search = ref("");
    searchPlaces(search.value);
    return {};
  },
};
</script>

<style scoped>
.searchBar-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
}
.search {
  width: 100%;
}
</style>
