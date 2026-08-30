'use client';

import { motion } from 'framer-motion';

interface Capability {
    title: string;
    desc: string;
}

interface CapabilityListProps {
    eyebrow: string;
    heading: React.ReactNode;
    intro: string;
    items: Capability[];
}

export default function CapabilityList({ eyebrow, heading, intro, items }: CapabilityListProps) {
    return (
        <section className="py-20 md:py-28 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">{eyebrow}</div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end mb-16">
                    <h2 className="heading-lg text-ink">{heading}</h2>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[440px]">{intro}</p>
                </div>

                <div className="border-t border-line">
                    {items.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:grid md:grid-cols-[64px_1fr] gap-3 md:gap-12 py-10 md:py-12 border-b border-line last:border-b-0"
                        >
                            <div className="font-data text-[13px] text-accent shrink-0">
                                {String(i + 1).padStart(2, '0')}
                            </div>
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-ink mb-2">{item.title}</h3>
                                <p className="text-ink-soft text-sm md:text-base leading-relaxed max-w-[64ch]">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
