'use client';

import { motion } from 'framer-motion';

const steps = [
    {
        num: '01',
        title: 'Define area of interest',
        desc: 'Select your coordinates. We continuously stream calibrated Sentinel-1 GRD data for your exact location — no hardware needed.',
        tag: 'Input',
    },
    {
        num: '02',
        title: 'Signal processing',
        desc: 'Physics-based pipeline converts raw SAR backscatter (σ⁰ dB) into moisture maps, subsidence fields, and structural health indices.',
        tag: 'Processing',
    },
    {
        num: '03',
        title: 'Intelligence delivered',
        desc: 'Reports, GeoTIFFs, and vector masks — ready for decision-making, not interpretation. Delivered weekly or on-demand.',
        tag: 'Output',
    },
];

export default function ProcessSteps() {
    return (
        <section id="process" className="py-24 md:py-32 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Process</div>

                <h2 className="heading-lg text-ink mb-16">
                    From satellite<br />to insight.
                </h2>

                <div className="flex flex-col">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, x: -16 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:grid md:grid-cols-[64px_1fr_140px] items-start md:items-center gap-6 md:gap-10 py-10 md:py-14 border-b border-line last:border-b-0"
                        >
                            <div className="font-data text-lg text-accent">{step.num}</div>

                            <div>
                                <h3 className="text-xl md:text-2xl font-bold text-ink mb-2">{step.title}</h3>
                                <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-[64ch]">
                                    {step.desc}
                                </p>
                            </div>

                            <div className="md:text-right w-full md:w-auto">
                                <span className="inline-block font-data text-[10px] tracking-widest uppercase text-ink-faint border border-line px-4 py-1.5">
                                    {step.tag}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
