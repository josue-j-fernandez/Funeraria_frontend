// src/components/MainLayout.tsx
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./SlideBar";
import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f7f4] text-gray-800">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex flex-col flex-1">
        <Header onToggleSidebar={() => setMenuOpen(!menuOpen)} />

        <main className="flex-1 overflow-y-auto p-6">
          <Outlet /> {/* Aquí se renderizan las páginas según la ruta */}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

