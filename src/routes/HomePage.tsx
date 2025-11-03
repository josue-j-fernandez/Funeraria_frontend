// src/routes/HomePage.tsx
import React from "react";
import bgImage from "../assets/fondo_login.jpg";

const HomePage: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay oscuro para contraste */}
      <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>

      {/* Contenido principal */}
      <div className="relative z-10 text-center text-white p-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Funeraria Santo Pulcro
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          En los momentos de dolor, estamos aquí para acompañarte y brindarte
          tranquilidad. Nuestros servicios funerarios y de cremación son
          realizados con respeto, cuidado y profesionalismo.
        </p>

        {/* Sección de servicios con imágenes */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/20 backdrop-blur-md p-4 rounded shadow-lg">
            <h3 className="font-bold mb-2">Servicios Funebres</h3>
            <img
              src="/assets/funeral1.jpg"
              alt="Servicio Funebre"
              className="rounded w-full h-40 object-cover mb-2"
            />
            <p className="text-sm">
              Planificación y realización de ceremonias funerarias con respeto
              y cuidado.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-4 rounded shadow-lg">
            <h3 className="font-bold mb-2">Cremación</h3>
            <img
              src="/assets/cremacion1.jpg"
              alt="Servicio Cremación"
              className="rounded w-full h-40 object-cover mb-2"
            />
            <p className="text-sm">
              Servicio de cremación seguro y digno, con seguimiento personalizado.
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-md p-4 rounded shadow-lg">
            <h3 className="font-bold mb-2">Acompañamiento</h3>
            <img
              src="/assets/acompanamiento.jpg"
              alt="Acompañamiento"
              className="rounded w-full h-40 object-cover mb-2"
            />
            <p className="text-sm">
              Brindamos apoyo emocional y asesoría en todos los trámites
              necesarios.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

