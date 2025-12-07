// src/services/authService.ts
import api from '../api/axiosClient';
import axios from 'axios'; 

interface LoginResponse {
    token: string;
    user: { 
        id: number; 
        usuario: string; 
        rol: string; 

    }; 
}

export const AuthService = {
    
    /**
     * usuario, llamando a la ruta POST /users/login.
     * @param usuario Nombre de usuario o correo.
     * @param contrasena Contraseña.
     * @returns Promesa con el token y los datos del usuario.
     */
    login: async (usuario: string, contrasena: string): Promise<LoginResponse> => {
        try {
  
            const response = await api.post<LoginResponse>('/users/login', { 
                usuario, 
                contrasena 
            });
            return response.data;
            
        } catch (error: unknown) { 

            if (axios.isAxiosError(error) && error.response) { 
                
                const backendError = error.response.data?.error;
                
                if (backendError) {
                    throw new Error(backendError);
                }
                throw new Error(`Fallo en el login (Código ${error.response.status}).`);
            }
            
            throw new Error("Error de conexión a la red. Verifique que el servidor esté activo.");
        }
    },
};