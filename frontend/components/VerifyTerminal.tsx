'use client';

import { motion } from 'framer-motion';
import type { CaseStudy } from '@/lib/cases';

/**
 * Styled like a terminal log, not a fake runnable command — these are the
 * exact filter values, formatted for the audience that will actually go
 * paste them into the Copernicus Browser.
 */
export default function VerifyTerminal({ item }: { item: CaseStudy }) {
    const rows: [string, string][] = [
        ['product', item.verify.product],
        ['polarization', item.verify.polarization],
        ['resolution', item.verify.resolution],
        ['bbox', item.verify.bbox],
        ['date_range', item.verify.dateRange],
    ];

    return (
        <div className="bg-[#08090a] border border-line font-data text-[13px] leading-relaxed">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-line">
                <span className="w-2 h-2 rounded-full bg-line-strong" />
                <span className="text-ink-faint text-[11px] tracking-widest uppercase">query.log</span>
            </div>
            <div className="p-5 md:p-6 overflow-x-auto">
                <div className="text-ink-faint mb-3">
                    <span className="text-accent">$</span> filters --area-of-interest
                </div>
                {rows.map(([k, v], i) => (
                    <motion.div
                        key={k}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                        className="flex gap-4 py-0.5"
                    >
                        <span className="text-ink-faint w-28 shrink-0">{k}</span>
                        <span className="text-ink break-all">{v}</span>
                    </motion.div>
                ))}
                <div className="text-ink-faint mt-4 mb-1">
                    <span className="text-accent">$</span> result
                </div>
                <div className="flex gap-4 py-0.5">
                    <span className="text-ink-faint w-28 shrink-0">scenes_returned</span>
                    <span className="text-ink">{item.verify.scenes}</span>
                </div>
                <div className="flex items-center gap-1 mt-4">
                    <span className="text-accent">$</span>
                    <span className="w-2 h-4 bg-ink-faint/60 animate-pulse" />
                </div>
            </div>
        </div>
    );
}
