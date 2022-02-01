import { createStore } from "vuex";
import { searchApi } from "@/apis";
import mapboxgl from "mapbox-gl";

const store = createStore({
  state: {
    // nombre del usuario seteado en el form
    user: {
      name: "",
    },
    //titulo de la página que seteo desde el form
    title: {
      name: "",
    },
    //sitios cargados cuando busco en el form y ubicacion del usuario
    places: {
      isLoading: true,
      userLocation: undefined,
      isLoadingPlaces: false,
      places: [],
    },
    //carga del mapa y donde seteo los marcadores de los sitios que busco en el form
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
      state.places.places = places;
      state.places.isLoadingPlaces = false;
    },
    setMap(state, map) {
      state.map.mapInstance = map;
    },
    setTitle(state, title) {
      state.title.name = title;
    },
    setName(state, name) {
      state.user.name = name;
    },
    setPlacesMarker(state, places) {
      //creo nuevos marcadores
      for (const p of places) {
        const [lng, lat] = p.center;
        const popUp = new mapboxgl.Popup().setLngLat([lng, lat])
          .setHTML(`<h3>${p.text}</h3>
                    <p>${p.place_name}</p>`);
        const marker = new mapboxgl.Marker()
          .setLngLat([lng, lat])
          .setPopup(popUp)
          .addTo(state.map.mapInstance);
        state.map.markers.push(marker);
      }
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
    async searchPlaces({ state, commit }, query) {
      if (query.length === 0) {
        commit("setPlaces", []);
        return [];
      }
      commit("setIsLoadingPlaces");
      const responseApi = await searchApi(`/${query}.json`, {
        params: {
          proximity: state.places.userLocation.join(","),
        },
      });
      commit("setPlaces", responseApi.data.features);
      return responseApi.data.features;
    },
  },
});
export default store;
