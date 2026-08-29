'use client';

import { motion } from 'framer-motion';

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

interface ContactCTAProps {
    eyebrow: string;
    heading: React.ReactNode;
    subtext: string;
}

/**
 * For enterprise/gov sales motions (Defense, Space) — a scheduled call,
 * not a self-serve signup form. Matches the pricing logic: agriculture
 * is self-serve ($/ha), everything else is "talk to us".
 */
export default function ContactCTA({ eyebrow, heading, subtext }: ContactCTAProps) {
    return (
        <section id="contact" className="py-24 md:py-32 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-16 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <div className="section-label mb-8">{eyebrow}</div>
                        <h2 className="heading-lg text-ink mb-6">{heading}</h2>
                        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[520px]">
                            {subtext}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col gap-4 md:items-end"
                    >
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full md:w-auto text-center"
                        >
                            Book a call ↗
                        </a>
                        <a
                            href="mailto:petr@phasq.com"
                            className="btn-outline w-full md:w-auto text-center"
                        >
                            petr@phasq.com
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
