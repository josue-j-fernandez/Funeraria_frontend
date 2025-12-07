// src/api/axiosClient.ts
import axios from 'axios';
 

const api = axios.create({
  
  baseURL: 'http://localhost:3000', 
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

api.interceptors.request.use(config => {
  const token = localStorage.getItem('jwtToken'); 
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});

// Interceptor de Respuestas
api.interceptors.response.use(
  response => response,
  error => {

    if (axios.isAxiosError(error) && error.response && error.response.status === 401) {
      
      console.warn("Token JWT expirado o inválido. Cerrando sesión...");
      
      localStorage.removeItem('jwtToken');
      
      window.location.href = '/login'; 
    }
    return Promise.reject(error);
  }
);

export default api;