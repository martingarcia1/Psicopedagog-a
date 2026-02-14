import { Briefcase, Award, GraduationCap, Heart, Sparkles } from 'lucide-react'

export default function Experience() {
    const experiences = [
        {
            role: "Maestra Integradora",
            place: "Institución Educativa",
            period: "2 Años",
            icon: <Briefcase className="w-5 h-5 text-white" />,
            color: "bg-blue-500",
            emoji: "👩🏫"
        },
        {
            role: "Prácticas Profesionales",
            place: "Casa de h",
            period: "1 Año",
            icon: <Heart className="w-5 h-5 text-white" />,
            color: "bg-pink-500",
            emoji: "🏠"
        },
        {
            role: "Espec. Estimulación Temprana",
            place: "Certificación",
            period: "Completado",
            icon: <GraduationCap className="w-5 h-5 text-white" />,
            color: "bg-purple-500",
            emoji: "🎓"
        },
        {
            role: "Estudiante",
            place: "LAPEN Argentina",
            period: "Completado",
            icon: <Award className="w-5 h-5 text-white" />,
            color: "bg-orange-400",
            emoji: "🇦🇷"
        }
    ]

    return (
        <section id="experience" className="py-20 school-pattern-2 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-pink-600 font-bold bg-pink-100 px-4 py-1 rounded-full text-sm tracking-wide">
                        TRAYECTORIA
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mt-4">
                        Mi Camino Profesional
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.map((exp, idx) => (
                        <div key={idx} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden border border-gray-100">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-6xl select-none grayscale group-hover:grayscale-0 transition-all">
                                {exp.emoji}
                            </div>

                            <div className={`${exp.color} w-12 h-12 rounded-xl flex items-center justify-center shadow-lg mb-4 rotate-3 group-hover:rotate-0 transition-transform`}>
                                {exp.icon}
                            </div>

                            <h3 className="text-xl font-bold text-gray-800 mb-1">{exp.role}</h3>
                            <p className="text-purple-600 font-medium mb-4">{exp.place}</p>

                            <div className="inline-block bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                                {exp.period}
                            </div>

                            <div className={`absolute bottom-0 left-0 w-full h-1 ${exp.color.replace('bg-', 'bg-gradient-to-r from-white via-')} to-white opacity-50`} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
