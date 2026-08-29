'use client';

import { Mail, Linkedin, Instagram } from 'lucide-react';

const INSTAGRAM_URL = "https://www.instagram.com/phasq1/";
const LINKEDIN_URL = "https://www.linkedin.com/company/phasq1";
const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

export default function Footer() {
    return (
        <footer className="py-20 md:py-24 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-10 mb-16">
                    <div className="flex flex-col col-span-2">
                        <div className="font-display text-2xl font-bold text-ink mb-6">
                            PHASQ<span className="text-accent">.tech</span>
                        </div>
                        <p className="text-ink-faint text-sm md:text-base leading-relaxed max-w-[320px] mb-8">
                            Physics-based radar intelligence. Reading the actual radar return, not a picture of it.
                        </p>
                        <div className="flex gap-6">
                            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h4 className="eyebrow mb-2">Contact</h4>
                        <a href="mailto:petr@phasq.com" className="group flex items-center gap-4 text-ink-soft hover:text-ink transition-colors text-sm">
                            <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all">
                                <Mail className="w-4 h-4" />
                            </div>
                            petr@phasq.com
                        </a>
                        <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-ink-soft hover:text-ink transition-colors text-sm">
                            <div className="w-10 h-10 rounded-full border border-line flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all font-data text-[10px] font-medium">
                                CAL
                            </div>
                            Book a demo
                        </a>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h4 className="eyebrow mb-2">System</h4>
                        <span className="font-data text-[10px] text-ink-faint tracking-[0.15em]">v1.2.5 — DEMO MODE</span>
                        <span className="font-data text-[10px] text-ink-faint tracking-[0.15em]">© 2026 PHASQ TECHNOLOGIES</span>
                    </div>
                </div>

                <div className="pt-10 border-t border-line flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="font-data text-[10px] text-ink-faint tracking-[0.3em] uppercase">
                        Sentinel-1 · Sentinel-2 · Google Earth Engine
                    </div>
                </div>
            </div>
        </footer>
    );
}
