import { API_URL } from 'react-native-dotenv';
import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://10.0.0.107:3333'
  baseURL: String(API_URL)
})

export default api;
