'use client';

import { motion } from 'framer-motion';

const BENEFITS = [
    {
        num: '01',
        title: 'Physics-first',
        desc: 'We analyze raw Sentinel-1 radar backscatter — not optical imagery. Dielectric constant measurements from orbit, grounded in the radar equation, not a learned correlation.',
    },
    {
        num: '02',
        title: 'All-weather',
        desc: 'C-band SAR penetrates clouds, smoke, and total darkness. Intelligence when optical satellites are completely blind.',
    },
    {
        num: '03',
        title: 'Zero-friction',
        desc: 'No GIS expertise required. Weekly reports, export-ready GeoTIFFs, and decision-ready maps delivered to your dashboard.',
    },
];

export default function Benefits() {
    return (
        <section className="py-24 md:py-32 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Advantage</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mb-16">
                    <h2 className="heading-lg text-ink">
                        The physics<br /><span className="text-accent">advantage.</span>
                    </h2>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed pt-2">
                        Optical NDVI indices are lagging indicators — they only show stress after visible
                        damage occurs. SAR radar detects subsurface moisture changes two weeks earlier.
                        The difference between reacting and preventing.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line">
                    {BENEFITS.map((b, i) => (
                        <motion.div
                            key={b.num}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.12, duration: 0.6 }}
                            viewport={{ once: true }}
                            className={`py-12 md:py-14 ${i < 2 ? 'md:border-r md:border-line md:pr-10' : ''} ${
                                i > 0 ? 'md:pl-10' : ''
                            } border-b md:border-b-0 border-line last:border-b-0`}
                        >
                            <div className="font-data text-[13px] text-accent mb-6">{b.num}</div>
                            <h3 className="text-xl md:text-2xl font-bold text-ink mb-4">{b.title}</h3>
                            <p className="text-ink-soft text-sm md:text-base leading-relaxed">{b.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
