import { createStore } from "vuex";

export default createStore({
  state: {
    places: {
      isLoading: false,
      userLocation: { lng: "", lat: "" },
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
      this.state.places.userLocation = {
        lng: position.coords.longitude,
        lat: position.coords.latitude,
      };
    },
  },
  actions: {
    getInitialLocation({ commit }) {
      //getCurrentPosition necesita dos callback, la posición y un error
      navigator.geolocation.getCurrentPosition(
        (position) =>
          commit("setLngLat", {
            lng: position.coords.longitude,
            lat: position.coords.latitude,
          }),
        (err) => {
          console.error(err);
          throw new Error("No geolocalizacion");
        }
      );
    },
  },
});
