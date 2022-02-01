<template>
  <section class="form-section">
    <form
      name="form"
      id="form"
      v-on:submit.prevent="registrar"
      class="container-form"
    >
      <h2>Formulario</h2>
      <px-button-views class="form-view" />
      <label>Titulo</label>
      <input
        type="text"
        placeholder="Ciclíca"
        class="form-input"
        v-model="title"
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
import { ref } from "vue";
import PxButtonViews from "@/components/PxButtonViews.vue";
import { useTitle } from "@/composables";
export default {
  components: { PxButtonViews },
  name: "FormView",
  setup() {
    const { setTitle } = useTitle();
    const title = ref("");

    console.log(title);
    setTitle(title);
    return { title };
  },
};
</script>

<style scoped>
.form-view {
  position: relative;
  margin: 20px 0px;
}
.form-section {
  height: 100vh;
  width: 100vw;
  text-align: center;
}
.form-section h2 {
  padding-top: 20px;
  color: white;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1px;
}
.form-section .container-form {
  display: flex;
  width: 320px;
  height: 100vh;
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
  font-size: 1.6rem;
  color: #fff;
  cursor: pointer;
}
.form-section .container-form .form-button:hover {
  border: 2px solid #f8bbd0;
  background-color: #fff;
  color: #f8bbd0;
}
</style>
