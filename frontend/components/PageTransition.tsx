'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // Next's own scroll-to-top on navigation doesn't reliably win once this
    // AnimatePresence wrapper sits between the router and the page — and
    // the global `scroll-behavior: smooth` turns any late, competing reset
    // into a visible multi-second glide. Force an instant reset ourselves,
    // and reassert it briefly after mount in case something else (a
    // restored scroll position, a focus target) tries to move it again.
    useEffect(() => {
        const toTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        toTop();
        const raf = requestAnimationFrame(toTop);
        const timers = [100, 350, 700].map((ms) => window.setTimeout(toTop, ms));
        return () => {
            cancelAnimationFrame(raf);
            timers.forEach(clearTimeout);
        };
    }, [pathname]);

    return (
        <AnimatePresence initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
