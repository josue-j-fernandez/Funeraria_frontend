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
      <div className="w-1/2 flex justify-center items-center pl-16">
        <form
          onSubmit={handleSubmit}
          className="bg-[#8D5F2D]/40 p-8 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#7EC8E3]">
            Iniciar Sesión
          </h2>

          <div className="mb-4">
            <label className="block mb-1 text-[#7EC8E3]">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7EC8E3]"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block mb-1 text-[#7EC8E3]">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#7EC8E3]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#7EC8E3]/80 hover:bg-[#7EC8E3]/100 text-[#8D5F2D] py-2 rounded mt-6"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;




