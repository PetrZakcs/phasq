'use client';

import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * The page itself reads like the instrument it describes: as you scroll
 * from top to bottom, the ambient color moves through the same
 * wet -> normal -> dry -> very dry -> extreme scale as the legend-strip
 * and every severity reading on the site. Same five colors, same order —
 * not a new palette invented for the effect.
 *
 * mix-blend-mode: screen only ever adds light — it can't darken anything
 * or reduce contrast, which matters on a near-black page where a
 * luminosity-preserving blend (e.g. "color") would barely register at
 * all against near-zero luminance. At low opacity it reads as ambient
 * mood lighting, not a colored film over the text.
 */
export default function ScrollTint() {
    const { scrollYProgress } = useScroll();
    const color = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ['#3fa8a0', '#8fa05a', '#d9a339', '#c1602c', '#9c3324']
    );

    return (
        <motion.div
            aria-hidden="true"
            className="fixed inset-0 z-[85] pointer-events-none"
            style={{ backgroundColor: color, opacity: 0.16, mixBlendMode: 'screen' }}
        />
    );
}
