import { computed } from "vue";
import { useStore } from "vuex";
export const useDefaultPlaces = () => {
  const store = useStore();
  return {
    //Traigo lo que almacene en el store, para compartirlo con cualquier componente, y una mutations para cargar el mapa
    coordinates: computed(() => store.state.defaultPlace.coordinates),
    location: computed(() => store.state.defaultPlace.location),
  };
};
