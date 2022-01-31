import { computed } from "vue";
import { useStore } from "vuex";
export const usePlaces = () => {
  const store = useStore();
  return {
    map: computed(() => {}),
  };
};
