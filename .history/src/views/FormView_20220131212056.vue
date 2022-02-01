<template>
  <section class="form-section">
    <form
      name="form"
      id="form"
      v-on:submit.prevent="registrar"
      class="container-form"
    >
      <h2>Formulario</h2>
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
      <label>Ingresa un sitio</label>
      <input
        type="text"
        class="form-input"
        placeholder="Buscar sitio"
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
  padding: 20px;
  color: white;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1px;
  height: 15vh;
}
.form-section .container-form {
  display: flex;
  width: 320px;
  height: 80vh;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.form-section .container-form label {
  font-size: 2rem;
  font-weight: 500;
  color: white;
}
.form-section .container-form .form-input {
  padding: 10px 20px;
  outline: none;
  border: 2px solid #fff;
  background-color: #f8bbd0;
  border-radius: 10px;
}
.form-section .container-form .form-button {
  margin-top: 10px;
  padding: 10px 20px;
  border: 2px solid #fff;
  background-color: #f8bbd0;
  border-radius: 10px;
  font-size: 1.4rem;
}
</style>
