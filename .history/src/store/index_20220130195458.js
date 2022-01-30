import { createStore } from "vuex";

export default createStore({
  state: {
    places: {
      isLoading: true,
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
    setLngLat(state, { coords }) {
      console.log(coords);
      /* state.places.userLocation = [coords.longitude, coords.latitude]; */
      state.isLoading = false;
    },
  },
  actions: {
    getInitialLocation({ commit }) {
      //getCurrentPosition necesita dos callback, la posición y un error
      navigator.geolocation.getCurrentPosition(
        ({ coords }) =>
          commit("setLngLat", {
            lng: coords.longitude,
            lat: coords.latitude,
          }),
        (err) => {
          console.error(err);
          throw new Error("No geolocalizacion");
        }
      );
    },
  },
});
