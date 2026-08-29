'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function ScrollCue() {
    const [reduced, setReduced] = useState(false);

    useEffect(() => {
        setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hidden sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2"
            aria-hidden="true"
        >
            <span className="eyebrow text-[9px] text-ink-faint">Scroll</span>
            <motion.div
                className="w-px h-8 bg-line-strong"
                style={{ transformOrigin: 'top' }}
                animate={reduced ? {} : { scaleY: [1, 0.3, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            />
        </motion.div>
    );
}
