'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

const TIERS = [
    {
        id: 'AGR',
        name: 'Agriculture',
        price: '$5',
        period: '/ ha / year',
        desc: 'Precision moisture monitoring for modern farms.',
        features: [
            'Weekly root-zone updates',
            'Drought prediction models',
            'Yield forecasting',
            'Variable rate maps (VRA)',
            'Unlimited team access',
        ],
        cta: 'Join early access ↗',
        ctaLink: '#waitlist',
        highlight: true,
    },
    {
        id: 'DEF',
        name: 'Defense & Gov',
        price: 'Custom',
        period: '',
        desc: 'Persistent surveillance. Strategic-grade analysis.',
        features: [
            'Daily revisit (constellation)',
            'Sub-mm subsidence detection',
            'Dark vessel detection',
            'On-premise deployment',
            'Dedicated analyst support',
        ],
        cta: 'Book a demo ↗',
        ctaLink: CALENDLY_URL,
        highlight: false,
    },
    {
        id: 'INF',
        name: 'Infrastructure',
        price: 'Custom',
        period: '',
        desc: 'Continuous stability monitoring for critical assets.',
        features: [
            'Pipeline integrity analysis',
            'Dam stability monitoring',
            'Bridge vibration analysis',
            'Landslide early warning',
            'Raw phase data access',
        ],
        cta: 'Book a demo ↗',
        ctaLink: CALENDLY_URL,
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">Pricing</div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-10 mb-16">
                    <h2 className="heading-lg text-ink">
                        Transparent<br />pricing.
                    </h2>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[400px]">
                        Scalable intelligence from single fields to national-scale monitoring.
                        One platform, any operational scope.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border-t border-line overflow-hidden">
                    {TIERS.map((tier, i) => (
                        <motion.div
                            key={tier.id}
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className={`p-8 md:p-11 relative flex flex-col border-b md:border-b-0 md:border-r border-line last:border-b-0 last:border-r-0 ${
                                tier.highlight ? 'bg-surface' : 'bg-transparent'
                            }`}
                        >
                            {tier.highlight && <div className="absolute top-0 left-0 right-0 legend-strip" />}

                            <div className="font-data text-[11px] text-ink-faint mb-6">{tier.id}</div>
                            <div className="text-[13px] font-semibold text-ink-soft mb-4">{tier.name}</div>

                            <div className="mb-4">
                                <span className={`font-data text-ink tracking-tight ${tier.price === 'Custom' ? 'text-3xl' : 'text-5xl font-medium'}`}>
                                    {tier.price}
                                </span>
                                {tier.period && (
                                    <span className="font-data text-[12px] text-ink-faint ml-2">{tier.period}</span>
                                )}
                            </div>

                            <p className="text-ink-faint text-sm leading-relaxed mb-10">{tier.desc}</p>

                            <div className="w-full h-px bg-line mb-8" />

                            <ul className="list-none p-0 m-0 mb-12 flex-1 space-y-4">
                                {tier.features.map((f) => (
                                    <li key={f} className="flex items-start gap-4 text-sm text-ink-soft">
                                        <div className={`w-3.5 h-3.5 flex items-center justify-center shrink-0 mt-0.5 ${tier.highlight ? 'bg-accent' : 'bg-line-strong'}`}>
                                            <Check className={`w-2 h-2 ${tier.highlight ? 'text-accent-ink' : 'text-ink-faint'}`} />
                                        </div>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={tier.ctaLink}
                                target={tier.ctaLink.startsWith('http') ? "_blank" : "_self"}
                                rel={tier.ctaLink.startsWith('http') ? "noopener noreferrer" : undefined}
                                className={`block w-full py-4 text-center text-[13px] font-semibold transition-all duration-300 border ${
                                    tier.highlight
                                        ? 'bg-ink text-ground border-transparent hover:bg-accent hover:text-ink'
                                        : 'text-ink-soft border-line-strong hover:text-ink hover:border-ink-soft'
                                }`}
                            >
                                {tier.cta}
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
