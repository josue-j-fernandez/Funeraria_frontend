// src/routes/Dashboard.tsx
import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../components/SlideBar";
import { useAuth } from "../hooks/useAuth";

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex h-screen bg-[#f8f7f4] text-gray-800">
      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-3 bg-[#2e2e2e] text-white shadow-md">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl font-semibold hover:text-[#8D5F2D] transition-colors"
          >
            ☰
          </button>

          <h1 className="text-xl font-serif tracking-wide">Funeraria Santo Sepulcro</h1>

          <button
            onClick={handleLogout}
            className="bg-[#8D5F2D] hover:bg-[#7C4F28] text-white px-4 py-2 rounded-lg transition-colors"
          >
            Cerrar Sesión
          </button>
        </header>

        {/* Contenido principal */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#f8f7f4]">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;






