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
import { computed, ref } from "vue";
import PxSearchResults from "./PxSearchResults.vue";
import { usePlaces } from "@/composables";
export default {
  components: { PxSearchResults },
  name: "PxSearchBar",
  setup() {
    const { searchPlaces } = usePlaces();
    const debouncedTime = ref();
    const debouncedValue = ref("");
    return {
      debouncedValue,
      /* 1° creo una prop computada que va a tomar el valor escrito en search,
       pero va a esperar un tiempo suficiente a que terminemos de escribir en el input para setearlo*/
      search: computed({
        get() {
          return debouncedValue.value;
        },
        set(val) {
          if (debouncedTime.value) clearTimeout(debouncedTime.value);

          debouncedTime.value = setTimeout(() => {
            debouncedValue.value = val;
            searchPlaces(val);
          }, 1000);
          setTimeout(() => {
            debouncedValue.value = "";
          }, 5000);
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
  padding: 20px 10px;
  width: 100%;
}
</style>
