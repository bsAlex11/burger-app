import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://react-burger-fc7b9.firebaseio.com/'
});