import { createStore } from "vuex";

export default createStore({
  state: {
    places: {
      isLoading: false,
      userLocation: [],
    },
  },
  getters: {
    userLocationReady(state) {
      return !!state.userLocation;
    },
  },
  mutations: {},
  actions: {},
});
