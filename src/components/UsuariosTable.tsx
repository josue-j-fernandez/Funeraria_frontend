// src/components/UsuariosTable.tsx
import React, { useState, useEffect } from "react";
import { Edit, Trash2 } from "lucide-react";
import { type User, UserRole } from "../types/User";
import { UserService } from "../services/userService";

interface UserFormData {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  cedula: string;
  usuario: string; 
  contrasena: string; 
  rol?: UserRole; 
}

const initialFormData: UserFormData = {
  nombre: "",
  apellidoPaterno: "",
  apellidoMaterno: "",
  cedula: "",
  usuario: "",
  contrasena: "",
  rol: UserRole.USER,
};

const UsuariosTable: React.FC = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState<string | null>(null); 
    
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState<UserFormData>(initialFormData);

  type FormFields = keyof typeof formData;

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await UserService.getAllUsers();
      setUsuarios(data);
    } catch (err: unknown) {
      console.error("Error al obtener usuarios:", err);
      setError("No se pudo conectar con el servidor o sesión expirada.");
    } finally {
      setLoading(false);
    }
  };
    
  useEffect(() => {
    fetchUsers();
  }, []); 

  const openCreateModal = () => {
    setEditingUser(null);
    setFormData(initialFormData); 
    setShowModal(true);
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setFormData({
      nombre: user.nombre,
      apellidoPaterno: user.apellidoPaterno,
      apellidoMaterno: user.apellidoMaterno,
      cedula: user.cedula,
      usuario: user.usuario,
      contrasena: "", 
      rol: user.rol,
    });
    setShowModal(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("¿Estás seguro de eliminar este usuario?")) {
      return;
    }
    
    try {
      await UserService.deleteUser(id);
      setUsuarios((prev) => prev.filter((u) => u.id !== id));
      alert("Usuario eliminado correctamente.");
    } catch (err: unknown) {
      let msg = "Error al eliminar.";
      if (err instanceof Error) msg = err.message;
      alert(`Fallo en la eliminación: ${msg}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const soloNumeros = /^[0-9]+$/;

    if (
      !soloLetras.test(formData.nombre) ||
      !soloLetras.test(formData.apellidoPaterno) ||
      !soloLetras.test(formData.apellidoMaterno)
    ) {
      alert(" Los nombres y apellidos solo deben contener letras.");
      return;
    }

    if (!soloNumeros.test(formData.cedula)) {
      alert(" La cédula solo debe contener números.");
      return;
    }

    if (!editingUser || (editingUser && formData.contrasena.length > 0)) {
      if (formData.contrasena.length < 4) { 
        alert(" La contraseña debe tener al menos 4 caracteres.");
        return;
      }
    }

    try {
      if (editingUser) {
        const updatePayload: Partial<UserFormData> = {
          ...formData
        };
        
        if (formData.contrasena === "") {
          delete updatePayload.contrasena;
        }
        
        const updatedUser = await UserService.updateUser(editingUser.id, updatePayload);
        setUsuarios((prev) =>
          prev.map((u) => u.id === editingUser.id ? { ...u, ...updatedUser } : u)
        );
        alert("Usuario actualizado con éxito.");

      } else {
        const newUser = await UserService.createUser(formData);
        setUsuarios((prev) => [...prev, newUser]);
        alert("Usuario creado con éxito.");
      }

    } catch (err: unknown) {
      let msg = "Error desconocido al guardar.";
      if (err instanceof Error) msg = err.message;
      alert(` Error al guardar: ${msg}`);
      return;
    }

    setShowModal(false);
  };

  const handleInputChange = (field: FormFields, value: string) => {
    let newValue = value;

    if (["nombre", "apellidoPaterno", "apellidoMaterno"].includes(field)) {
      newValue = newValue.replace(/[^A-Za-zÁÉÍÓÚáéíóúÑñ\s]/g, "");
    }

    if (field === "cedula") {
      newValue = newValue.replace(/[^0-9]/g, "");
    }

    setFormData({ ...formData, [field]: newValue } as UserFormData);
  };
  
  if (loading) return <div className="p-6 text-xl text-gray-500">Cargando datos del servidor...</div>;
  if (error) return <div className="p-6 text-xl text-red-600">{error}</div>;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#2e2e2e]">Lista de Usuarios</h2>
        <button
          onClick={openCreateModal}
          className="bg-[#8D5F2D] hover:bg-[#7C4F28] text-white px-4 py-2 rounded shadow"
        >
          Crear Usuario
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-[#d4b48c] text-white uppercase text-xs font-bold">
            <tr>
              <th className="px-6 py-3 border-b">Nombre</th>
              <th className="px-6 py-3 border-b">Usuario</th> 
              <th className="px-6 py-3 border-b">Cédula</th>
              <th className="px-6 py-3 border-b">Rol</th>
              <th className="px-6 py-3 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 border-b">{u.nombre} {u.apellidoPaterno} {u.apellidoMaterno}</td>
                <td className="px-6 py-3 border-b">{u.usuario}</td> 
                <td className="px-6 py-3 border-b">{u.cedula}</td>
                <td className="px-6 py-3 border-b">{u.rol}</td>
                <td className="px-6 py-3 border-b text-center space-x-4">
                  <button
                    onClick={() => openEditModal(u)}
                    title="Editar"
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    <Edit size={20} />
                  </button>
                  <button
                    onClick={() => handleDelete(u.id)}
                    title="Eliminar"
                    className="text-red-500 hover:text-red-600"
                  >
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#2e2e2e] border-b pb-2">
              {editingUser ? "Editar Usuario" : "Crear Usuario"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {(Object.keys(initialFormData) as FormFields[])
                 .filter(field => field !== 'contrasena' && field !== 'rol')
                 .map((field) => (
                <div key={field}>
                  <label className="block text-sm font-medium capitalize">
                    {field.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    value={formData[field]}
                    onChange={(e) => handleInputChange(field, e.target.value)}
                    className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-[#8D5F2D] focus:border-[#8D5F2D]"
                    required
                  />
                </div>
              ))}
             
              {(!editingUser || editingUser) && (
                  <div>
                      <label className="block text-sm font-medium capitalize">Contraseña {editingUser ? '(dejar vacío para no cambiar)' : '*'}</label>
                      <input
                          type="password"
                          value={formData.contrasena}
                          onChange={(e) => handleInputChange('contrasena', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-[#8D5F2D] focus:border-[#8D5F2D]"
                          required={!editingUser} 
                      />
                  </div>
              )}
              
              {editingUser && (
                  <div>
                      <label className="block text-sm font-medium capitalize">Rol</label>
                      <select
                          value={formData.rol}
                          onChange={(e) => handleInputChange('rol', e.target.value as UserRole)}
                          className="w-full px-3 py-2 border border-gray-400 rounded focus:outline-none focus:ring focus:ring-[#8D5F2D] focus:border-[#8D5F2D]"
                      >
                          <option value={UserRole.USER}>USER</option>
                          <option value={UserRole.ADMIN}>ADMIN</option>
                      </select>
                  </div>
              )}

              <div className="flex justify-end space-x-2 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded text-gray-600 hover:bg-gray-100"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsuariosTable;