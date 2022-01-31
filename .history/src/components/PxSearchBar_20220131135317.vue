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
import PxSearchResults from "./PxSearchResults.vue";
export default {
  components: { PxSearchResults },
  name: "PxSearchBar",
  setup() {
    return;
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
</style>
