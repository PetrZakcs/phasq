'use client';

import { motion } from 'framer-motion';

export default function TrustLogos() {
    // What the analysis is actually built on — public, verifiable infrastructure.
    // Not a claim of partnership or endorsement, just the supply chain.
    const stack = [
        { name: 'Sentinel-1', label: 'C-BAND SAR' },
        { name: 'Sentinel-2', label: 'OPTICAL REFERENCE' },
        { name: 'Copernicus Data Space', label: 'DATA ACCESS' },
        { name: 'Google Earth Engine', label: 'COMPUTE' },
    ];

    return (
        <section className="py-10 border-b border-line bg-ground/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center eyebrow mb-8"
                >
                    Built on open Earth observation infrastructure — not proprietary claims
                </motion.p>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-4 items-baseline">
                    {stack.map((s, i) => (
                        <motion.div
                            key={s.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            whileHover={{ y: -2 }}
                            className="flex flex-col items-center gap-1 cursor-default"
                        >
                            <span className="text-[15px] font-semibold text-ink-soft tracking-tight transition-colors duration-300 hover:text-ink">
                                {s.name}
                            </span>
                            <span className="font-data text-[9px] tracking-[0.15em] text-ink-faint">
                                {s.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
