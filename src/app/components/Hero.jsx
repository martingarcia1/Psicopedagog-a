import { ArrowRight, Star, Heart, Sparkles, BookOpen } from 'lucide-react'
import { ImageWithFallback } from './figma/ImageWithFallback'

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen pt-20 flex items-center overflow-hidden bg-gradient-to-b from-purple-50 to-white">
            {/* Background Decor */}
            <div className="absolute inset-0 school-pattern-1 opacity-30" />
            <div className="absolute top-20 left-10 animate-float delay-100 text-4xl">✏️</div>
            <div className="absolute bottom-20 right-10 animate-float delay-700 text-4xl">🎨</div>
            <div className="absolute top-1/2 right-20 animate-wiggle text-4xl">📚</div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md text-purple-600 font-semibold animate-fade-in-up">
                            <Sparkles className="w-5 h-5 text-yellow-500" />
                            <span>Psicopedagoga</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-800">
                            Creando puentes para el <span className="text-purple-600 underline decoration-wavy decoration-yellow-400">aprendizaje</span>
                        </h1>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Acompaño procesos de aprendizaje con amor, paciencia y estrategias personalizadas para cada niño y niña.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a href="#contact" className="px-8 py-3 bg-purple-600 text-white rounded-full font-bold shadow-lg hover:bg-purple-700 transition-transform hover:scale-105 flex items-center gap-2">
                                Agendar Cita <ArrowRight className="w-5 h-5" />
                            </a>
                            <a href="#about" className="px-8 py-3 bg-white text-purple-600 border-2 border-purple-100 rounded-full font-bold hover:border-purple-300 transition-colors">
                                Conocer más
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-4">
                            <div className="bg-white p-4 rounded-xl shadow-school border-l-4 border-purple-500 flex items-center gap-3">
                                <div className="p-2 bg-purple-100 rounded-lg">
                                    <BookOpen className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <p className="font-bold text-2xl text-gray-800">4+</p>
                                    <p className="text-xs text-gray-500">Años de formación</p>
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-xl shadow-school border-l-4 border-pink-500 flex items-center gap-3">
                                <div className="p-2 bg-pink-100 rounded-lg">
                                    <Heart className="w-6 h-6 text-pink-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-2xl text-gray-800">2+</p>
                                    <p className="text-xs text-gray-500">Años de experiencia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022"
                                alt="Learning"
                                className="rounded-3xl border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 w-full object-cover h-[500px]"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce-slow hidden md:block">
                                <div className="flex items-center gap-2">
                                    <div className="bg-yellow-100 p-2 rounded-full">
                                        <Star className="w-6 h-6 text-yellow-500 fill-yellow-500" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-800">Enfoque Lúdico</p>
                                        <p className="text-xs text-gray-500">Aprender jugando</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative blob behind */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-purple-200 to-pink-200 rounded-full blur-3xl -z-10 opacity-60" />
                    </div>
                </div>
            </div>
        </section>
    )
}
