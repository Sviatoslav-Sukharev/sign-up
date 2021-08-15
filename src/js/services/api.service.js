import axios from "../plugins/axios";
import {initCountries, initCities} from "../views/form";

async function signUp(data) {
  try {
    const response = await axios.post("/auth/signup", JSON.stringify(data));
    console.log(response);
    if(response.error === true) {
      return Promise.reject(response.message);
    }
    return response;
  } catch(error) {
    console.log("error:", error);
    return Promise.reject(error);
  }
}

async function setCountries() {
  try {
    const response = await axios.get("/location/get-countries");
    console.log("countries:", response);
    initCountries(response);
    return response;
  } catch(error) {
    console.log("error:", error);
    return Promise.reject(error);
  }
}

async function setCities(index) {
  try {
    const response = await axios.get(`/location/get-cities/${index}`);
    console.log("cities:", response);
    initCities(response);
    return response;
  } catch(error) {
    console.log("error:", error);
    return Promise.reject(error);
  }
}

export {setCountries, setCities, signUp};