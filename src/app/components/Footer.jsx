import { Brain, Heart, Mail, Sparkles, Star } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-purple-900 via-pink-900 to-indigo-900 text-white py-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 school-pattern-2 mix-blend-overlay" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
                                <Brain className="w-6 h-6 text-pink-300" />
                            </div>
                            <h3 className="text-2xl font-bold">PsicoPedagogía</h3>
                        </div>
                        <p className="text-purple-200 max-w-xs leading-relaxed">
                            Acompañando el aprendizaje con amor, compromiso y profesionalismo.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[<Heart key="1" />, <Star key="2" />, <Sparkles key="3" />].map((icon, i) => (
                                <div key={i} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all cursor-pointer">
                                    {icon}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-pink-500 rounded-full inline-block" /> Enlaces
                        </h4>
                        <ul className="space-y-3">
                            {['Inicio', 'Sobre Mí', 'Experiencia', 'Servicios', 'Contacto'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-purple-200 hover:text-white hover:translate-x-2 transition-transform inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Small */}
                    <div>
                        <h4 className="font-bold text-lg mb-6 flex items-center gap-2">
                            <span className="w-8 h-1 bg-yellow-500 rounded-full inline-block" /> Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-purple-200">
                                <Mail className="w-5 h-5 text-pink-400" />

                            </li>
                            <li className="flex items-center gap-3 text-purple-200">
                                <div className="px-2 py-1 bg-white/10 rounded text-xs font-bold">Lunes a Viernes</div>
                                9:00 - 18:00 hs
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 text-center text-sm text-purple-300">
                    <p>© {new Date().getFullYear()} PsicoPedagogía. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
