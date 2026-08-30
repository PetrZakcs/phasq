'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import BgVideo from './BgVideo';
import ScrollCue from './ScrollCue';

interface Cta {
    label: string;
    href: string;
    external?: boolean;
}

interface SectorHeroProps {
    tag: string;
    eyebrow: string;
    title: React.ReactNode;
    subtitle: string;
    primaryCta: Cta;
    secondaryCta: Cta;
    videoDesktop: string;
    videoMobile: string;
    poster: string;
    caption: string;
    videoClassName?: string;
}

export default function SectorHero({
    tag,
    eyebrow,
    title,
    subtitle,
    primaryCta,
    secondaryCta,
    videoDesktop,
    videoMobile,
    poster,
    caption,
    videoClassName = 'saturate-[0.7] contrast-105',
}: SectorHeroProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
    const videoY = useTransform(scrollYProgress, [0, 1], ['0%', '-18%']);

    return (
        <section
            ref={sectionRef}
            className="relative min-h-[85svh] w-full flex flex-col justify-end bg-ground overflow-hidden py-20 md:py-28"
        >
            <motion.div className="absolute inset-0" style={{ y: videoY }}>
                <BgVideo
                    desktopSrc={videoDesktop}
                    mobileSrc={videoMobile}
                    poster={poster}
                    className={`w-full h-[130%] ${videoClassName}`}
                />
                <span className="absolute bottom-4 right-5 font-data text-[9px] tracking-[0.15em] uppercase text-ink/40">
                    {caption}
                </span>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-ground/55 via-ground/75 to-ground" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 lg:px-20">
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-7 flex items-center gap-3"
                >
                    <span className="font-data text-[13px] text-accent">[{tag}]</span>
                    <span className="w-8 h-px bg-line-strong" />
                    <span className="eyebrow text-ink-faint">{eyebrow}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="heading-xl text-[2.6rem] sm:text-[3.8rem] md:text-[5rem] text-ink mb-8 max-w-[20ch]"
                >
                    {title}
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-10"
                >
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[520px]">
                        {subtitle}
                    </p>

                    <div className="flex flex-wrap gap-3 shrink-0">
                        <a
                            href={primaryCta.href}
                            target={primaryCta.external ? '_blank' : undefined}
                            rel={primaryCta.external ? 'noopener noreferrer' : undefined}
                            className="btn-primary w-full sm:w-auto text-center"
                        >
                            {primaryCta.label}
                        </a>
                        <a
                            href={secondaryCta.href}
                            target={secondaryCta.external ? '_blank' : undefined}
                            rel={secondaryCta.external ? 'noopener noreferrer' : undefined}
                            className="btn-outline w-full sm:w-auto text-center"
                        >
                            {secondaryCta.label}
                        </a>
                    </div>
                </motion.div>
            </div>

            <ScrollCue />
        </section>
    );
}
