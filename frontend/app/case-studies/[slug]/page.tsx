import { notFound } from 'next/navigation';
import Link from 'next/link';
import { CASES, getCase } from '@/lib/cases';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Waitlist from '@/components/Waitlist';
import CaseHero from '@/components/CaseHero';

export function generateStaticParams() {
    return CASES.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const item = getCase(slug);
    if (!item) notFound();

    return (
        <main className="bg-ground text-ink selection:bg-accent/30 overflow-x-hidden">
            <Navbar />
            <CaseHero item={item} />

            {/* The honest part — why this exists at all */}
            <section className="py-24 md:py-32 bg-surface border-t border-line">
                <div className="max-w-[900px] mx-auto px-6 md:px-10">
                    <div className="section-label">Why we&apos;re showing you this</div>
                    <h2 className="heading-md text-ink mb-8">
                        We could have shown you a demo.<br />We showed you this instead.
                    </h2>
                    <div className="flex flex-col gap-5 text-ink-soft text-base md:text-lg leading-relaxed">
                        <p>
                            Almost every satellite-analytics homepage has a beautiful case study. Ask most of
                            them for the exact coordinates and the exact date range, and watch how fast the
                            conversation changes. That number is usually the first thing to go soft.
                        </p>
                        <p>
                            Ours isn&apos;t going anywhere. The bounding box, the date range, and the product
                            type below are the actual parameters we queried. Paste them into the free
                            Copernicus Browser yourself and you will pull the same 18 scenes we did — not
                            similar ones, the same ones.
                        </p>
                        <p>
                            If that sounds like an odd thing to lead with instead of a slicker screenshot,
                            it&apos;s because we think a number a skeptical buyer can independently check is
                            worth more than one they have to take on faith.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reproduce it yourself */}
            <section className="py-24 md:py-32 bg-ground border-t border-line">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10">
                    <div className="section-label">Reproduce this yourself</div>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-12 md:gap-20">
                        <div>
                            <h2 className="heading-md text-ink mb-6">
                                Five minutes,<br />zero trust required.
                            </h2>
                            <p className="text-ink-soft text-base md:text-lg leading-relaxed mb-8 max-w-[46ch]">
                                Open the Copernicus Browser, set these exact filters, and compare what comes
                                back against the numbers on this page.
                            </p>
                            <a
                                href="https://browser.dataspace.copernicus.eu/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary w-fit"
                            >
                                Open Copernicus Browser ↗
                            </a>
                        </div>

                        <div className="bg-surface border border-line p-6 md:p-8 font-data text-[13px] leading-relaxed">
                            {[
                                ['Product', item.verify.product],
                                ['Polarization', item.verify.polarization],
                                ['Resolution', item.verify.resolution],
                                ['Scenes returned', item.verify.scenes],
                                ['Date range', item.verify.dateRange],
                                ['Area (WKT)', item.verify.bbox],
                            ].map(([k, v]) => (
                                <div key={k} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 py-3 border-b border-line last:border-b-0">
                                    <span className="text-ink-faint w-40 shrink-0 uppercase tracking-widest text-[10px] sm:pt-0.5">{k}</span>
                                    <span className="text-ink break-all">{v}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-10">
                <Link href="/#missions" className="text-[13px] font-semibold text-ink-soft hover:text-ink transition-colors">
                    ← Back to the overview
                </Link>
                <p className="font-data text-[11px] text-ink-faint tracking-widest uppercase mt-6">
                    {CASES.length} verified {CASES.length === 1 ? 'analysis' : 'analyses'} published — more added as they&apos;re completed, not before.
                </p>
            </div>

            <Waitlist />
            <Footer />
        </main>
    );
}
