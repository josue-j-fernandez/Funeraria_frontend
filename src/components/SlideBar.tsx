import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const toggleServices = () => setServicesOpen(!servicesOpen);

  const linkClass = (path: string) =>
    location.pathname === path
      ? "block px-4 py-2 bg-blue-200 rounded"
      : "block px-4 py-2 hover:bg-blue-100 rounded";

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-100 shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-bold text-lg">Menú</h2>
        <button onClick={onClose} className="text-gray-600">
          ✕
        </button>
      </div>

      <nav className="p-4">
        <Link to="/dashboard" className={linkClass("/dashboard")}>
          Inicio
        </Link>

        <Link to="/dashboard/usuarios" className={linkClass("/dashboard/usuarios")}>
          Usuarios
        </Link>

        {/* Desplegable de Servicios */}
        <div className="mt-2">
          <button
            onClick={toggleServices}
            className="w-full text-left px-4 py-2 hover:bg-blue-100 rounded flex justify-between items-center"
          >
            Tipos de Servicios
            <span>{servicesOpen ? "▲" : "▼"}</span>
          </button>

          {servicesOpen && (
            <div className="ml-4 mt-1">
              <Link
                to="/dashboard/servicios-funebres"
                className={linkClass("/dashboard/servicios-funebres")}
              >
                Servicios Funebres
              </Link>
              <Link
                to="/dashboard/servicios-cremacion"
                className={linkClass("/dashboard/servicios-cremacion")}
              >
                Servicios Cremación
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;




