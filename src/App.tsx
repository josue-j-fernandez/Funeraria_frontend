// src/App.tsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import UsuariosTable from "./components/UsuariosTable";
import ServiciosFunebres from "./routes/ServiciosFunebres";
import ServiciosCremacion from "./routes/ServiciosCremacion";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* Rutas hijas renderizadas dentro del Dashboard */}
            <Route index element={<div>Bienvenido al Dashboard</div>} />
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


