import axios from "axios";

const baseURL = "http://localhost:8080";

const http = axios.create({
  baseURL,
  responseType: "json",
});

export default http;
