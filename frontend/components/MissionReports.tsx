'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Real run of the pipeline against the actual Sentinel-1 archive — not a
// simulation. Anyone can reproduce these numbers: same region, same date
// range, same product type, in the free Copernicus Browser.
const CASE = {
    id: 'CASE-01',
    title: 'Mild drought, read straight off the radar return',
    location: 'Andalusia, Spain — 37.5°N–38.5°N, 6.0°W–5.0°W',
    window: 'Jul 1–31, 2023',
    sensor: 'Sentinel-1, VV, GRD, 10 m — 18 scenes',
    image: '/vysocina_radar.png',
    stats: [
        { label: 'Mean σ⁰ (VV)', value: '−11.80 dB' },
        { label: 'Range', value: '−45.3 to +25.8 dB' },
        { label: 'Classification', value: 'Mild drought' },
        { label: 'Soil moisture index', value: '62%' },
    ],
};

export default function MissionReports() {
    return (
        <section id="missions" className="py-24 md:py-32 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Verified analysis</div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 mb-16">
                    <h2 className="heading-lg text-ink">
                        Real data.<br />Not a rendering.
                    </h2>
                    <p className="text-ink-soft max-w-[340px] leading-relaxed">
                        This is one completed run of the pipeline against the public Sentinel-1 archive.
                        The coordinates and date range are exact — pull the same scenes yourself in the
                        Copernicus Browser and you&apos;ll get the same numbers.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 bg-ground border border-line overflow-hidden"
                >
                    <div className="relative aspect-video md:aspect-auto overflow-hidden border-b md:border-b-0 md:border-r border-line">
                        <Image
                            src={CASE.image}
                            alt={CASE.title}
                            fill
                            className="object-cover grayscale contrast-[1.15]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-ground/70 to-transparent pointer-events-none" />
                        <div className="absolute top-5 left-5 font-data text-[10px] tracking-widest uppercase text-ink-soft bg-ground/80 px-3 py-1 backdrop-blur-sm">
                            {CASE.id}
                        </div>
                        <div className="absolute bottom-5 left-5 font-data text-[10px] text-ink-faint tracking-widest uppercase">
                            {CASE.sensor}
                        </div>
                    </div>

                    <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                        <div className="mb-10">
                            <div className="font-data text-[10px] tracking-widest uppercase text-ink-faint mb-4">
                                {CASE.location} · {CASE.window}
                            </div>
                            <h3 className="heading-lg text-[1.6rem] md:text-[2rem] text-ink leading-[1.1]">
                                {CASE.title}
                            </h3>
                        </div>

                        <div className="space-y-8">
                            <div className="legend-strip" />
                            <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6">
                                {CASE.stats.map((row) => (
                                    <div key={row.label}>
                                        <div className="font-data text-[10px] tracking-widest uppercase text-ink-faint mb-2">
                                            {row.label}
                                        </div>
                                        <div className="font-data text-lg md:text-xl text-ink tabular-nums">
                                            {row.value}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
