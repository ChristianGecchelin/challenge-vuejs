import { computed } from "vue";
import { useStore } from "vuex";
export const useMaps = () => {
  const store = useStore();
  return {
    //Traigo lo que almacene en el store, para compartirlo con cualquier componente, y una mutations para cargar el mapa
    map: computed(() => store.state.map.mapInstance),
    setMap: (mapInstance) => store.commit("setMap", mapInstance),
    setPlacesMarker: (places) => store.commit("setPlacesMarker", places),
  };
};
