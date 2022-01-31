<template>
  <ul>
    <li>
      <h3>Nombre del Lugar</h3>
      <button>Select</button>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
h3 {
  font-size: 1.4rem;
  font-weight: 500;
}
button {
  padding: 5px 15px;
}
</style>
