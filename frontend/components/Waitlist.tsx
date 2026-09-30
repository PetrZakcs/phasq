'use client';

import { motion } from 'framer-motion';

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

// The Supabase-backed signup form (components/WaitlistForm.tsx) is paused
// until the database is actually set up — this section runs on a plain
// Calendly link instead. No backend, no env vars, nothing to break.
export default function Waitlist() {
    return (
        <section id="waitlist" className="py-20 md:py-28 bg-surface border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <div className="section-label mb-8">Early access</div>
                        <h2 className="heading-lg text-ink mb-6">
                            Get early<br /><span className="text-accent">access.</span>
                        </h2>
                        <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[480px]">
                            We&apos;re onboarding a small number of pilot users directly, one conversation
                            at a time — agriculture, infrastructure, and defense operators get priority.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="bg-ground border border-line p-8 md:p-12 flex flex-col items-center text-center gap-6"
                    >
                        <p className="text-ink-soft text-sm md:text-base max-w-[38ch]">
                            Book a 30-minute call and we&apos;ll walk through what PhasQ can do for your
                            specific area of interest.
                        </p>
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary w-full sm:w-auto"
                        >
                            Book a call ↗
                        </a>
                        <a
                            href="mailto:petr@phasq.com"
                            className="text-ink-faint text-[13px] hover:text-ink-soft transition-colors"
                        >
                            or email petr@phasq.com
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
