// src/components/SlideBar.tsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { isAuthenticated } = useAuth(); // ✅

  const linkClass = (path: string) =>
    location.pathname === path
      ? "block px-4 py-2 rounded-lg bg-[#8D5F2D] text-white font-medium"
      : "block px-4 py-2 rounded-lg text-gray-300 hover:bg-[#3a3a3a] hover:text-white";

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#1f1f1f] text-gray-200 shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 border-b border-[#2e2e2e] flex justify-between items-center">
        <h2 className="text-xl font-serif text-[#d4b48c] tracking-wide">Menú</h2>
        <button onClick={onClose} className="text-gray-400 hover:text-[#d4b48c]">
          ✕
        </button>
      </div>

      <nav className="p-4 space-y-2 text-sm">
        <Link to="/" className={linkClass("/")}>
          Inicio
        </Link>

        <div className="mt-2">
          <button
            onClick={() => setServicesOpen(!servicesOpen)}
            className="w-full text-left px-4 py-2 rounded-lg flex justify-between items-center hover:bg-[#3a3a3a] hover:text-white"
          >
            <span>Tipos de Servicios</span>
            <span className="text-[#d4b48c]">{servicesOpen ? "▲" : "▼"}</span>
          </button>

          {servicesOpen && (
            <div className="ml-4 mt-2 space-y-1">
              <Link to="/servicios-funebres" className={linkClass("/servicios-funebres")}>
                Servicios Fúnebres
              </Link>
              <Link to="/servicios-cremacion" className={linkClass("/servicios-cremacion")}>
                Servicios de Cremación
              </Link>
            </div>
          )}
        </div>

        {/* Solo se muestra si está autenticado */}
        {isAuthenticated && (
          <Link to="/usuarios" className={linkClass("/usuarios")}>
            Usuarios
          </Link>
        )}
      </nav>

      <div className="absolute bottom-4 w-full text-center text-xs text-gray-500">
        © 2025 Funeraria Santo Sepulcro
      </div>
    </div>
  );
};

export default Sidebar;










