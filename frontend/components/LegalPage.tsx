import Navbar from './Navbar';
import Footer from './Footer';

interface LegalPageProps {
    title: string;
    updated: string;
    children: React.ReactNode;
}

/** Shared shell for /privacy and /terms — a document, not a marketing page. */
export default function LegalPage({ title, updated, children }: LegalPageProps) {
    return (
        <main className="bg-ground text-ink selection:bg-accent/30">
            <Navbar />
            <article className="pt-32 md:pt-40 pb-24 md:pb-32">
                <div className="max-w-[740px] mx-auto px-6 md:px-10">
                    <div className="section-label">Legal</div>
                    <h1 className="heading-lg text-[2.4rem] md:text-[3rem] text-ink mb-4">{title}</h1>
                    <p className="font-data text-[11px] tracking-widest uppercase text-ink-faint mb-16">
                        Last updated {updated}
                    </p>
                    <div className="legal-copy flex flex-col gap-10 text-ink-soft text-[15px] md:text-base leading-relaxed">
                        {children}
                    </div>
                </div>
            </article>
            <Footer />
        </main>
    );
}
