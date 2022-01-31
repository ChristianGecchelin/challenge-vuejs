<template>
  <div class="searchBar-container">
    <input
      type="text"
      class="search"
      placeholder="Busca un lugar"
      v-model="search"
    />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  name: "PxSearchBar",
  setup() {
    const debounceTime = ref();
    const debouncedValue = ref("");
    return { debouncedValue,search: };
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
