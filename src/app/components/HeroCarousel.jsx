import { useEffect, useState } from 'react'
import { cn } from '../../lib/utils'
import { ImageWithFallback } from './figma/ImageWithFallback'
import psicope from '../../assets/Psicope.jpg'
import image1 from '../../assets/carru1.jpeg'
import image2 from '../../assets/carru2.jpeg'
import image3 from '../../assets/carru3.jpeg'
import image4 from '../../assets/carru4.jpeg'


// Imágenes del carrusel. Para agregar una foto: importala desde src/assets
// (como image1 más abajo) y sumala a este arreglo. `position` define qué
// parte de la foto queda centrada cuando se recorta para llenar el marco.
const slides = [
    { src: psicope, alt: 'Melina Gorostiaga, psicopedagoga', position: 'object-[50%_18%]' },
    { src: image4, alt: 'Sala de estimulación y juego', position: 'object-[50%_40%]' },
    { src: image1, alt: 'Espacio de trabajo para las sesiones', position: 'object-[50%_35%]' },
    { src: image2, alt: 'Actividad de dibujo en sesión', position: 'object-[50%_30%]' },
    { src: image3, alt: 'Juego de cartas en una sesión', position: 'object-[50%_35%]' },
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
                        'absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out',
                        slide.position || 'object-center',
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
