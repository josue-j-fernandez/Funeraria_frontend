// src/context/AuthProvider.tsx (Versión FINAL)
import React, { useState, useEffect, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { AuthService } from '../services/authService'; // ⬅️ Importar el servicio

interface AuthProviderProps {
 children: ReactNode;
}

const TOKEN_KEY = "jwtToken"; 

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
 const [isAuthenticated, setIsAuthenticated] = useState(false);

 useEffect(() => {
  // Usar la clave correcta
  const token = localStorage.getItem(TOKEN_KEY); 
  if (token) setIsAuthenticated(true);
 }, []);

 const login = async (usuario: string, password: string) => {
  try {

    const data = await AuthService.login(usuario, password);
    
    
    localStorage.setItem(TOKEN_KEY, data.token); 
  setIsAuthenticated(true);
    return true;
  } catch (error) {
    // Si falla (credenciales incorrectas, error de red)
    console.error("Fallo de autenticación en la API:", error);
    localStorage.removeItem(TOKEN_KEY); 
    setIsAuthenticated(false);
    return false;
  }
 };

 const logout = () => {
  // Usarcerrar sesión
  localStorage.removeItem(TOKEN_KEY);
  setIsAuthenticated(false);
 };

 return (
  <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
};