// src/routes/ServiciosCremacion.tsx
import React from "react";
import Card from "../components/Card"; 
import { Home } from "lucide-react"; 

import sc01 from "../assets/sc01.jpg";
import sc02 from "../assets/sc02.jpg";
import sc03 from "../assets/sc03.jpg";
import sc04 from "../assets/sc04.jpg";
import sc05 from "../assets/sc05.jpg";
import sc06 from "../assets/sc06.jpg";

import salon01 from "../assets/salon01.jpg";
import salon02 from "../assets/salon02.jpg";
import salon03 from "../assets/salon03.jpg";


const urnas = [
    { 
        titulo: "Urna de Mármol Negro", 
        imagen: sc01, 
        descripcionCorta: "Urna esculpida en mármol negro de alta resistencia, pulido a mano.", 
        detalles: "Base antideslizante, forma cuadrada. Ideal para exhibición permanente o nicho." ,
        etiqueta: "Gama Alta"
    },
    { 
        titulo: "Modelo Bambú Natural", 
        imagen: sc02, 
        descripcionCorta: "Opción ecológica y biodegradable, hecha de bambú trenzado.", 
        detalles: "Diseñada para la dispersión o sepultura en tierra, siguiendo principios de biodegradación. Tono natural claro." ,
        etiqueta: "Ecológico"
    },
    { 
        titulo: "Urna de Metal", 
        imagen: sc03, 
        descripcionCorta: "Diseño sobrio y elegante en metal lacado, sellado herméticamente.", 
        detalles: "Peso ligero y muy resistente. Acabado en bronce o plateado. Ideal para exhibicion." ,
        etiqueta: "Gama Media-Baja"
    },
    { 
        titulo: "Urna con fotografia", 
        imagen: sc04, 
        descripcionCorta: "Diseño ligero de madera, con un marco especial para fotografias.", 
        detalles: "Diseña principalmente para exhibición y recuerdo a largo plazo." ,
        etiqueta: "Urna Especial"
    },
    { 
        titulo: "Urna de madera sencilla", 
        imagen: sc05, 
        descripcionCorta: "Diseñada para un exterior sencilo y elegante, pintada a mano.", 
        detalles: "Diseños pueden cambiar segun el gusto del cliente, excelente para guardar recuerdos." ,
        etiqueta: "Gama Artesanal"
    },
    { 
        titulo: "Urna de marmol de Lujo", 
        imagen: sc06, 
        descripcionCorta: "Diseño principalmente elegante y de alta recitencia alta tiempo.", 
        detalles: "Viene en colores negro, verde y rosado y tambien en distintas formas" ,
        etiqueta: "Gama de Lujo"
    },
];

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


const ServiciosCremacion: React.FC = () => {
    return (
        <div className="bg-[#f8f7f4] min-h-screen text-gray-800">
            
            <header className="bg-gray-100 py-16 text-center border-b border-gray-200">
                <div className="max-w-6xl mx-auto px-6">
                    <h1 className="text-5xl font-extrabold mb-3 text-[#8D5F2D]">Servicios de Cremación</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Ofrecemos opciones de cremación con dignidad y una hermosa selección de urnas conmemorativas.
                    </p>
                </div>
            </header>

            {/* --- SECCIÓN 1: URNAS --- */}
            <section id="urnas" className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">Nuestra Colección de Urnas</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {urnas.map((producto, index) => (
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

export default ServiciosCremacion;
