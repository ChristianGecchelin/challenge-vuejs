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
  mutations: {
    setLngLat(state, position) {
      state.places.userLocation = [
        position.coords.longitude,
        position.coords.latitude,
      ];
    },
  },
  actions: {
    getInitialLocation({ commit }) {
      //getCurrentPosition necesita dos callback, la posición y un error
      navigator.geolocation.getCurrentPosition(
        (position) => commit("setLngLat", [position.coords, position.coords]),
        (err) => {
          console.error(err);
          throw new Error("No geolocalizacion");
        }
      );
    },
  },
});
