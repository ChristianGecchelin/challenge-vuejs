<template>
  <div class="searchBar-container">
    <input
      type="text"
      class="search"
      placeholder="Busca un lugar"
      v-model="debouncedValue"
    />
    <px-search-results />
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { usePlaces } from "@/composables";
import PxSearchResults from "./PxSearchResults.vue";

export default {
  components: { PxSearchResults },
  name: "PxSearchBar",
  setup() {
    const debouncedTime = ref();
    const debouncedValue = ref("");
    return {
      debouncedValue,
      search: computed({
        get() {
          return debouncedValue.value;
        },
        set(val) {
          setTimeout(() => {
            debouncedValue.value = val;
          }, 500);
        },
      }),
    };
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
