
// src/types/User.ts
export const UserRole = {
  ADMIN: 'ADMIN',
  USER: 'USER',
} as const;

export type UserRole = (typeof UserRole)[keyof typeof UserRole];

export interface User {
  id: number;
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  cedula: string;
  usuario: string;
  rol: UserRole;
  createdAt?: Date;
  updatedAt?: Date;
}
