// src/components/Header.tsx
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  toggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirige al home público
  };

  return (
    <header className="flex justify-between items-center px-6 py-3 bg-[#2e2e2e] text-white shadow-md">

      {/* Botón menú (solo si está definido) */}
      {toggleSidebar && (
        <button
          onClick={toggleSidebar}
          className="text-2xl font-semibold hover:text-[#8D5F2D] transition-colors"
        >
          ☰
        </button>
      )}

      <h1 className="text-2xl md:text-3xl font-serif font-extrabold tracking-wide">
        Funeraria Santo Sepulcro
      </h1>

      {/* Botón dinámico */}
      {!isAuthenticated ? (
        <button
          onClick={() => navigate("/login")}
          className="bg-[#8D5F2D] hover:bg-[#7C4F28] text-white px-4 py-2 rounded-lg transition-colors"
        >
          Iniciar Sesión
        </button>
      ) : (
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Cerrar Sesión
        </button>
      )}
    </header>
  );
};

export default Header;










