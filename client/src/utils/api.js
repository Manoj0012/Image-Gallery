import axios from 'axios';

axios.defaults.baseURL="http://localhost:9000"
const token=localStorage.getItem("token")
axios.interceptors.request.use(function (config) {
    config.headers.setAuthorization(localStorage.getItem("token"))
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
export{
    axios as api
}