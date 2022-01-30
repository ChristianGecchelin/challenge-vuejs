import { onMounted } from "vue";
import { useStore } from "vuex";
export const usePlaces = () => {
  const store = useStore();
  //funcion que me permite usar un callback, que lo usare para verificar con el getter si la localizacion esta cargada
  onMounted(() => {
    console.log(store.state.userLocation);
    if (!store.getters.userLocationReady) {
      store.dispatch("getInitialLocation");
    }
  });
  return {};
};
