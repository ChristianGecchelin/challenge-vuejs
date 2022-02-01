<template>
  <section class="form-section">
    <h2>Formulario</h2>

    <px-button-views class="form-view" />
    <label for="title" class="label-input-title">Titulo</label>
    <input
      type="text"
      id="title"
      placeholder="Ciclíca"
      class="input-title"
      v-model="title"
    />
    <form
      name="form"
      id="form"
      v-on:submit.prevent="registrar()"
      class="container-form"
    >
      <label for="nombre">Nombre usuario</label>
      <input
        id="nombre"
        type="text"
        placeholder="Marc"
        v-model="name"
        class="form-input"
      />
      <div class="searchBar-container">
        <label for="search">Ingresa un sitio</label>
        <input
          id="search"
          type="text"
          class="form-input"
          placeholder="Buscar sitio"
          v-model="search"
        />
      </div>
      <input type="submit" value="Enviar" title="Enviar" class="form-button" />
    </form>
  </section>
</template>
<script>
import { ref, /* watch, */ computed } from "vue";
import PxButtonViews from "@/components/PxButtonViews.vue";
import { useTitle } from "@/composables";
export default {
  components: { PxButtonViews },
  name: "FormView",
  data() {
    return {
      user: {
        username: "",
        userplace: "",
      },
    };
  },
  methods: {
    registrar() {
      this.$store.dispatch("createUsername", this.username);
      /* this.$store.dispatch("createUserplace", this.userplace); */
      this.$store.dispatch("createUserplace", this.userplace);
    },
  },

  setup() {
    const { setTitle } = useTitle();
    const debouncedTime = ref();
    const debouncedValue = ref();
    return {
      debouncedValue,
      //obtengo el titulo y lo seteo en el store
      title: computed({
        get() {
          return debouncedValue.value;
        },
        set(val) {
          if (debouncedTime.value) clearTimeout(debouncedTime.value);
          debouncedTime.value = setTimeout(() => {
            debouncedValue.value = val;
            setTitle(val);
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
.form-section {
  height: 100vh;
  width: 100vw;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
.input-title {
  width: 320px;
  padding: 10px 20px;
  outline: none;
  border: 2px solid #fff;
  background-color: #f8bbd0;
  border-radius: 10px;
  margin: 0 auto;
}
.label-input-title {
  font-size: 2rem;
  font-weight: 500;
  color: white;
}
.form-view {
  position: relative;
  margin: 20px 0px;
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
  width: 320px;
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
.searchBar-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
ul {
  list-style: none;
}
li {
  cursor: pointer;
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
h3 {
  font-size: 1.4rem;
  font-weight: 500;
}
.selected {
  background-color: rgb(185, 167, 145);
}
</style>
