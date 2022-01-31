import { computed } from "vue";
import { useStore } from "vuex";
export const useMaps = () => {
  const store = useStore();
  return {
    map: computed(() => store.state.map.mapInstance),
  };
};
