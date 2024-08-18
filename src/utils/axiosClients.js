import axios from "axios";

let mainUrl = "https://json-api.uz/api/project/devjob";

export const axiosClient = axios.create({
  baseURL: mainUrl,
});

axios.interceptors.request.use(
  () => {},
  () => {}
);

axios.interceptors.response.use(
    () => {},
    () => {}
);