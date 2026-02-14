import { Brain, Baby, BookOpen, Users, Puzzle, Sparkles, ArrowRight, Zap } from 'lucide-react'

export default function Services() {
    const services = [
        {
            title: "Integración Escolar",
            icon: <GraduationCapIcon className="w-8 h-8 text-white" />,
            desc: "Acompañamiento en el aula para garantizar la inclusión y el aprendizaje significativo.",
            emoji: "🎓",
            color: "from-blue-400 to-blue-600"
        },
        {
            title: "Estimulación Temprana",
            icon: <Baby className="w-8 h-8 text-white" />,
            desc: "Potenciando el desarrollo cognitivo y motriz desde los primeros años de vida.",
            emoji: "👶",
            color: "from-pink-400 to-pink-600"
        },
        {
            title: "Dificultades de Aprendizaje",
            icon: <BookOpen className="w-8 h-8 text-white" />,
            desc: "Estrategias personalizadas para dislexia, discalculia y otros desafíos.",
            emoji: "📚",
            color: "from-purple-400 to-purple-600"
        },
        {
            title: "Orientación Familiar",
            icon: <Users className="w-8 h-8 text-white" />,
            desc: "Trabajo conjunto con la familia para crear un entorno de apoyo.",
            emoji: "👨👩👧👦",
            color: "from-green-400 to-green-600"
        },
        {
            title: "Apoyo Pedagógico",
            icon: <Puzzle className="w-8 h-8 text-white" />,
            desc: "Refuerzo a escolar y técnicas de estudio para mejorar el rendimiento.",
            emoji: "🧩",
            color: "from-orange-400 to-orange-600"
        },
        {
            title: "Talleres y Capacitaciones",
            icon: <Zap className="w-8 h-8 text-white" />,
            desc: "Espacios de formación para docentes y padres.",
            emoji: "✨",
            color: "from-yellow-400 to-yellow-600"
        }
    ]

    return (
        <section id="services" className="py-20 ruled-paper bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold bg-blue-100 px-4 py-1 rounded-full text-sm tracking-wide">
                        SERVICIOS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
                        ¿Cómo puedo <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">ayudarte?</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <div key={idx} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden">
                            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-500`} />

                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {service.desc}
                            </p>

                            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-gray-800 transition-colors cursor-pointer">
                                Leer más <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                            </div>

                            <div className="absolute bottom-4 right-4 text-4xl opacity-20 group-hover:opacity-100 group-hover:rotate-12 transition-all duration-300">
                                {service.emoji}
                            </div>

                            <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`} />
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-bold shadow-xl hover:bg-gray-800 transition-transform hover:scale-105">
                        <Sparkles className="w-5 h-5 text-yellow-400" />
                        Solicitar Información
                    </a>
                </div>
            </div>
        </section>
    )
}

function GraduationCapIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    )
}
