import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";

import HomePage from "./routes/HomePage";
import UsuariosTable from "./components/UsuariosTable";
import ServiciosFunebres from "./routes/ServiciosFunebres";
import ServiciosCremacion from "./routes/ServiciosCremacion";
import Dashboard from "./routes/Dashboard";

import MainLayout from "./components/MainLayout";
import LoginPage from "./routes/Login";
import PrivateRoute from "./routes/PrivateRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>

          {/* Login fuera del MainLayout */}
          <Route path="/login" element={<LoginPage />} />

          {/* ✔ Todas las demás páginas con MainLayout */}
          <Route
            path="/*"
            element={
              <MainLayout>
                <Routes>

                  {/* PUBLICAS */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/servicios-funebres" element={<ServiciosFunebres />} />
                  <Route path="/servicios-cremacion" element={<ServiciosCremacion />} />

                  {/* PRIVADAS */}
                  <Route
                    path="/dashboard"
                    element={
                      <PrivateRoute>
                        <Dashboard />
                      </PrivateRoute>
                    }
                  />

                  <Route
                    path="/usuarios"
                    element={
                      <PrivateRoute>
                        <UsuariosTable />
                      </PrivateRoute>
                    }
                  />

                </Routes>
              </MainLayout>
            }
          />

        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;










