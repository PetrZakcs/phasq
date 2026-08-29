'use client';

import { useEffect, useState } from 'react';

interface BgVideoProps {
    desktopSrc: string;
    mobileSrc: string;
    poster: string;
    className?: string;
}

/**
 * Full-bleed looping background video. Falls back to the static poster
 * frame when the viewer has prefers-reduced-motion set, and serves a
 * lighter file to narrow viewports via a media-query <source>.
 */
export default function BgVideo({ desktopSrc, mobileSrc, poster, className = '' }: BgVideoProps) {
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setShowVideo(!reduced);
    }, []);

    if (!showVideo) {
        return (
            <div
                className={`bg-center bg-cover ${className}`}
                style={{ backgroundImage: `url('${poster}')` }}
            />
        );
    }

    return (
        <video autoPlay muted loop playsInline poster={poster} className={`object-cover ${className}`}>
            <source src={mobileSrc} media="(max-width: 768px)" type="video/mp4" />
            <source src={desktopSrc} type="video/mp4" />
        </video>
    );
}
