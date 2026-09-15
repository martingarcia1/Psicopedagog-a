import { ArrowRight, Heart, BookOpen, CalendarCheck, Sparkles } from 'lucide-react'
import HeroCarousel from './HeroCarousel'

const phoneNumber = "5493813040994"
const message = "Hola, me gustaría consultar por un turno."
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center overflow-hidden bg-gradient-to-b from-purple-50 to-white">
            {/* Background Decor */}
            <div className="absolute inset-0 school-pattern-1 opacity-30" />
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] bg-pink-200/50 rounded-full blur-3xl" />
            <div className="absolute top-32 left-6 animate-float delay-100 text-4xl hidden md:block">✏️</div>
            <div className="absolute bottom-16 right-8 animate-float delay-700 text-4xl hidden md:block">🎨</div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="relative">

                    {/* Tarjeta principal con la foto */}
                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[460px] md:h-[600px] bg-gradient-to-r from-purple-200 via-purple-100 to-[#e9e7e6]">
                        {/* Carrusel con fundido entre imágenes */}
                        <HeroCarousel />
                        {/* Fundido del borde izquierdo de la foto con el fondo */}
                        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-purple-100 via-purple-100/60 to-transparent hidden md:block pointer-events-none" />
                        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-transparent pointer-events-none" />

                        {/* Botón de agendar sobre la imagen */}
                        <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute left-5 bottom-5 md:bottom-auto md:left-8 md:top-[22rem] inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-700 rounded-full font-bold shadow-xl hover:bg-purple-600 hover:text-white transition-all hover:scale-105"
                        >
                            <CalendarCheck className="w-5 h-5" />
                            Agendar turno
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Bloque de título, recortado sobre la esquina superior izquierda */}
                    {/* cursiva   */}
                    <div className="absolute -top-px -left-px max-w-[92%] md:max-w-2xl bg-purple-50 rounded-br-[2.5rem] pr-6 md:pr-2 pb-4 md:pb-4 ">
                        <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-md text-purple-600 text-sm font-semibold mb-4">
                            <Sparkles className="w-2 h-2 text-yellow-500" />
                            <span>M.P. 845</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl md:text-2xl font-bold leading-tight text-gray-800 italic" style={{ fontFamily: "'Edu NSW ACT Cursive', cursive" }}>
                            Melina Gorostiaga
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold leading-tight text-purple-600 italic" style={{ fontFamily: "'Cedarville Cursive', cursive" }}>
                            Psicopedagoga
                        </h2>
                    </div>

                    {/* Tarjeta chica arriba a la derecha */}
                    {/* <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-4 py-3 md:px-5 md:py-4 max-w-[200px] hidden sm:block">
                        <p className="text-sm font-bold text-gray-800 leading-snug">
                            Turnos disponibles
                        </p>
                        <p className="text-xs text-gray-500 mb-2">
                            para niños, niñas y adolescentes
                        </p>
                        <div className="flex items-center gap-1.5">
                            <span className="w-7 h-7 rounded-full bg-yellow-100 flex items-center justify-center text-sm">🧒</span>
                            <span className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-sm">👧</span>
                            <span className="w-7 h-7 rounded-full bg-purple-100 flex items-center justify-center text-sm">🧑</span>
                        </div>
                    </div> */}

                    {/* Píldoras con datos sobre el borde inferior */}
                    {/* <div className="mt-4 md:mt-0 md:absolute md:-bottom-6 md:right-8 flex flex-wrap justify-center md:justify-end gap-3">
                        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg">
                            <div className="p-1.5 bg-purple-100 rounded-full">
                                <BookOpen className="w-4 h-4 text-purple-600" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">4+ años de formación</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full shadow-lg">
                            <div className="p-1.5 bg-pink-100 rounded-full">
                                <Heart className="w-4 h-4 text-pink-500" />
                            </div>
                            <span className="text-sm font-semibold text-gray-700">2+ años de experiencia</span>
                        </div>
                        <a href="#about" className="flex items-center gap-2 bg-purple-600 text-white px-5 py-2.5 rounded-full shadow-lg font-semibold text-sm hover:bg-purple-700 transition-colors">
                            Conocer más <ArrowRight className="w-4 h-4" />
                        </a>
                    </div> */}
                </div>
            </div>
        </section>
    )
}
