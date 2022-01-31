<template>
  <div class="searchBar-container">
    <input type="text" class="search" placeholder="Busca un lugar" />
  </div>
</template>

<script>
export default {
  name: "PxSearchBar",
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
