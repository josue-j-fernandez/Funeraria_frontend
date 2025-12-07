// src/context/AuthContext.ts 
import { createContext } from "react";

interface AuthContextType {
 isAuthenticated: boolean;

 login: (usuario: string, password: string) => Promise<boolean>; 
 logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
 isAuthenticated: false,

 login: async () => false, 
 logout: () => {},
});









