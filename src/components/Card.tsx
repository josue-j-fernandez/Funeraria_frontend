// src/components/Card.tsx
import React, { useState } from "react";
import { X, ZoomIn } from "lucide-react";

interface ModalImagenProps {
    src: string;
    alt: string;
    onClose: () => void;
}

const ModalImagen: React.FC<ModalImagenProps> = ({ src, alt, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={onClose} 
        >
            <div 
                className="relative max-w-4xl max-h-full"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 text-white hover:text-[#8D5F2D] transition-colors p-2"
                    aria-label="Cerrar imagen ampliada"
                >
                    <X className="w-8 h-8" />
                </button>
                <img 
                    src={src} 
                    alt={alt} 
                    className="rounded-lg shadow-2xl max-w-full max-h-[90vh] object-contain"
                />
            </div>
        </div>
    );
};


interface CardProps {
    titulo: string;
    imagen: string; 
    descripcionCorta: string; 
    detalles: string; 
    etiqueta?: string; 
}

const Card: React.FC<CardProps> = ({ titulo, imagen, descripcionCorta, detalles, etiqueta }) => {
    const [expandido, setExpandido] = useState(false);
    const [modalAbierto, setModalAbierto] = useState(false);

    const manejarClickImagen = (e: React.MouseEvent) => {
        e.stopPropagation(); 
        setModalAbierto(true);
    };

    const manejarClickTarjeta = () => {
        setExpandido(!expandido);
    };

return (
        <>
            {modalAbierto && (
                <ModalImagen src={imagen} alt={titulo} onClose={() => setModalAbierto(false)} />
            )}

            <div
                className="bg-white/90 p-6 rounded-xl shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-2xl border border-gray-200 cursor-pointer"
                onClick={manejarClickTarjeta} 
            >
                {/* Contenedor de Imagen con Overlay de Zoom */}

                <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg bg-white"> 
                    <img
                        src={imagen}
                        alt={titulo}
                        
                        className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
                    />
                    <button
                       
                        className="absolute inset-0 flex items-center justify-center bg-transparent hover:bg-gray-800/30 transition-all duration-300 text-white"
                        onClick={manejarClickImagen}
                        aria-label={`Ampliar imagen de ${titulo}`}
                    >
                      
                        <ZoomIn className="w-8 h-8 opacity-0 transition-opacity" /> 
                    </button>
                </div>

                <h3 className="text-xl font-bold mb-1 text-gray-800">{titulo}</h3>
                {etiqueta && <p className="text-sm font-semibold text-[#8D5F2D] mb-3">{etiqueta}</p>}
                <p className="text-gray-700 text-sm">{descripcionCorta}</p>

                {/* Área Expandible para Detalles */}
                <div className={`overflow-hidden transition-all duration-500 ${expandido ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-xs italic text-gray-600 border-l-2 border-[#8D5F2D] pl-3 pt-1">{detalles}</p>
                </div>
                
                <button 
                    className="mt-3 text-sm text-[#8D5F2D] font-medium hover:text-gray-800 transition-colors"
                    onClick={manejarClickTarjeta}
                >
                    {expandido ? 'Ver menos ↑' : 'Ver más detalles ↓'}
                </button>
            </div>
        </>
    );
};

export default Card;