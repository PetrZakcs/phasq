'use client';

import CountUp from './CountUp';

interface BigStatProps {
    eyebrow: string;
    value: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    caption: string;
}

/** One number, full width, no competing stat grid around it. */
export default function BigStat({ eyebrow, value, decimals, prefix, suffix, caption }: BigStatProps) {
    return (
        <section className="py-20 md:py-28 bg-ground border-t border-line">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                <div className="section-label">{eyebrow}</div>
                <div className="font-data text-ink tabular-nums leading-none text-[3.4rem] sm:text-[5rem] md:text-[6.6rem] mb-6">
                    <CountUp value={value} decimals={decimals} prefix={prefix} suffix={suffix} duration={1.3} />
                </div>
                <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[60ch]">{caption}</p>
            </div>
        </section>
    );
}
