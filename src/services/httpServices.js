import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "http://localhost:5000/api";

function setJWT(jwt){
  axios.defaults.headers.common['authorization'] =jwt;
  axios.defaults.headers.common['Authorization'] =jwt;
}



axios.interceptors.response.use(null, (err) => {
  const expectedError = (err.response && err.response.status <= 400 && err.response.status < 500)

  if (!expectedError) {
    toast.error("Unexpected error occured, please Try again");
  }
  return Promise.reject(err);
});


export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJWT
};
