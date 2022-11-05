import axios from "axios";
import { store } from '../redux/store';

axios.interceptors.request.use(function (config) {
  const token = store.getState().auth.accessToken
  config.headers.Authorization = 'Bearer ' + token;
  return config;
});

export const getHeader = () => {
  const token = store.getState().auth.accessToken
  return {
    Authorization: 'Bearer ' + token
  }
}