'use client';

import { motion } from 'framer-motion';

interface RoadmapProps {
    eyebrow: string;
    heading: React.ReactNode;
    body: string[];
    items: { title: string; desc: string }[];
}

/**
 * Deliberately styled differently from CapabilityList (dashed borders, a
 * literal "not built yet" badge) so a reader can't mistake vision for a
 * shipped feature — the one place on the site where we say what we don't
 * have yet, on purpose, instead of blurring it into the capability list.
 */
export default function Roadmap({ eyebrow, heading, body, items }: RoadmapProps) {
    return (
        <section className="py-24 md:py-32 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="flex items-center gap-3 mb-8">
                    <span className="section-label !mb-0">{eyebrow}</span>
                    <span className="font-data text-[10px] tracking-widest uppercase text-ink-faint border border-dashed border-line-strong px-3 py-1">
                        Not built yet
                    </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start mb-16">
                    <h2 className="heading-lg text-ink">{heading}</h2>
                    <div className="flex flex-col gap-4">
                        {body.map((p, i) => (
                            <p key={i} className="text-ink-soft text-base md:text-lg leading-relaxed">{p}</p>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            className="p-6 md:p-8 border border-dashed border-line-strong"
                        >
                            <h3 className="text-lg font-bold text-ink mb-2">{item.title}</h3>
                            <p className="text-ink-soft text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
