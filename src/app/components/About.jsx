import { Heart, Star, Sparkles, Quote } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import psicope from '../../assets/Psicope.jpg'

export default function About() {
    const cards = [
        {
            title: "Mi Formación",
            icon: <Star className="w-5 h-5 text-white" />,
            text: "Psicopedagoga con especialización en aprendizaje.",
            color: "bg-yellow-400",
            rotate: "rotate-1"
        },
        {
            title: "Mi Enfoque",
            icon: <Sparkles className="w-5 h-5 text-white" />,
            text: "Mirada integral: cognitiva, emocional y social.",
            color: "bg-purple-400",
            rotate: "-rotate-1"
        },
        {
            title: "Mi Compromiso",
            icon: <Heart className="w-5 h-5 text-white" />,
            text: "Herramientas prácticas para niños, familias y escuelas.",
            color: "bg-pink-400",
            rotate: "rotate-2"
        }
    ]

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-stone-50">
            {/* Background Elements */}
            <div className="absolute inset-0 paper-texture opacity-50" />
            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-dashed border-purple-200 rounded-full animate-spin-slow opacity-50" />
            <div className="absolute bottom-10 left-10 text-9xl opacity-5 select-none font-handwriting transform -rotate-12">
                HOLA!
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Image Area */}
                    <div className="relative group">
                        {/* Tape Element */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 shadow-sm transform -rotate-2 z-20 backdrop-blur-sm sticky-tape" />

                        <div className="relative bg-white p-4 pb-16 shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out border border-gray-100">
                            <ImageWithFallback
                                src={psicope}
                                alt="Psicopedagoga Profesional"
                                className="w-full h-[400px] object-cover filter sepia-[.15]"
                            />
                            <div className="absolute bottom-4 left-0 w-full text-center">
                                <p className="font-handwriting text-2xl text-gray-600 transform -rotate-1">
                                    Psic.Melina Gorostiaga
                                </p>
                            </div>

                            {/* Decorative Stickers */}
                            <div className="absolute -bottom-8 -right-8 text-6xl animate-bounce-slow filter drop-shadow-lg">
                                🌟
                            </div>
                            <div className="absolute -top-4 -left-6 text-5xl transform -rotate-12 filter drop-shadow-md">
                                📎
                            </div>
                        </div>

                        {/* Blob behind image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-purple-100 rounded-full blur-3xl -z-10 mix-blend-multiply" />
                    </div>

                    {/* Right Column: Content */}
                    <div className="space-y-8">
                        <div className="relative">
                            <span className="inline-block bg-pink-100 text-pink-600 px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-4 border border-pink-200 shadow-sm">
                                SOBRE MÍ
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                Más que una profesión, <br />
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-purple-600">una vocación</span>
                                    <svg className="absolute bottom-1 left-0 w-full h-3 text-yellow-300 -z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                            </h2>
                        </div>

                        <div className="notebook-paper p-10 rounded-lg shadow-inner bg-yellow-50 transform rotate-1 border border-yellow-100">
                            <p className="text-gray-900 text-lg leading-relaxed font-medium">
                                <Quote className="inline w-8 h-8 text-purple-200 mr-2 -mt-4 opacity-50" />
                                Creo firmemente que cada niño tiene un potencial único esperando ser descubierto. Mi trabajo es construir los puentes necesarios para que ese aprendizaje suceda de manera natural, feliz y significativa.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            {cards.map((card, idx) => (
                                <div
                                    key={idx}
                                    className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-md border-l-8 ${card.color} transform hover:translate-x-2 transition-transform ${card.rotate}`}
                                >
                                    <div className={`p-3 rounded-full ${card.color} shadow-sm`}>
                                        {card.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800">{card.title}</h3>
                                        <p className="text-sm text-gray-600">{card.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
