import Axios from "axios";

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMjM0NTY3ODksImVtYWlsIjoiYW5vbnltb3VzQHZ0dmdpYWl0cmkudm4iLCJpcCI6IjEyNy4wLjAuMSIsInVzZXJBZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS84MC4wLjM5ODcuMTYzIFNhZmFyaS81MzcuMzYifSwiaWF0IjoxNTg2NjY2OTc3LCJleHAiOjE1ODY3NTMzNzd9.mi796bg7EcNMGHGh-FZeLiNKFaHQiMsWUoQeKESU2u0'
class AxiosServices {
  config = Axios.interceptors.request.use(function (config) {
    config.headers["Authorization"] = "Bearer " + token;
    config.headers["Content-Type"] = "application/json; charset=utf-8";

    return config;
  });

  post(url, data) {
    return Axios.post(url, data, this.config);
  }

  get(url) {
    return Axios.get(url, this.config);
  }
}

export default new AxiosServices();
