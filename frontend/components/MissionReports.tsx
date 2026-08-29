'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CASES } from '@/lib/cases';
import SignalReadout from './SignalReadout';
import CountUp from './CountUp';

export default function MissionReports() {
    const router = useRouter();
    const [leaving, setLeaving] = useState(false);
    const item = CASES[0];
    const href = `/case-studies/${item.slug}`;

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (leaving) return;
        setLeaving(true);
        window.setTimeout(() => router.push(href), 420);
    };

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

                <motion.a
                    href={href}
                    onClick={handleClick}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    animate={leaving ? { opacity: 0, scale: 1.03 } : { opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={leaving ? { duration: 0.4, ease: 'easeIn' } : { duration: 0.5 }}
                    className="group block bg-ground border border-line hover:border-line-strong transition-colors cursor-pointer"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="relative overflow-hidden border-b md:border-b-0 md:border-r border-line p-8 md:p-10 flex flex-col justify-between bg-surface/40">
                            <div className="font-data text-[10px] tracking-widest uppercase text-ink-faint mb-6">
                                {item.id} — Signal readout
                            </div>
                            <SignalReadout seed={item.slug} minDb={item.minDb} maxDb={item.maxDb} meanDb={item.meanDb} />
                            <div className="legend-strip mt-6" />
                        </div>

                        <div className="p-8 md:p-12 lg:p-14 flex flex-col justify-between">
                            <div className="mb-10">
                                <div className="font-data text-[10px] tracking-widest uppercase text-ink-faint mb-4">
                                    {item.location} · {item.window}
                                </div>
                                <h3 className="heading-lg text-[1.6rem] md:text-[2rem] text-ink leading-[1.1] mb-4">
                                    {item.title}
                                </h3>
                                <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-[46ch]">
                                    {item.dek}
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="grid grid-cols-2 gap-x-6 gap-y-6 border-t border-line pt-6">
                                    {item.stats.map((row) => (
                                        <div key={row.label}>
                                            <div className="font-data text-[10px] tracking-widest uppercase text-ink-faint mb-2">
                                                {row.label}
                                            </div>
                                            <div className="font-data text-lg md:text-xl text-ink tabular-nums">
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

                                <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft group-hover:text-ink transition-colors">
                                    Full case &amp; how to verify it <ArrowUpRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.a>
            </div>
        </section>
    );
}
