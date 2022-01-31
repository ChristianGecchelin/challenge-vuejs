import axios from "axios";
const searchAPi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 3,
    language: "es",
    access_Token:
      "pk.eyJ1IjoiY2hyaXN0aWFuZ2VjY2hlbGluIiwiYSI6ImNreXp6MGttcTB6Njgyb212dGQwN2gyNGEifQ.uqF7EL5e27LjY8_pFemOyg",
  },
});
