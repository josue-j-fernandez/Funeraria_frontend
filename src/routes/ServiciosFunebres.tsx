// src/routes/ServiciosFunebres.tsx
import React from "react";
import Card from "../components/Card";
import { Home } from "lucide-react"; 

import sf01 from "../assets/sf01.jpg";
import sf02 from "../assets/sf02.jpg";
import sf03 from "../assets/sf03.jpg";
import sf04 from "../assets/sf04.jpg";
import sf05 from "../assets/sf05.jpg";
import sf06 from "../assets/sf06.jpg";

import salon01 from "../assets/salon01.jpg";
import salon02 from "../assets/salon02.jpg";
import salon03 from "../assets/salon03.jpg";


const ataúdes = [
    { 
        titulo: "Modelo Clásico Ébano", 
        imagen: sf01, 
        descripcionCorta: "Diseño tradicional y elegante, elaborado en madera de ébano con acabado brillante.", 
        detalles: "Interior de seda natural. Incluye cruz en bronce. Disponible en varios tonos de tapizado.",
        etiqueta: "Gama Alta"
    },
    { 
        titulo: "Modelo Esperanza", 
        imagen: sf02, 
        descripcionCorta: "Un diseño sencillo y cálido, ideal para ceremonias íntimas y personales.", 
        detalles: "Madera de pino certificada, forro interior de algodón.",
        etiqueta: "Gama Media"
    },
    { 
        titulo: "Modelos de Lujo", 
        imagen: sf03, 
        descripcionCorta: "Máximo lujo y distinción. Detalles tallados a mano y  colores variados.", 
        detalles: "Caoba maciza, tapicería de terciopelo premium.",
        etiqueta: "Gama Premium"
    },
    { 
        titulo: "Modelo de Lujo sencillo", 
        imagen: sf04, 
        descripcionCorta: "El modelo más solicitado por su equilibrio entre calidad, respeto y precio.", 
        detalles: "Madera de cedro con acabado mate. Esquinas reforzadas y manijas ergonómicas.",
        etiqueta: "Gama Media"
    },
    { 
        titulo: "Modelo Sencilo Elegante", 
        imagen: sf05, 
        descripcionCorta: "Diseñado con la máxima sensibilidad para la despedida de los más pequeños.", 
        detalles: "Madera ligera y tapizado interior blanco, con detalles de bordado delicados.",
        etiqueta: "Gama Media-Baja"
    },
    { 
        titulo: "Modelo Ecológico", 
        imagen: sf06, 
        descripcionCorta: "Opción totalmente biodegradable, respetuosa con el medio ambiente.", 
        detalles: "Hecho de mimbre y materiales orgánicos. Apto para sepultura natural o nicho.",
        etiqueta: "Baja"
    },
];

// --- DATOS DE SALONES (Usando variables importadas) ---
const salones = [
    { 
        titulo: "Salón de Velación Gabriel", 
        imagen: salon01, 
        descripcionCorta: "Espacio moderno con luz natural, diseñado para reuniones medianas y ambiente sereno.", 
        detalles: "Capacidad para 50 personas. Incluye servicio de cafetería y área de descanso privada." ,
        etiqueta: "Salón Standard"
    },
    { 
        titulo: "Salón de Velación Gabriel", 
        imagen: salon02, 
        descripcionCorta: "Un ambiente amplio y solemne con arquitectura tradicional y alta capacidad.", 
        detalles: "Capacidad para 80 personas. Sistema de sonido y pantallas. Incluye servicio de cafetería y área de descanso privada." ,
        etiqueta: "Salón Premium"
    },
    { 
        titulo: "Sala Íntima", 
        imagen: salon03, 
        descripcionCorta: "Pequeña sala privada para ceremonias muy cerradas, con decoración acogedora.", 
        detalles: "Capacidad máxima 30 personas. Ideal para el recogimiento familiar.",
        etiqueta: "Salón Íntimo"
    },
];


const ServiciosFunebres: React.FC = () => {
    return (
        <div className="bg-[#f8f7f4] min-h-screen text-gray-800">
            
            <header className="bg-gray-100 py-16 text-center border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-extrabold mb-3 text-[#8D5F2D]">Servicios Fúnebres</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Honramos la vida con dignidad. Ofrecemos una gama completa de ataúdes y salones para una despedida respetuosa.
                    </p>
                </div>
            </header>

            {/* --- SECCIÓN 1: ATAÚDES --- */}
            <section id="ataudes" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Nuestra Selección de Ataúdes</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ataúdes.map((producto, index) => (
                            <Card key={index} {...producto} />
                        ))}
                    </div>
                </div>
            </section>
            
            <hr className="border-gray-200 my-0" />

            {/* --- SECCIÓN 2: SALONES DE VELACIÓN --- */}
            <section id="salones" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800 flex items-center justify-center">
                        <Home className="w-8 h-8 mr-3 text-[#8D5F2D]" />
                        Nuestros Salones de Velación
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {salones.map((producto, index) => (
                            <Card key={index} {...producto} />
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default ServiciosFunebres;