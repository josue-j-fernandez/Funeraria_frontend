// src/routes/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí simulas validación. Por ejemplo:
    if (username === "admin" && password === "1234") {
      // simula “token”
      localStorage.setItem("token", "mi-token-de-ejemplo");
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
     <form
  onSubmit={handleSubmit}
  className="bg-white p-6 rounded shadow-md w-full max-w-sm mx-auto mt-20"
>
  <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

  <div className="mb-4">
    <label className="block mb-1 text-gray-700">Usuario</label>
    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      required
    />
  </div>

  <div className="mb-4">
    <label className="block mb-1 text-gray-700">Contraseña</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
      required
    />
  </div>

  <button
    type="submit"
    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded font-semibold transition"
  >
    Entrar
  </button>
</form>

    </div>
  );
};

export default Login;
