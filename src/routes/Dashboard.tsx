import React, { useState } from "react";
import Sidebar from "../components/SlideBar";
import UsuariosTable from "../components/UsuariosTable";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"usuarios" | null>(null);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleMenuClick = (view: "usuarios") => {
    setCurrentView(view);
    setMenuOpen(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} onMenuClick={handleMenuClick} />

      <div style={{ flex: 1, position: "relative" }}>
        <header
          style={{
            padding: "1rem",
            borderBottom: "1px solid #ddd",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <button onClick={toggleMenu}>☰ Menu</button>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Cerrar Sesión
          </button>
        </header>

        <main style={{ padding: "1rem" }}>
          {currentView === "usuarios" ? <UsuariosTable /> : <div>Selecciona una opción del menú</div>}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;


