'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STAGES = [
    { tag: '01', label: 'What you\'d normally see', sub: 'Optical (Sentinel-2)' },
    { tag: '02', label: 'What we actually measure', sub: 'Radar backscatter, σ⁰ (Sentinel-1)' },
    { tag: '03', label: 'What gets classified', sub: 'Illustrative rendering — see the real numbers below' },
];

export default function PipelineReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });

    const opticalOpacity = useTransform(scrollYProgress, [0, 0.3, 0.42], [1, 1, 0]);
    const radarOpacity = useTransform(scrollYProgress, [0.3, 0.42, 0.62, 0.74], [0, 1, 1, 0]);
    const classifiedOpacity = useTransform(scrollYProgress, [0.62, 0.74, 1], [0, 1, 1]);

    const stageIndex = useTransform(scrollYProgress, (v) => (v < 0.36 ? 0 : v < 0.68 ? 1 : 2));
    // Hooks can't be called inside .map() — one useTransform per stage, fixed at the top level.
    const label0Opacity = useTransform(stageIndex, (v) => (v === 0 ? 1 : 0.3));
    const label1Opacity = useTransform(stageIndex, (v) => (v === 1 ? 1 : 0.3));
    const label2Opacity = useTransform(stageIndex, (v) => (v === 2 ? 1 : 0.3));
    const labelOpacities = [label0Opacity, label1Opacity, label2Opacity];

    return (
        <section ref={containerRef} className="relative" style={{ height: '300vh' }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-ground">
                {/* Layer 1 — optical */}
                <motion.div className="absolute inset-0" style={{ opacity: opticalOpacity }}>
                    <img src="/vysocina_optical.png" alt="" className="w-full h-full object-cover" />
                </motion.div>

                {/* Layer 2 — radar */}
                <motion.div className="absolute inset-0" style={{ opacity: radarOpacity }}>
                    <img src="/vysocina_radar_clean.jpg" alt="" className="w-full h-full object-cover" />
                </motion.div>

                {/* Layer 3 — same radar frame, illustrative classification tint */}
                <motion.div className="absolute inset-0" style={{ opacity: classifiedOpacity }}>
                    <img src="/vysocina_radar_clean.jpg" alt="" className="w-full h-full object-cover" />
                    <div
                        className="absolute inset-0 opacity-80"
                        style={{
                            mixBlendMode: 'hard-light',
                            background: 'linear-gradient(115deg, var(--color-wet) 0%, var(--color-normal) 25%, var(--color-dry) 50%, var(--color-verydry) 75%, var(--color-extreme) 100%)',
                        }}
                    />
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-t from-ground via-ground/30 to-ground/60 pointer-events-none" />

                {/* Copy */}
                <div className="relative z-10 h-full w-full max-w-[1400px] mx-auto px-6 md:px-10 flex flex-col justify-end pb-20 md:pb-28">
                    <div className="section-label">From satellite to insight, in real frames</div>
                    <div className="flex flex-col gap-3">
                        {STAGES.map((s, i) => (
                            <motion.div
                                key={s.tag}
                                className="flex items-baseline gap-4"
                                style={{ opacity: labelOpacities[i] }}
                            >
                                <span className="font-data text-[13px] text-accent shrink-0">{s.tag}</span>
                                <h3 className="heading-md text-[1.5rem] md:text-[2.2rem] text-ink">{s.label}</h3>
                                <span className="font-data text-[10px] tracking-widest uppercase text-ink-faint hidden md:inline">
                                    {s.sub}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
