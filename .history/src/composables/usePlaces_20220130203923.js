import { onMounted } from "vue";
import { useStore } from "vuex";
export const usePlaces = () => {
  const store = useStore();
  //funcion que me permite usar un callback, que lo usare para verificar con el getter si la localizacion esta cargada
  onMounted(() => {
    if (!store.getters.userLocationReady) {
      console.log(store.state.userLocation);
      store.dispatch("getInitialLocation");
    }
  });
  return {};
};
