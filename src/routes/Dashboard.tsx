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
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div style={{ flex: 1 }}>
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button onClick={() => setMenuOpen(!menuOpen)}>☰ Menu</button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Cerrar Sesión
          </button>
        </header>

        <main style={{ padding: "1rem" }}>
          {/* Aquí se renderizan las rutas hijas */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;





