'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const SECTORS = [
    {
        id: 'AGR',
        title: 'Agriculture',
        desc: 'Detect root-zone drought stress 14 days before optical visibility. Drive variable-rate irrigation and harvest decisions with physics — not guesswork.',
        metrics: ['Root-zone moisture mapping', 'Harvest timing models', 'Yield loss prediction'],
        href: '/agriculture',
    },
    {
        id: 'DEF',
        title: 'Defense',
        desc: 'All-weather persistent surveillance. Detect vehicle displacement, infrastructure changes, and subsurface anomalies through cloud cover and concealment.',
        metrics: ['Change detection (24h)', 'Sub-meter displacement', 'Through-cover detection'],
        href: '/defense',
    },
    {
        id: 'SPC',
        title: 'Space',
        desc: 'Ground station calibration, atmospheric path-delay correction, and surface deformation monitoring for space operations and research programs.',
        metrics: ['Calibration support', 'Atm. path delay', 'Surface deformation'],
        href: '/space',
    },
    {
        id: 'FIN',
        title: 'Finance',
        desc: 'Independent verification of commodity yields for insurance underwriting, agricultural futures, and infrastructure asset valuation.',
        metrics: ['Yield verification', 'Crop insurance data', 'Asset tracking'],
        href: undefined,
    },
];

export default function Features() {
    return (
        <section id="technology" className="py-24 md:py-32 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Applications</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-16">
                    <h2 className="heading-lg text-ink">
                        One instrument.<br />Four problems.
                    </h2>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[440px]">
                        We didn&apos;t build four products. We built one physics engine that reads radar
                        backscatter, and pointed it at four places where that measurement happens to matter.
                    </p>
                </div>

                <div className="border-t border-line">
                    {SECTORS.map((s, i) => {
                        const RowContent = (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="flex flex-col md:grid md:grid-cols-[80px_1fr_1fr_auto] gap-6 md:gap-12 lg:gap-16 py-10 md:py-14 border-b border-line hover:bg-surface/60 transition-colors duration-300"
                            >
                                <div className="font-data text-[13px] text-ink-faint shrink-0">
                                    {s.id}
                                </div>

                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-ink mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-[46ch]">
                                        {s.desc}
                                    </p>
                                </div>

                                <div className="flex flex-col gap-3 py-1">
                                    {s.metrics.map((m) => (
                                        <div key={m} className="flex items-center gap-3">
                                            <div className="w-1 h-1 bg-ink-faint rounded-full shrink-0" />
                                            <span className="text-[13px] text-ink-faint">{m}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center">
                                    {s.href && (
                                        <span className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-ink-soft group-hover:text-ink whitespace-nowrap">
                                            Learn more <ArrowUpRight className="w-3.5 h-3.5" />
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        );

                        return s.href ? (
                            <Link key={s.id} href={s.href} className="group block">
                                {RowContent}
                            </Link>
                        ) : (
                            <div key={s.id}>{RowContent}</div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
