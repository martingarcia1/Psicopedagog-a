import { useState } from 'react'
import { cn } from '../../../lib/utils'

export function ImageWithFallback({ src, alt, className, fallbackSrc = "https://placehold.co/600x400?text=No+Image" }) {
    const [error, setError] = useState(false)

    return (
        <img
            src={error ? fallbackSrc : src}
            alt={alt}
            className={cn("object-cover", className)}
            onError={() => setError(true)}
        />
    )
}
