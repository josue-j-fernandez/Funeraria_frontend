import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthProvider";
import HomePage from "./routes/HomePage";
import UsuariosTable from "./components/UsuariosTable";
import ServiciosFunebres from "./routes/ServiciosFunebres";
import ServiciosCremacion from "./routes/ServiciosCremacion";
import MainLayout from "./components/MainLayout";
import LoginPage from "./routes/Login";
import PrivateRoute from "./routes/PrivateRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/"
            element={
              <PrivateRoute>
                <MainLayout>
                  <HomePage />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/usuarios"
            element={
              <PrivateRoute>
                <MainLayout>
                  <UsuariosTable />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/servicios-funebres"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ServiciosFunebres />
                </MainLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/servicios-cremacion"
            element={
              <PrivateRoute>
                <MainLayout>
                  <ServiciosCremacion />
                </MainLayout>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;








