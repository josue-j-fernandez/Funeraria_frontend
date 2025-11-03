// src/routes/HomePage.tsx
import React, { useState } from "react";
import bgImage from "../assets/fondo_login.jpg";
import funeralImg from "../assets/funeral1.jpg";
import cremacionImg from "../assets/cremacion1.jpg";
import acompanamientoImg from "../assets/acompanamiento.jpg";

interface ServiceCardProps {
  title: string;
  img: string;
  description: string;
  moreInfo: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, img, description, moreInfo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-white/20 backdrop-blur-md p-4 rounded shadow-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-2xl"
      onClick={() => setExpanded(!expanded)}
    >
      <h3 className="font-bold mb-2">{title}</h3>
      <img
        src={img}
        alt={title}
        className="rounded w-full h-40 object-cover mb-2"
      />
      <p className="text-sm">{description}</p>

      {expanded && (
        <p className="mt-2 text-xs text-gray-100 transition-all">
          {moreInfo}
        </p>
      )}
    </div>
  );
};

const HomePage: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>

      <div className="relative z-10 text-center text-white p-6 max-w-5xl w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Funeraria Santo Sepulcro
        </h1>
        <p className="mb-8 text-lg md:text-xl">
          En los momentos de dolor, estamos aquí para acompañarte y brindarte
          tranquilidad. Nuestros servicios funerarios y de cremación son
          realizados con respeto, cuidado y profesionalismo.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Servicios Fúnebres"
            img={funeralImg}
            description="Planificación y realización de ceremonias funerarias con respeto y cuidado."
            moreInfo="Ofrecemos servicios personalizados, decoración, música, transporte y asistencia completa durante todo el proceso."
          />
          <ServiceCard
            title="Cremación"
            img={cremacionImg}
            description="Servicio de cremación seguro y digno, con seguimiento personalizado."
            moreInfo="Brindamos urnas, recordatorios, asesoría legal y apoyo emocional durante todo el procedimiento."
          />
          <ServiceCard
            title="Acompañamiento"
            img={acompanamientoImg}
            description="Brindamos apoyo emocional y asesoría en todos los trámites necesarios."
            moreInfo="Nuestro equipo ayuda a las familias a organizar los documentos legales, seguros y todo lo necesario para la despedida."
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;



