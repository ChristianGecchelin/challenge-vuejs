import axios from "axios";
const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 1,
    language: "es",
    access_token:
      "pk.eyJ1IjoiY2hyaXN0aWFuZ2VjY2hlbGluIiwiYSI6ImNreXp6MGttcTB6Njgyb212dGQwN2gyNGEifQ.uqF7EL5e27LjY8_pFemOyg",
  },
});
export default searchApi;
//aca llamo a la Api usando la librería de axios. Y determino los parametros que me permite la Api para usarla en mi proyecto

/*originalmente queria poner limit 3, para que el usuario pudiera elegir el resultado, pero los marcadores se me seteaban en todas las ubicaciones resultantes, el problema esta en setPlaces en el store.
 */
