'use client';

import { motion } from 'framer-motion';
import type { CaseStudy } from '@/lib/cases';
import SignalReadout from './SignalReadout';
import CountUp from './CountUp';

export default function CaseHero({ item }: { item: CaseStudy }) {
    return (
        <section className="relative pt-32 md:pt-44 pb-20 md:pb-28 bg-ground border-b border-line overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-3 mb-7"
                >
                    <span className="font-data text-[13px] text-accent">{item.id}</span>
                    <span className="w-8 h-px bg-line-strong" />
                    <span className="eyebrow text-ink-faint">Verified analysis</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.08 }}
                    className="heading-xl text-[2.6rem] sm:text-[3.6rem] md:text-[5rem] text-ink mb-6 max-w-[20ch]"
                >
                    {item.title}
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.18 }}
                    className="font-data text-[11px] tracking-widest uppercase text-ink-faint mb-14"
                >
                    {item.location} · {item.bbox} · {item.window} · {item.sensor}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-surface border border-line p-6 md:p-10"
                >
                    <SignalReadout seed={item.slug} minDb={item.minDb} maxDb={item.maxDb} meanDb={item.meanDb} />
                    <div className="legend-strip mt-8 mb-1" />
                    <div className="flex justify-between eyebrow text-[9px] mb-8">
                        <span>Wet</span>
                        <span>Normal</span>
                        <span>Dry</span>
                        <span>Very dry</span>
                        <span>Extreme</span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 pt-8 border-t border-line">
                        {item.stats.map((row) => (
                            <div key={row.label}>
                                <div className="font-data text-[10px] tracking-widest uppercase text-ink-faint mb-2">
                                    {row.label}
                                </div>
                                <div className="font-data text-xl md:text-2xl text-ink tabular-nums">
                                    {row.numeric ? (
                                        <CountUp
                                            value={row.numeric.value}
                                            decimals={row.numeric.decimals}
                                            prefix={row.numeric.prefix}
                                            suffix={row.numeric.suffix}
                                        />
                                    ) : (
                                        row.value
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
