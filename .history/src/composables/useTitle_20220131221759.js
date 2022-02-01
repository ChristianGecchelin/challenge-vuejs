import { computed } from "vue";
import { useStore } from "vuex";
export const useTitle = () => {
  const store = useStore();
  return {
    //Traigo lo que almacene en el store, para compartirlo con cualquier componente, y una mutations para cargar el mapa
    title: computed(() => store.state.title.name),
    setTitle: (title) => store.commit("setTitle", title),
  };
};
