import { createStore } from "vuex";

export default createStore({
  state: {
    places: {
      isLoading: false,
      userLocation: [],
    },
  },
  getters: {
    // creo una función que nos dirá en que estado está userLocation
    userLocationReady(state) {
      return !!state.userLocation;
    },
  },
  mutations: {},
  actions: {},
});
