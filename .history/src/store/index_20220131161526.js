import { createStore } from "vuex";
import { searchApi } from "@/apis";

const store = createStore({
  state: {
    places: {
      isLoading: true,
      userLocation: undefined,
      isLoadingPlaces: false,
      places: [],
    },
    map: {
      mapInstance: undefined,
      markers: [],
      mapDistance: undefined,
      duration: undefined,
    },
  },
  getters: {
    // creo una función que nos dirá en que estado está userLocation
    userLocationReady(state) {
      return !!state.places.userLocation;
    },
    mapReady(state) {
      return !!state.map.mapInstance;
    },
  },
  mutations: {
    setLngLat(state, coords) {
      console.log(coords);
      state.places.userLocation = [coords.longitude, coords.latitude];
      state.places.isLoading = false;
    },
    setIsLoadingPlaces(state) {
      state.places.isLoadingPlaces = true;
    },
    setPlaces(state, places) {
      state.places = places;
      state.isLoadingPlaces = false;
    },
    setMap(state, map) {
      state.map.mapInstance = map;
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
    async searchPlaces({ state }, query) {
      if (query.length === 0) {
        return [];
      }
      const responseApi = await searchApi(`/${query}.json`, {
        params: {
          proximity: state.places.userLocation.join(","),
        },
      });
      return responseApi.data.features;
    },
  },
});
export default store;
