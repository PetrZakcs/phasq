'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * The legend-strip, but doing actual work: fills left-to-right with page
 * scroll progress. Same wet→extreme gradient as everywhere else — the one
 * decorative device on this site that was always meant to double as a gauge.
 */
export default function ScrollGauge() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 220, damping: 32, restDelta: 0.001 });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-[101] h-[3px] legend-strip origin-left"
            style={{ scaleX }}
        />
    );
}
