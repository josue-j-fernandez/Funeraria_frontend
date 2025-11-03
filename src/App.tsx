// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import MainLayout from "./components/MainLayout";
import HomePage from "./routes/HomePage";
import UsuariosTable from "./components/UsuariosTable";
import ServiciosFunebres from "./routes/ServiciosFunebres";
import ServiciosCremacion from "./routes/ServiciosCremacion";
import Login from "./routes/Login";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Página de login */}
          <Route path="/login" element={<Login />} />

          {/* Todas las páginas protegidas */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="usuarios" element={<UsuariosTable />} />
            <Route path="servicios-funebres" element={<ServiciosFunebres />} />
            <Route path="servicios-cremacion" element={<ServiciosCremacion />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;





