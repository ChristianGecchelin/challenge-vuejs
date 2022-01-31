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
};
</script>

<style></style>
