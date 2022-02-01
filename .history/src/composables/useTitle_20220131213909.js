import { computed } from "vue";
import { useStore } from "vuex";
export const useDefaultPlaces = () => {
  const store = useStore();
  return {
    //Traigo lo que almacene en el store, para compartirlo con cualquier componente, y una mutations para cargar el mapa
    coord1: computed(() => store.state.defaultPlaces.coordinates.coord1),
    coord2: computed(() => store.state.defaultPlaces.coordinates.coord2),
    location: computed(() => store.state.defaultPlaces.location),
  };
};
