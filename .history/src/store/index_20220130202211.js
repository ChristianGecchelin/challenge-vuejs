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
    setLngLat(state, position) {
      console.log(position);
      state.places.userLocation = [
        position.coords.longitude,
        position.coords.latitude,
      ];
      state.places.isLoading = false;
    },
  },
  actions: {
    getInitialLocation(context) {
      //getCurrentPosition necesita dos callback, la posición y un error
      navigator.geolocation.getCurrentPosition(
        (position) => context.commit("setLngLat", position.coords),
        (err) => {
          console.error(err);
          throw new Error("No geolocalizacion");
        }
      );
    },
  },
});
