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
        desc: 'Physics-based pipeline converts raw SAR backscatter (σ⁰ dB) into moisture maps, change-detection layers, and surface anomaly flags.',
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
        <section id="process" className="py-20 md:py-28 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Process</div>

                <h2 className="heading-lg text-ink mb-20">
                    From satellite<br />to insight.
                </h2>

                {/* A pipeline, not a list — three connected stages instead of stacked rows. */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-14">
                    <div className="hidden md:block absolute top-[22px] left-[calc(100%/6)] right-[calc(100%/6)] h-px bg-line" />

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.15, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative flex flex-col items-start"
                        >
                            <div className="relative z-10 w-11 h-11 rounded-full bg-surface border border-line-strong flex items-center justify-center mb-6">
                                <span className="font-data text-sm text-accent">{step.num}</span>
                            </div>

                            <span className="inline-block font-data text-[10px] tracking-widest uppercase text-ink-faint border border-line px-3 py-1 mb-4">
                                {step.tag}
                            </span>

                            <h3 className="text-xl md:text-2xl font-bold text-ink mb-3">{step.title}</h3>
                            <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-[46ch]">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
