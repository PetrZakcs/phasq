'use client';

import { motion } from 'framer-motion';

/** Homepage-only: honest early-access framing, no theater. */
export default function AgricultureTeaser() {
    return (
        <section className="py-24 md:py-32 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Early access — opening Q2 2026</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <h2 className="heading-lg text-ink mb-6">
                            Agriculture<br />intelligence.
                        </h2>
                        <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-10 max-w-[480px]">
                            Crop health, soil moisture, and harvest readiness via Sentinel-1 SAR — moving from a
                            validated single-region pipeline (see the verified analysis above) to full field-scale
                            coverage. We&apos;re building this in the open, not behind a locked door.
                        </p>
                        <a href="#waitlist" className="btn-outline w-fit">
                            Join the pilot list ↗
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 1.02 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="relative aspect-video border border-line overflow-hidden bg-ground flex items-center justify-center"
                    >
                        <img
                            src="/radar.png"
                            alt="Illustrative backscatter visualization"
                            className="ambient-zoom w-full h-full object-cover grayscale opacity-40"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-ground/50 backdrop-blur-sm">
                            <div className="eyebrow text-accent mb-2">Field-scale coverage</div>
                            <p className="text-ink-soft text-sm max-w-[32ch]">
                                Currently one validated region (see the verified analysis above). Expanding through the
                                pilot program.
                            </p>
                        </div>
                        <span className="absolute bottom-3 right-4 font-data text-[9px] tracking-[0.15em] uppercase text-ink/40">
                            Illustrative — not a live field export
                        </span>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
