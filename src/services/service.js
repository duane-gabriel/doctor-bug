import axios from "./axios";

class Service {
  constructor(endpoint) {
    this.url = endpoint;
    this.axios = axios;
  }

  create(object) {
    return axios.post(this.url, object);
  }

  getAll() {
    return axios.get(this.url + "s");
  }
}

export default Service;
