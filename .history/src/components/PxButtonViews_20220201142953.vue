<template>
  <div>
    <router-link to="/"><button>Home</button></router-link>
    <router-link to="/form"><button>Form</button></router-link>
  </div>
</template>

<script>
/* Aqui me pareció conveniente crear un componente independiente ya que lo iba a reutilizar en otra view.
Esta conectado al router para redirigir */
export default {
  name: "PxButtonViews",
};
</script>

<style scoped>
div {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
button {
  padding: 5px 40px;
  background-color: #f8bbd0;
  outline: none;
  border: 2px solid #fff;
  color: #9b8897;
  cursor: pointer;
  border-radius: 10px;
}
</style>
