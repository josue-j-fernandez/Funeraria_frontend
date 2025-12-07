// src/services/userService.ts
import api from '../api/axiosClient';
import axios from 'axios';
import { type User, UserRole } from '../types/User'; 


interface UserCrudData {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    cedula: string;
    usuario: string;
    contrasena?: string; 
    rol?: UserRole;
}


export const UserService = {


    getAllUsers: async (): Promise<User[]> => {
        try {
            const response = await api.get<User[]>('/users');
            return response.data;
        } catch (error: unknown) {
            let errorMessage = "Error al cargar la lista de usuarios.";
            if (axios.isAxiosError(error) && error.response) {
               
                errorMessage = error.response.data?.error || `Error ${error.response.status}: Fallo en la petición.`;
            }
            throw new Error(errorMessage);
        }
    },

    /**

     * @param userData 
     */
    createUser: async (userData: UserCrudData): Promise<User> => {
        try {

            if (!userData.contrasena) {
                throw new Error("Se requiere una contraseña para crear el usuario.");
            }
            const response = await api.post<User>('/users', userData);
            return response.data;
        } catch (error: unknown) {
            let errorMessage = "Error al crear el usuario.";
            if (axios.isAxiosError(error) && error.response) {

                errorMessage = error.response.data?.error || `Error ${error.response.status}: No se pudo crear el usuario.`;
            }
            throw new Error(errorMessage);
        }
    },

    /**
     * 
     * @param id 
     * @param updatePayload 
     */
    updateUser: async (id: number, updatePayload: Partial<UserCrudData>): Promise<User> => {
        try {

            const response = await api.put<User>(`/users/${id}`, updatePayload);
            return response.data;
        } catch (error: unknown) {
            let errorMessage = "Error al actualizar el usuario.";
            if (axios.isAxiosError(error) && error.response) {
                errorMessage = error.response.data?.error || `Error ${error.response.status}: No se pudo actualizar el usuario.`;
            }
            throw new Error(errorMessage);
        }
    },

    /**
 
     * @param id 
     */
    deleteUser: async (id: number): Promise<void> => {
        try {
            await api.delete(`/users/${id}`);
        } catch (error: unknown) {
            let errorMessage = "Error al eliminar el usuario.";
            if (axios.isAxiosError(error) && error.response) {
                errorMessage = error.response.data?.error || `Error ${error.response.status}: No se pudo eliminar el usuario.`;
            }
            throw new Error(errorMessage);
        }
    },
};