import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import bgImage from "../assets/fondo_login.jpg";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate("/dashboard");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div
      className="flex h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Panel izquierdo: Formulario */}
      <div className="w-1/2 flex justify-start items-center pl-24">
        <form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md border border-white/20"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-white">
            Iniciar Sesión
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-white">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingrese su usuario"
              className="w-full px-3 py-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-white">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña"
              className="w-full px-3 py-2 border border-white rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-white"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#8D5F2D] hover:bg-[#7C4F28] text-white py-2 rounded mt-6"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;





