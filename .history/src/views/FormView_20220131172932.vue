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
        placeholder="Busca un lugar"
        v-model="search"
      />
      <input type="submit" value="Enviar" title="Enviar" class="form-button" />
    </form>
    <div class="section-cards">
      <div v-for="u in users" :key="u.id" class="card-container">
        <h3 class="name-text">{{ u.nombre }}</h3>
        <p class="position-text">
          Tu posición es <br />
          {{ u.latitud }} - {{ u.longitud }}
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>

<style></style>
