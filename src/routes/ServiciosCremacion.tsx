import React from "react";

const ServiciosCremacion: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Servicios de Cremación</h1>
      <p className="text-gray-700 leading-relaxed">
        Nuestros servicios de cremación se ofrecen con el máximo respeto y cuidado.
        Contamos con instalaciones modernas, acompañamiento familiar y opciones de
        urnas conmemorativas personalizadas.
      </p>
      <img
        src="https://images.unsplash.com/photo-1504198266285-165a16f0c6b3"
        alt="Servicio de Cremación"
        className="mt-6 rounded-lg shadow-lg max-w-xl"
      />
    </div>
  );
};

export default ServiciosCremacion;
