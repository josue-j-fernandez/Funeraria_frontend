import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Dashboard from "./routes/Dashboard";

function App() {
  // Aquí podrías usar un estado global o contexto para saber si está autenticado
  const isAuthenticated = Boolean(localStorage.getItem("token")); // ejemplo simplista

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        }
      />
      <Route
        path="/login"
        element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />}
      />
      <Route
        path="/dashboard/*"
        element={
          isAuthenticated ? <Dashboard /> : <Navigate to="/login" replace />
        }
      />
    </Routes>
  );
}

export default App;
