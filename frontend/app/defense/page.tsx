import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import SectorHero from "@/components/SectorHero";
import CapabilityList from "@/components/CapabilityList";
import Coverage from "@/components/Coverage";
import ProcessSteps from "@/components/ProcessSteps";
import Roadmap from "@/components/Roadmap";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const CALENDLY_URL = "https://calendly.com/petr-phasq/30min";

export const metadata: Metadata = {
    title: "Defense & Government",
    description: "All-weather, day-or-night SAR monitoring — change detection, sub-meter displacement, and through-cover detection from the same physics engine, no case study dressed up as more than it is.",
};

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

            <Coverage
                eyebrow="The surveillance gap"
                body="That's the long-term average share of Earth under cloud at any given moment — 66.7%, per four decades of satellite cloud climatology. For persistent monitoring, that's not a statistic — it's a window an adversary can plan around. C-band radar doesn't care which third of the sky happens to be clear."
            />
            <ProcessSteps />

            {/* Credibility anchor: real physics, not a fabricated case study */}
            <section id="physics" className="py-20 md:py-28 bg-surface border-t border-line">
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
                heading={<>We&apos;re not building the drone.<br />We&apos;re reading what it sees.</>}
                body={[
                    "A 6-day satellite revisit is wide, all-weather coverage — and also a real gap: whatever changes at hour 2 isn't confirmed until hour 144. Defense ISR programs already close that gap by pairing satellite cueing with a drone that holds the site in view. We're not going to out-build the companies that make that possible — IMSAR and PierSight already build excellent small SAR payloads; Anduril, Helsing, and Shield AI already build the autonomy and fusion platforms around them, at a scale we can't and shouldn't try to match.",
                    "What we're extending instead is the calibration layer underneath: the same radiometric calibration and backscatter physics we already run on Sentinel-1, pointed at a drone-mounted SAR feed instead — whoever's antenna it is. A satellite flags an anomaly; a partner's drone confirms it; our engine turns both returns into the same explainable number, on the same scale, either way.",
                    "This isn't shipped, and we're not trying to become a hardware or autonomy company. If you already fly a SAR-equipped drone and the interpretation layer is the missing piece, that's the conversation worth having now — not us pitching a drone we have no business building.",
                ]}
                items={[
                    { title: 'Sensor-agnostic calibration', desc: 'The same radiometric calibration and backscatter physics regardless of whether the antenna is Sentinel-1 or a partner\'s drone-mounted SAR pod.' },
                    { title: 'Continuous custody', desc: 'Hold a satellite-flagged site in view between 6-day revisit windows using a partner\'s drone payload — not one we build ourselves.' },
                    { title: 'Integration, not hardware', desc: 'We plug into existing SAR payloads and autonomy stacks. Building the drone or the radar pod is someone else\'s discipline, not ours.' },
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
