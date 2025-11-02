import React from "react";

const ServiciosFunebres: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Servicios Fúnebres</h1>
      <p className="text-gray-700 leading-relaxed">
        Ofrecemos una gama completa de servicios fúnebres que buscan brindar apoyo,
        respeto y acompañamiento en momentos difíciles. Contamos con salas velatorias,
        transporte, arreglos florales y asesoramiento personalizado.
      </p>
      <img
        src="https://images.unsplash.com/photo-1528825871115-3581a5387919"
        alt="Servicio Fúnebre"
        className="mt-6 rounded-lg shadow-lg max-w-xl"
      />
    </div>
  );
};

export default ServiciosFunebres;
