import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { ImageWithFallback } from './figma/ImageWithFallback'
import psicope from '../../assets/Psicope.jpg'

// Imágenes del carrusel. Reemplazá las de Unsplash por fotos propias
// importándolas desde src/assets como se hace con Psicope.jpg.
const slides = [
    { src: psicope, alt: 'Melina Gorostiaga, psicopedagoga' },
    { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600', alt: 'Niños aprendiendo en el aula' },
    { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=1600', alt: 'Materiales didácticos y juegos' },
]

const INTERVAL_MS = 4500
const FADE_MS = 1200

export default function HeroCarousel({ className }) {
    const [current, setCurrent] = useState(0)
    const [paused, setPaused] = useState(false)

    useEffect(() => {
        if (paused || slides.length < 2) return
        const timer = setInterval(() => {
            setCurrent((i) => (i + 1) % slides.length)
        }, INTERVAL_MS)
        return () => clearInterval(timer)
    }, [paused])

    return (
        <div
            className={cn('relative w-full h-full', className)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {slides.map((slide, i) => (
                <ImageWithFallback
                    key={slide.src}
                    src={slide.src}
                    alt={slide.alt}
                    className={cn(
                        'absolute inset-0 w-full h-full object-cover object-top md:object-contain md:object-right transition-opacity ease-in-out',
                        i === current ? 'opacity-100' : 'opacity-0'
                    )}
                    style={{ transitionDuration: `${FADE_MS}ms` }}
                />
            ))}

            {/* Indicadores */}
            {slides.length > 1 && (
                <div className="absolute bottom-7 right-5 md:bottom-5 md:right-8 flex items-center gap-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            aria-label={`Ir a la imagen ${i + 1}`}
                            onClick={() => setCurrent(i)}
                            className={cn(
                                'h-2.5 rounded-full transition-all duration-300 bg-white/70 hover:bg-white',
                                i === current ? 'w-7 bg-white' : 'w-2.5'
                            )}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
