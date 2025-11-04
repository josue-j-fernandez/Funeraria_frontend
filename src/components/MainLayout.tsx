//src/components/MainLayout.tsx
import React, { useState } from "react";
import Sidebar from "./SlideBar";
import Header from "./Header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#f8f7f4] text-gray-800">
      {/* Sidebar */}
      <Sidebar isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Contenedor principal */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header toggleSidebar={() => setMenuOpen(!menuOpen)} />

        {/* Contenido */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#f8f7f4]">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;






