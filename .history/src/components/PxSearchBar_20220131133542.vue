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
import { computed } from "@vue/runtime-core";
export default {
  name: "PxSearchBar",
  setup() {
    const debounceTime = ref();
    const debouncedValue = ref("");
    return {
      debouncedValue,
      search: computed({
        get() {
          return debouncedValue.value;
        },
        set(val) {
          debounceTime.value = setTimeout(() => {
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
</style>
