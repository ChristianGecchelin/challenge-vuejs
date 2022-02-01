import { createStore } from "vuex";
import { searchApi } from "@/apis";
import mapboxgl from "mapbox-gl";

const store = createStore({
  state: {
    // nombre del usuario seteado en el form
    users: {
      usernames: [],
      userplaces: [],
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
    /* nos indica si el mapa esta cargado */
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
    setUsername(state, username) {
      let name = state.users.usernames.push(username);
      state.users.usernames = name;
    },
    setUserplace(state, userplace) {
      let place = state.users.userplaces.push(userplace);
      state.users.userplaces = place;
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

    //cuando ingreso en el input un sitio, primero verifico que el input no este vacio. Luego llamo a la api, recibo una respuesta.
    /* seteo en los parametros la proximidad de mi ubicacion, para que los resultados den más cerca de donde estoy y luego llamo a la funcion setPlaces y le paso los resultados*/
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
    /* esta deberia haber sido la funcion que se ejecute en Form para cargar nuevos places de los usuarios */
    async searchPlacesForm({ state, commit }, query) {
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
      commit("setUserplace", responseApi.data.features);
      return responseApi.data.features;
    },

    async createUsername({ commit }, username) {
      commit("setUsername", username);
    },

    async createUserplace({ commit }, userplace) {
      commit("setUserplace", userplace);
    },
  },
});
export default store;
