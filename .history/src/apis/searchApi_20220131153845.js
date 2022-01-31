import axios from "axios";
const searchAPi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
});
