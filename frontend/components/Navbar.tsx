'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { Instagram, Linkedin } from 'lucide-react';

export default function Navbar() {
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    const navLinks = [
        { name: 'Technology', href: '#technology' },
        { name: 'Evidence', href: '#missions' },
        { name: 'Process', href: '#process' },
    ];

    const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";
    const INSTAGRAM_URL = "https://www.instagram.com/phasq1/";
    const LINKEDIN_URL = "https://www.linkedin.com/company/phasq1";

    return (
        <>
            <nav
                className={`fixed top-[3px] left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300 ${
                    scrolled ? 'bg-ground/90 backdrop-blur-xl border-b border-line py-4 px-6 md:px-10' : 'bg-transparent py-6 px-6 md:px-10'
                }`}
            >
                <Link href="/" className="relative w-[30px] h-[36px] flex items-center justify-center flex-shrink-0">
                    <Logo style={{ width: '100%', height: '100%' }} />
                </Link>

                <div className="hidden md:flex items-center gap-9">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="nav-link text-[13px] font-medium text-ink-soft hover:text-ink transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex text-ink-faint hover:text-ink transition-colors"
                    >
                        <Instagram className="w-4 h-4" />
                    </a>

                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden lg:block text-[13px] font-semibold text-accent border border-accent/40 hover:bg-accent hover:text-ink px-5 py-2.5 transition-all"
                    >
                        Book a demo
                    </a>

                    <Link
                        href="#waitlist"
                        className="group text-[13px] font-semibold text-ground bg-ink px-5 py-2.5 flex items-center gap-2 hover:bg-accent hover:text-ink transition-all"
                    >
                        Get access
                        <span className="hidden sm:inline-block transition-transform duration-300 group-hover:translate-x-1">↗</span>
                    </Link>

                    <button
                        className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <span className={`w-6 h-px bg-ink transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-6 h-px bg-ink transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`w-6 h-px bg-ink transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`fixed inset-0 z-[90] bg-ground/98 backdrop-blur-3xl md:hidden transition-transform duration-500 ease-in-out ${
                    mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8 px-10">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="font-display text-3xl font-bold uppercase text-ink hover:text-accent transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <div className="w-20 h-px bg-line-strong my-4" />
                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-ground bg-ink px-10 py-5 w-full text-center"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Book a demo
                    </a>
                    <div className="flex gap-10 mt-6">
                        <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-ink-faint hover:text-ink transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
