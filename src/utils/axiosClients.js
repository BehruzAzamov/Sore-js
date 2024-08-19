import axios from "axios";

let mainUrl = "https://json-api.uz/api/project/devjob";

export const axiosClient = axios.create({
  baseURL: mainUrl,
});

axiosClient.interceptors.request.use((req) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error) => {
    const originalRequest = error.config 

    try {
      if (error.response.status = 403 && !originalRequest._retry) {
        originalRequest._retry = true

        const refresh_token = window.localStorage.getItem("refresh_token")

        const {data} = await axios.post(mainUrl+"/auth/refresh-token",{
          refresh_token
        })

        window.localStorage.setItem("access_token",data.access_token)

        return axiosClient(originalRequest)
      }
    }catch (error) {
      console.log(error.message);
      
    }
  }
);
