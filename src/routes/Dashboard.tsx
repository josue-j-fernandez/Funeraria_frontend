// src/routes/Dashboard.tsx
import React, { useState } from "react";
import Sidebar from "../components/SlideBar";
import UsuariosTable from "../components/UsuariosTable";

const Dashboard: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentView, setCurrentView] = useState<"usuarios" | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClick = (view: "usuarios") => {
    setCurrentView(view);
    setMenuOpen(false); // opcional: cerrar el menú al elegir
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar como modal / panel desplegable */}
      <Sidebar
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onMenuClick={handleMenuClick}
      />
      <div style={{ flex: 1, position: "relative" }}>
        <header style={{ padding: "1rem", borderBottom: "1px solid #ddd" }}>
          <button onClick={toggleMenu}>☰ Menu</button>
        </header>
        <main style={{ padding: "1rem" }}>
          {currentView === "usuarios" ? (
            <UsuariosTable />
          ) : (
            <div>Selecciona una opción del menú</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
