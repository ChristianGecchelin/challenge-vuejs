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
/* Este searchbar esta ubicado en el home, es el encargado de buscar el sitio y pasarles a searchPlaces lo ingresado, lo cual
mediante un llamado a la api nos va a arrojar los resultados en el componente Px-SearchResults*/
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
          /* para que la api no reciba tantas request (hay un limite como usuario gratuito)
        lo que hice fue setear un timeout que se reinicia cuando sigo escribiendo */
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
  border-radius: 10px;
}
.search {
  padding: 5px 10px;
  width: 100%;
  outline: none;
  border: 2px solid #fff;
  background-color: #f8bbd0;
  text-align: center;
  border-radius: 10px;
}
</style>
