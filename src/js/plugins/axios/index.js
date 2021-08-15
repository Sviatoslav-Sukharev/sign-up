import axios from "axios";
import interceptors from "./interceptors";
import config from "../../config/config";

const instance = axios.create({
  baseURL: config.apiUrl,
  headers: {
    "Content-type": "application/json",
  },
});

interceptors(instance);

export default instance;