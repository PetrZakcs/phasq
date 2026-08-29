import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NotFound() {
    return (
        <main className="bg-ground text-ink selection:bg-accent/30 min-h-screen flex flex-col">
            <Navbar />
            <section className="flex-1 flex items-center py-32">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 w-full">
                    <div className="section-label">404 — no return detected</div>
                    <h1 className="heading-xl text-[3rem] sm:text-[4.5rem] md:text-[6rem] text-ink mb-6 max-w-[16ch]">
                        Nothing came back<br />on this pass.
                    </h1>
                    <p className="text-ink-soft text-base md:text-lg leading-relaxed max-w-[52ch] mb-10">
                        The page you&apos;re looking for doesn&apos;t exist, or the coordinates changed.
                        Radar doesn&apos;t hallucinate a return where there isn&apos;t one — so neither do we.
                    </p>
                    <Link href="/" className="btn-primary w-fit">
                        Back to the homepage ↗
                    </Link>
                </div>
            </section>
            <Footer />
        </main>
    );
}
