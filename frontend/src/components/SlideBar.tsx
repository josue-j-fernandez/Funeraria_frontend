// src/components/Sidebar.tsx
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onMenuClick: (view: "usuarios") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, onMenuClick }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: isOpen ? 0 : "-250px",
        width: "250px",
        height: "100%",
        backgroundColor: "#f0f0f0",
        boxShadow: "2px 0 5px rgba(0,0,0,0.3)",
        transition: "left 0.3s",
        zIndex: 1000,
      }}
    >
      <div style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
        <h3>Menu</h3>
        <button onClick={onClose}>Cerrar</button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ padding: "0.5rem 1rem", cursor: "pointer" }}
            onClick={() => onMenuClick("usuarios")}>
          Usuarios
        </li>
        {/* puedes agregar más opciones aquí */}
      </ul>
    </div>
  );
};

export default Sidebar;
