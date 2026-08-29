'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
    value: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    duration?: number;
    className?: string;
}

/** Animates a numeric readout up to its real value once it scrolls into view. */
export default function CountUp({ value, decimals = 0, prefix = '', suffix = '', duration = 1.1, className }: CountUpProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });
    const [display, setDisplay] = useState(0);
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    useEffect(() => {
        if (!inView) return;
        if (reduced) {
            setDisplay(value);
            return;
        }
        let raf: number;
        const start = performance.now();
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / (duration * 1000));
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(value * eased);
            if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, duration, reduced]);

    return (
        <span ref={ref} className={className}>
            {prefix}{display.toFixed(decimals)}{suffix}
        </span>
    );
}
