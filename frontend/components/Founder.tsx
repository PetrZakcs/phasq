'use client';

import { motion } from 'framer-motion';

export default function Founder() {
    return (
        <section id="company" className="py-24 md:py-32 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Who&apos;s building this</div>

                <div className="grid grid-cols-1 md:grid-cols-[380px_1fr] gap-12 md:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="aspect-[4/5] overflow-hidden bg-surface border border-line"
                    >
                        <img
                            src="/team/petr-zak.jpg"
                            alt="Petr Žák, founder of PhasQ"
                            className="w-full h-full object-cover object-top grayscale contrast-[1.05]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col justify-center"
                    >
                        <h2 className="heading-lg text-ink mb-2">Petr Žák</h2>
                        <div className="eyebrow text-accent mb-8">Founder</div>

                        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[640px] mb-6">
                            GIS specialist who built PhasQ&apos;s physics engine from scratch — radiometric
                            calibration, Lee speckle filtering, incidence-angle normalization — because pattern-matching
                            an optical image is not the same thing as measuring a radar return.
                        </p>
                        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[640px] mb-10">
                            PhasQ is a small, technical team by design at this stage: the fewer hands between the
                            radar equation and the dashboard, the fewer places for a claim to get soft. That changes
                            as the team grows — but everyone on this page will be someone you can actually look up.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/petrzak01/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block w-fit text-[13px] font-semibold text-ink-soft border border-line-strong px-5 py-2.5 hover:text-ink hover:border-ink-soft transition-all"
                        >
                            LinkedIn ↗
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
