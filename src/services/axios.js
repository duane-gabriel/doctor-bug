import axios from "axios";
import get from 'lodash.get';

const api = axios.create({
  baseURL: "http://localhost:3000",
});

api.interceptors.request.use(
  (config) => {
    if (!window.localStorage.vuex) {
      return config;
    }
    const { user } = JSON.parse(window.localStorage.vuex);
    if (get(user, 'token')) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default api;
