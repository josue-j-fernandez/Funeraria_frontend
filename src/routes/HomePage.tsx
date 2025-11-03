// src/routes/HomePage.tsx
import React from "react";
import Card from "../components/Card"; 
import { PhoneCall, Heart, ShieldCheck, Clock } from "lucide-react"; 


import bgImage from "../assets/fondo_login.jpg";
import funeralImg from "../assets/funeral1.jpg";
import cremacionImg from "../assets/cremacion1.jpg";
import acompanamientoImg from "../assets/acompanamiento.jpg";


interface ValueCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center p-6 bg-white/20 rounded-xl shadow-lg border border-gray-200">
        <div className="text-gray-800 mb-3">{icon}</div>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{title}</h4>
        <p className="text-gray-700 text-sm">{description}</p>
    </div>
);


const HomePage: React.FC = () => {
    return (
        <div className="bg-[#f8f7f4] min-h-screen">

            <a 
                href="tel:+5911234567"
                className="fixed bottom-6 right-6 z-50 bg-[#8D5F2D] hover:bg-[#7C4F28] text-white p-4 rounded-full shadow-lg flex items-center transition-transform transform hover:scale-110"
                aria-label="Llamada de emergencia 24/7"
            >
                <PhoneCall className="w-6 h-6 mr-2" />
                <span className="font-bold hidden sm:inline">Emergencia 24/7</span>
            </a>

            <section 
                className="flex flex-col items-center justify-center pt-20 pb-20 min-h-screen bg-cover bg-fixed bg-center relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="bg-black/50 w-full h-full absolute top-0 left-0"></div>
                
                <div className="relative z-10 text-center text-gray-800 p-6 max-w-6xl w-full">
                    <h1 className="text-5xl md:text-7xl font-serif font-extrabold mb-4 tracking-wide text-white"
                        style={{ textShadow: '0 0 10px rgba(0,0,0,0.6)' }}>
                        Funeraria Santo Sepulcro
                    </h1>
                    
                    <p className="mb-10 text-xl md:text-2xl font-light italic text-gray-200">
                        En los momentos de dolor, estamos aquí para acompañarte y brindarte 
                        la tranquilidad y el respeto que mereces.
                    </p>

                    <div className="flex justify-center mt-8">
                        <a href="#servicios" className="bg-[#8D5F2D] text-white font-bold py-3 px-8 rounded-full shadow hover:bg-[#7C4F28] transition-transform transform hover:scale-105">
                            Ver Nuestros Servicios
                        </a>
                    </div>
                </div>
            </section>
            
            <hr className="border-gray-200 my-0" />

            {/* Sección de Servicios usando el componente Card */}
            <section id="servicios" className="py-20 bg-[#f8f7f4]">
                <div className="relative z-10 text-center p-6 max-w-6xl w-full mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-gray-800">Nuestros Servicios Fundamentales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        
                        
                        <Card
                            titulo="Servicios Fúnebres"
                            imagen={funeralImg}
                            descripcionCorta="Planificación y realización de ceremonias funerarias con respeto y cuidado."
                            detalles="Ofrecemos servicios personalizados, decoración, música, transporte y asistencia completa durante todo el proceso."
                            etiqueta="Ver Paquetes"
                        />
                        <Card
                            titulo="Cremación"
                            imagen={cremacionImg}
                            descripcionCorta="Servicio de cremación seguro y digno, con seguimiento personalizado."
                            detalles="Brindamos urnas, recordatorios, asesoría legal y apoyo emocional durante todo el procedimiento."
                            etiqueta="Ver Urnas"
                        />
                        <Card
                            titulo="Acompañamiento"
                            imagen={acompanamientoImg}
                            descripcionCorta="Brindamos atencion durante todo el servicio funebre."
                            detalles="Nuestro equipo ayuda a las familias a organizar los documentos legales, seguros y todo lo necesario para la despedida."
                            etiqueta="Asistencia 24/7"
                        />
                    </div>
                </div>
            </section>

            <hr className="border-gray-200 my-0" />

            {/* Sección de Valores / Nuestra Promesa */}
            <section id="valores" className="py-20 bg-[#f8f7f4]">
                <div className="max-w-6xl mx-auto p-6">
                    <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Nuestro Compromiso de Paz</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <ValueCard 
                            icon={<Heart className="w-10 h-10" />}
                            title="Dignidad y Humanidad"
                            description="Tratamos a cada ser querido y familia con el respeto y la discreción que merecen."
                        />
                        <ValueCard 
                            icon={<ShieldCheck className="w-10 h-10" />}
                            title="Transparencia Total"
                            description="Garantizamos precios claros y sin costos ocultos, brindando tranquilidad en momentos difíciles."
                        />
                        <ValueCard 
                            icon={<Clock className="w-10 h-10" />}
                            title="Asistencia 24 Horas"
                            description="Estamos a tu disposición en cualquier momento del día o de la noche para apoyo inmediato."
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#f8f7f4] text-center p-6 text-gray-700 border-t border-gray-200">
                <p>© {new Date().getFullYear()} Funeraria Santo Sepulcro. Derechos Reservados.</p>
            </footer>
        </div>
    );
};

export default HomePage;


