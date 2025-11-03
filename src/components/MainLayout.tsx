// src/components/MainLayout.tsx
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./SlideBar";
import Header from "./Header";

const MainLayout: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f7f4] text-gray-800">
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex flex-col flex-1">
        <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />

        <main className="flex-1 overflow-y-auto p-6 bg-[#f8f7f4]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;

