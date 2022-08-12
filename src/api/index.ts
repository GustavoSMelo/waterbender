import axios from 'axios';
import 'dotenv/config';

const api = axios.create({
  baseURL: process.env.API_TIMER,
});

export default api;
