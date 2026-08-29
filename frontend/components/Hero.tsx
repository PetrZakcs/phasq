'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [showVideo, setShowVideo] = useState(false);

    useEffect(() => {
        // Respect prefers-reduced-motion: fall back to the static poster frame.
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        setShowVideo(!reduced);
    }, []);

    return (
        <section className="relative min-h-[100svh] w-full flex flex-col justify-end bg-ground overflow-hidden py-24 md:py-32 lg:py-40">
            {/* Full-bleed background — real aerial farmland footage, muted for legibility */}
            <div className="absolute inset-0">
                {showVideo ? (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/hero-farm-poster.jpg"
                        className="w-full h-full object-cover saturate-[0.65] contrast-105"
                    >
                        <source src="/hero-farm-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
                        <source src="/hero-farm-desktop.mp4" type="video/mp4" />
                    </video>
                ) : (
                    <div
                        className="w-full h-full bg-[url('/hero-farm-poster.jpg')] bg-center bg-cover saturate-[0.65] contrast-105"
                    />
                )}
                <span className="absolute bottom-4 right-5 font-data text-[9px] tracking-[0.15em] uppercase text-ink/40">
                    Aerial farmland — illustrative, not PhasQ output
                </span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-ground/55 via-ground/75 to-ground" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-7 flex items-center gap-3"
                >
                    <span className="eyebrow">Radar phase intelligence</span>
                    <span className="w-8 h-px bg-line-strong" />
                    <span className="eyebrow text-ink-faint">Sentinel-1 C-band SAR</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="heading-xl text-ink mb-8 max-w-[18ch]"
                >
                    Sees the drought<br />
                    before <span className="text-accent">the crop does.</span>
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16"
                >
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[480px]">
                        We measure the radar backscatter of the soil itself — the physical quantity behind
                        moisture, not a satellite photo of a plant that already turned brown. Clouds, smoke and
                        night don&apos;t block it.
                    </p>

                    <div className="flex flex-wrap gap-3 shrink-0">
                        <a href="#demo" className="btn-primary w-full sm:w-auto text-center">
                            See real data ↗
                        </a>
                        <a href="#process" className="btn-outline w-full sm:w-auto text-center">
                            How it works
                        </a>
                    </div>
                </motion.div>

                {/* Instrument legend + stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.45 }}
                >
                    <div className="legend-strip mb-1" />
                    <div className="flex justify-between eyebrow text-[9px] mb-10">
                        <span>Wet</span>
                        <span>Normal</span>
                        <span>Dry</span>
                        <span>Very dry</span>
                        <span>Extreme</span>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 pt-8 border-t border-line">
                        {[
                            { value: '6 DAYS', label: 'Revisit cycle, Sentinel-1 pair' },
                            { value: '14+ DAYS', label: 'Earlier than visible crop stress' },
                            { value: '100%', label: 'Cloud & night penetration' },
                            { value: 'C-BAND', label: '5.4 GHz — dielectric-sensitive' },
                        ].map((stat, i) => (
                            <div key={i} className={i > 0 ? 'md:pl-6 md:border-l md:border-line' : ''}>
                                <div className="stat-number">{stat.value}</div>
                                <div className="text-ink-faint text-[13px] mt-1 max-w-[18ch]">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
