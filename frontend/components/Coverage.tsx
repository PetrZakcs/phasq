'use client';

import { motion } from 'framer-motion';
import CountUp from './CountUp';

export default function Coverage() {
    return (
        <section className="relative py-28 md:py-40 border-t border-line overflow-hidden">
            <div
                className="absolute inset-0 bg-[url('/radar.png')] bg-center bg-cover opacity-[0.12] grayscale contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ground via-ground/95 to-ground" />

            <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">The blind spot</div>

                <h2 className="heading-xl text-[3.4rem] sm:text-[4.5rem] md:text-[6rem] text-ink mb-6">
                    <CountUp value={67} prefix="~" suffix="%" duration={1.4} />
                </h2>
                <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[56ch] mb-16">
                    That&apos;s the long-term average share of Earth covered by cloud at any given moment
                    (NASA/ISCCP). Every optical satellite image you&apos;ve ever looked at was taken through
                    the roughly one-third of sky that happened to be clear. C-band radar doesn&apos;t care
                    which third that is.
                </p>

                <div className="flex flex-col gap-8 max-w-[900px]">
                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-semibold text-ink-soft">Optical satellites</span>
                            <span className="font-data text-xs text-ink-faint">clear-sky windows only</span>
                        </div>
                        <div className="h-3 w-full bg-surface border border-line overflow-hidden">
                            <motion.div
                                className="h-full bg-line-strong"
                                initial={{ width: 0 }}
                                whileInView={{ width: '33%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="flex justify-between mb-2">
                            <span className="text-sm font-semibold text-ink">PhasQ (Sentinel-1 SAR)</span>
                            <span className="font-data text-xs text-accent">continuous, every 6 days</span>
                        </div>
                        <div className="h-3 w-full bg-surface border border-line overflow-hidden">
                            <motion.div
                                className="legend-strip h-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.25, ease: 'easeOut' }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
