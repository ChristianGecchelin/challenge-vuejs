<template>
  <section class="form-section">
    <h2>Formulario</h2>
    <form
      name="form"
      id="form"
      v-on:submit.prevent="registrar"
      class="container-form"
    >
      <label>Titulo</label>
      <input
        type="text"
        placeholder="Ciclíca"
        v-model="titulo"
        class="form-input"
      />
      <label>Nombre usuario</label>
      <input
        type="text"
        placeholder="Marc"
        v-model="nombre"
        class="form-input"
      />
      <input
        type="text"
        class="search"
        placeholder="Buscar lugar"
        v-model="search"
      />
      <input type="submit" value="Enviar" title="Enviar" class="form-button" />
    </form>
  </section>
</template>
<script>
export default {
  name: "FormView",
  setup() {
    console.log();
  },
};
</script>

<style scoped>
.form-section {
  height: 100vh;
  width: 100vw;
  text-align: center;
}
.form-section h2 {
  margin: 20px auto;
  color: white;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1px;
  height: 15%;
}
.form-section .container-form {
  display: flex;
  width: 320px;
  height: 80vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
}
</style>
