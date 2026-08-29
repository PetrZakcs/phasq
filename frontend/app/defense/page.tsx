'use client';

import Navbar from "@/components/Navbar";
import SectorHero from "@/components/SectorHero";
import CapabilityList from "@/components/CapabilityList";
import Coverage from "@/components/Coverage";
import ProcessSteps from "@/components/ProcessSteps";
import Roadmap from "@/components/Roadmap";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

export default function DefensePage() {
    return (
        <main className="bg-ground text-ink selection:bg-accent/30">
            <Navbar />

            <SectorHero
                tag="DEF"
                eyebrow="Defense & Government · All-weather SAR"
                title={<>Persistent visibility, day or night, rain or shine.</>}
                subtitle="C-band radar penetrates cloud cover, smoke, and full darkness. Detect vehicle displacement, infrastructure change, and subsurface anomalies — through concealment optical sensors can't see past."
                primaryCta={{ label: 'Book a demo ↗', href: CALENDLY_URL, external: true }}
                secondaryCta={{ label: 'See the physics', href: '#physics' }}
                videoDesktop="/hero-defense-desktop.mp4"
                videoMobile="/hero-defense-mobile.mp4"
                poster="/hero-defense-poster.jpg"
                caption="Aerial night footage — illustrative, not PhasQ output"
                videoClassName="grayscale contrast-125 saturate-100"
            />

            <CapabilityList
                eyebrow="What it does"
                heading={<>Built for persistent<br />monitoring.</>}
                intro="A single physics engine applied to change detection, displacement, and concealment — the same radar backscatter analysis as our agriculture product, tuned for a different tempo."
                items={[
                    { title: 'Change detection (24h)', desc: 'Compare successive Sentinel-1 passes to flag new activity at a site of interest within a day.' },
                    { title: 'Sub-meter displacement', desc: 'InSAR-based coherence and phase analysis for structural or ground movement, not just optical shadows.' },
                    { title: 'Through-cover detection', desc: 'Metal surfaces produce a near-perfect corner-reflection return — a signature that lightweight foliage and camouflage netting can\'t mask.' },
                    { title: 'Dark vessel detection', desc: 'Maritime SAR scans flag radar returns with no matching AIS transponder signal.' },
                ]}
            />

            <Coverage />
            <ProcessSteps />

            {/* Credibility anchor: real physics, not a fabricated case study */}
            <section id="physics" className="py-24 md:py-32 bg-surface border-t border-line">
                <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-20">
                    <div>
                        <div className="section-label">Why this holds up</div>
                        <h2 className="heading-md text-ink">
                            No case study yet.<br />Here&apos;s the physics instead.
                        </h2>
                    </div>
                    <div className="flex flex-col gap-6 text-ink-soft text-base md:text-lg leading-relaxed">
                        <p>
                            We don&apos;t have a public defense deployment to point to — this vertical is
                            early, and we&apos;d rather say that plainly than dress up a demo as an
                            operational result.
                        </p>
                        <p>
                            What we can show is the mechanism: radar backscatter (σ⁰) is governed by the
                            radar equation, not a trained visual classifier. Metal produces a distinct
                            double-bounce return regardless of lighting, weather, or thin overhead cover —
                            that&apos;s electromagnetics, not machine-learned pattern matching, which is why
                            it doesn&apos;t degrade the way an optical detector does.
                        </p>
                        <p>
                            For a technical briefing on the calibration pipeline and what we can and
                            can&apos;t validate today, book time directly below.
                        </p>
                    </div>
                </div>
            </section>

            <Roadmap
                eyebrow="Where this is going"
                heading={<>The satellite gives the alert.<br />The gap is what happens next.</>}
                body={[
                    "A 6-day revisit is wide, all-weather coverage — and also a real gap: whatever changes at hour 2 of that cycle isn't confirmed until hour 144. That gap is exactly what defense ISR programs already solve by pairing wide-area satellite cueing with a drone or UAS that closes in and holds the target in view.",
                    "We're designing toward the same architecture: the same physics engine — radar backscatter, phase coherence — applied to drone-mounted SAR and EO feeds, so a satellite-flagged anomaly can be picked up and tracked in near-real-time instead of waiting for the next pass.",
                    "This isn't shipped. We'd rather show you the direction honestly than imply a capability that doesn't exist yet — and if persistent, real-time coverage between passes matters to your program, that's a conversation worth having now, while the architecture is still being shaped around real requirements.",
                ]}
                items={[
                    { title: 'Drone / UAS sensor fusion', desc: 'Extending the calibration pipeline to drone-mounted SAR and EO payloads, not just satellite passes.' },
                    { title: 'Continuous custody', desc: 'Hold a satellite-flagged site in view between the 6-day revisit windows, not just re-check it next pass.' },
                    { title: 'Edge-side cueing', desc: 'Push the anomaly-detection step closer to the sensor so a flag can trigger a response in minutes, not after downlink.' },
                ]}
            />

            <ContactCTA
                eyebrow="Talk to us"
                heading={<>Persistent coverage<br />starts with a call.</>}
                subtext="Custom pricing, on-premise deployment options, and dedicated analyst support for defense and government programs. No self-serve signup for this tier — let's talk about your requirements directly."
            />

            <Footer />
        </main>
    );
}
