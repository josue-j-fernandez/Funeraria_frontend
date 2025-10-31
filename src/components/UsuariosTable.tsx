// src/components/UsuariosTable.tsx
import React, { useState } from "react";
import { Edit, Trash2 } from "lucide-react";
import type { User } from "../types/User";
import { mockUsers } from "../data/mockUsers";

const UsuariosTable: React.FC = () => {
  const [usuarios, setUsuarios] = useState<User[]>(mockUsers);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    cedula: "",
  });

  const openCreateModal = () => {
    setEditingUser(null);
    setFormData({ nombre: "", apellidoPaterno: "", apellidoMaterno: "", cedula: "" });
    setShowModal(true);
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setFormData({
      nombre: user.nombre,
      apellidoPaterno: user.apellidoPaterno,
      apellidoMaterno: user.apellidoMaterno,
      cedula: user.cedula,
    });
    setShowModal(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("¿Estás seguro de eliminar?")) {
      setUsuarios((prev) => prev.filter((u) => u.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingUser) {
      setUsuarios((prev) =>
        prev.map((u) =>
          u.id === editingUser.id ? { ...u, ...formData } : u
        )
      );
    } else {
      const newUser: User = {
        id: Date.now(),
        nombre: formData.nombre,
        apellidoPaterno: formData.apellidoPaterno,
        apellidoMaterno: formData.apellidoMaterno,
        cedula: formData.cedula,
      };
      setUsuarios((prev) => [...prev, newUser]);
    }
    setShowModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Lista de Usuarios</h2>
        <button
          onClick={openCreateModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
        >
          Crear Usuario
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded border border-gray-200">
        <table className="min-w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-100 text-gray-800 uppercase text-xs font-bold">
            <tr>
              <th className="px-6 py-3 border-b">Nombre</th>
              <th className="px-6 py-3 border-b">Apellido Paterno</th>
              <th className="px-6 py-3 border-b">Apellido Materno</th>
              <th className="px-6 py-3 border-b">Cédula</th>
              <th className="px-6 py-3 border-b text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((u) => (
              <tr key={u.id} className="hover:bg-gray-50">
                <td className="px-6 py-3 border-b">{u.nombre}</td>
                <td className="px-6 py-3 border-b">{u.apellidoPaterno}</td>
                <td className="px-6 py-3 border-b">{u.apellidoMaterno}</td>
                <td className="px-6 py-3 border-b">{u.cedula}</td>
                <td className="px-6 py-3 border-b text-center space-x-4">
                    <button onClick={() => openEditModal(u)} title="Editar" 
                      className="text-yellow-500 hover:text-yellow-600"> <Edit size={20}/>
                    </button>
                    <button onClick={() => handleDelete(u.id)} title="Eliminar"
                      className="text-red-500 hover:text-red-600"> <Trash2 size={20}/>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
              {editingUser ? "Editar Usuario" : "Crear Usuario"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Nombre:</label>
                <input
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Apellido Paterno:</label>
                <input
                  type="text"
                  value={formData.apellidoPaterno}
                  onChange={(e) => setFormData({ ...formData, apellidoPaterno: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Apellido Materno:</label>
                <input
                  type="text"
                  value={formData.apellidoMaterno}
                  onChange={(e) => setFormData({ ...formData, apellidoMaterno: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Cédula:</label>
                <input
                  type="text"
                  value={formData.cedula}
                  onChange={(e) => setFormData({ ...formData, cedula: e.target.value })}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
                  required
                />
              </div>
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
