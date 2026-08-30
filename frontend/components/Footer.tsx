'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/phasqcom/";
const LINKEDIN_URL = "https://www.linkedin.com/company/phasq1";
const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

export default function Footer() {
    return (
        <footer className="py-20 md:py-24 bg-ground border-t border-line overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 mb-16"
                >
                    <div className="flex flex-col col-span-2">
                        <div className="font-display text-2xl font-bold text-ink mb-6">
                            PHASQ<span className="text-accent">.com</span>
                        </div>
                        <p className="text-ink-faint text-sm md:text-base leading-relaxed max-w-[320px] mb-8">
                            Physics-based radar intelligence. Reading the actual radar return, not a picture of it.
                        </p>

                        {/* Instrument nameplate — the same wet→extreme scale used on every reading */}
                        <div className="max-w-[220px] mb-8">
                            <div className="h-[3px] w-full bg-surface overflow-hidden mb-1.5">
                                <motion.div
                                    className="legend-strip h-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
                                />
                            </div>
                            <div className="flex justify-between font-data text-[8px] tracking-widest uppercase text-ink-faint">
                                <span>Wet</span>
                                <span>Extreme</span>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <motion.a
                                whileHover={{ y: -3, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
                                className="text-ink-faint hover:text-ink transition-colors"
                            >
                                <Instagram className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -3, scale: 1.08 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                                href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"
                                className="text-ink-faint hover:text-ink transition-colors"
                            >
                                <Linkedin className="w-5 h-5" />
                            </motion.a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="eyebrow mb-2">Contact</h4>
                        <a href="mailto:petr@phasq.com" className="group flex items-center gap-4 text-ink-soft hover:text-ink transition-colors text-sm">
                            <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all">
                                <Mail className="w-4 h-4" />
                            </div>
                            petr@phasq.com
                        </a>
                        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-ink-soft hover:text-ink transition-colors text-sm">
                            <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 group-hover:scale-110 transition-all font-data text-[10px] font-medium">
                                CAL
                            </div>
                            Book a demo
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="font-data text-[10px] text-ink-faint tracking-[0.15em]">© 2026 PHASQ TECHNOLOGIES</span>
                    </div>
                </motion.div>

                <div className="pt-10 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-data text-[10px] text-ink-faint tracking-[0.3em] uppercase">
                        Sentinel-1 · Sentinel-2 · Google Earth Engine
                    </div>
                </div>
            </div>
        </footer>
    );
}
