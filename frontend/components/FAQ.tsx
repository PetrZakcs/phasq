'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
    {
        q: 'How does PhasQ differ from NDVI optical imagery?',
        a: 'NDVI is a lagging indicator — it only reveals stress after chlorophyll loss occurs visibly. PhasQ uses C-band SAR to measure dielectric constant changes in the root zone, detecting water stress 14 days before any visual signals appear. The difference is prevention vs. reaction.',
    },
    {
        q: 'What makes the physics-based approach unique?',
        a: 'Competitors apply pattern-matching ML to optical images. We solve the radar equation — modeling backscatter physics (σ⁰) to derive soil moisture and structural properties from first principles. Results are grounded in electromagnetics, not learned correlations.',
    },
    {
        q: 'Can radar detect assets under concealment?',
        a: 'Yes. Metal surfaces have near-perfect radar reflectivity (corner reflection). Radar energy penetrates lightweight foliage, camouflage nets, and thin cover — returning a distinct double-bounce signature from hard surfaces that is difficult to mask.',
    },
    {
        q: 'Do I need hardware or ground sensors?',
        a: 'Zero hardware. The Sentinel-1 constellation revisits every coordinate on Earth every 6–12 days. We process the SAR archive in cloud infrastructure and deliver ready-to-use intelligence — no installation, no calibration.',
    },
    {
        q: 'How is data kept secure?',
        a: 'Area-of-interest coordinates and analysis outputs are encrypted end-to-end. We do not share data with third parties or train external models on your inputs. Defense and government clients can request air-gapped, on-premise deployment.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 md:py-32 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">FAQ</div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
                    <h2 className="heading-lg text-[2.6rem] md:text-[3.4rem] text-ink md:sticky md:top-32">
                        Questions<br />&amp; answers.
                    </h2>

                    <div className="border-t border-line">
                        {FAQS.map((faq, i) => (
                            <div
                                key={faq.q}
                                className="border-b border-line cursor-pointer"
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                            >
                                <div className="flex justify-between items-start gap-5 py-7">
                                    <div className="flex gap-5 md:gap-8 items-start">
                                        <span className="font-data text-[11px] text-accent pt-1.5 shrink-0">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                        <h3 className={`text-base md:text-lg font-semibold transition-colors duration-200 ${
                                            openIndex === i ? 'text-ink' : 'text-ink-soft'
                                        }`}>
                                            {faq.q}
                                        </h3>
                                    </div>
                                    <span className={`text-xl shrink-0 transition-all duration-300 ${
                                        openIndex === i ? 'rotate-45 text-accent' : 'text-ink-faint'
                                    }`}>
                                        +
                                    </span>
                                </div>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-ink-faint text-sm md:text-base leading-relaxed mb-7 ml-10 md:ml-[3.75rem] max-w-[600px]">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
